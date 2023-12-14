import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../services/apis';
import AppContext from '../AppContext';
import { SmallLoader } from './Loaders';

function MainApp() {

    const {user, setUser, pageTitle} = useContext(AppContext);
    const navigate = useNavigate();

    const appMenuItems = [
        {
            name:"Dashboard",
            path:"/dashboard",
            icon:"fas fa-tachometer"
        },
        {
            name:"All Events",
            path:"/all-events",
            icon:"fas fa-calendar"
        },
        {
            name:"My Events",
            path:"/my-events",
            icon:"fas fa-book"
        },
        {
            name:"Create Event",
            path:"/create-event",
            icon:"fas fa-pencil"
        },
        {
            name:"Opportunities",
            path:"/opportunities",
            icon:"fas fa-star"
        }
    ]

    const [menuList, setMenuList] = useState(appMenuItems);

    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const token = localStorage.getItem("alumeet__token");
        if(!token){
            navigate("/login")
            return;
        }

        const getUser = async()=>{
            try {
                setLoading(true);
                const response = await getCurrentUser(token);
                if(response.data.user){
                    const data = response.data.user
                    setUser(data)
                    console.log(data.role)
                    if(data.role === "manager"){
                        setMenuList(
                        [
                            ...appMenuItems,
                            {
                                name:"Manage Users",
                                path:"/manage-users",
                                icon:"fas fa-users"
                            }
                        ])                        
                    }

                    else{
                        if(window.location.pathname.includes("/manage-users")){
                            navigate("/dashboard")
                        }
                    }
                }    
                
                else{
                    navigate("/login")
                }
                
            } catch (error) {
                console.log(error)                
            }
            finally{
                setLoading(false)
            }
        }
        getUser();
    }, [])

    const handleLogout = async()=>{
        localStorage.removeItem("alumeet__token");
        setUser(null);
        await logout();
        navigate("/login")
    }


    return (
        <div className='flex h-screen main__app'>

            <>
            {loading ?

            <div className='w-full h-full full-center border main__app--loader'>
                <SmallLoader/>
            </div>

            :

            <>
                <div className='app__sidebar bg__main gap-5 flex flex-col items-center px-2 py-2 text-white w-1/5'>
                    <div className='text-2xl font-700'>ALUMEET</div>
                    <nav className='flex-1 w-full'>
                        <ul className='flex flex-col gap-1'>
                            {menuList.map((item, i)=>(
                                <li key={i} className='flex justify-center'>
                                    <NavLink to={item.path} className={`flex gap-1 items-center w-full text-white`}>
                                        <i className={item.icon}></i>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        
                        <div className='flex justify-center mt-3'>
                            <button onClick={handleLogout} className='mx-auto px-2 btn__logout cursor-pointer'>LOGOUT</button>
                        </div>
                    </nav>

                    <label htmlFor="appSidebarToggle" className='close__sidebar'>
                        <i className='fas fa-times'></i>
                    </label>

                </div>
                <div className='flex-1 app__main'>
                    <div className='app__header bg-white justify-between shadow-3 flex items-center px-5'>
                        <div className='app__toggle'>
                            <input type="checkbox" id="appSidebarToggle" hidden/>
                            <label htmlFor="appSidebarToggle">
                                <i className='fas fa-align-justify'></i>
                            </label>
                        </div>
                        <div className='text-xl font-600 uppercase'>{pageTitle}</div>
                        <div className='flex items-center gap-1 header__profile'>
                            <img src="/hero.jpeg" alt="" className='user__avatar rounded-full cover' />
                            <div className='flex flex-col'>
                                <span className='text__main font-600'>{user?.firstName} {user?.lastName}</span>
                                <NavLink to="/profile" className="text-gray">
                                    View Profile
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                    <Outlet/>
                </div>           
            </>

            }
            </>


        </div>
    );
}

export default MainApp;