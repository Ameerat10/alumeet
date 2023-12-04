import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function MainApp() {

    const appMenuItems = [
        {
            name:"Dashboard",
            path:"/dashboard",
            icon:"fas fa-tachometer"
        },
        {
            name:"All Events",
            path:"/all-events",
            icon:"fas fa-tachometer"
        },
        {
            name:"My Events",
            path:"/my-events",
            icon:"fas fa-tachometer"
        },
        {
            name:"Create Event",
            path:"/create-event",
            icon:"fas fa-tachometer"
        },
        {
            name:"Opportunities",
            path:"/opportunities",
            icon:"fas fa-tachometer"
        }
    ]


    return (
        <div className='flex h-screen'>
            <div className='app__sidebar bg__main gap-5 flex flex-col items-center px-2 py-2 text-white w-1/5'>
                <div>ALUMEET</div>
                <nav className='flex-1 w-full'>
                    <ul className='flex flex-col gap-1'>
                        {appMenuItems.map((item, i)=>(
                            <li key={i} className='flex justify-center'>
                                <NavLink to={item.path} className={`flex gap-1 items-center w-full text-white`}>
                                    <i className={item.icon}></i>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
            <div className='flex-1'>
                <div className='app__header justify-between shadow-3 flex items-center px-5'>
                    <div className='text-xl font-600'>DASHBOARD</div>
                    <div className='flex items-center gap-1'>
                        <img src="/hero.jpeg" alt="" className='user__avatar rounded-full cover' />
                        <div className='flex flex-col'>
                            <span className='text__main font-600'>Audrey James</span>
                            <NavLink to="/profile" className="text-gray">
                                View Profile
                            </NavLink>
                        </div>
                    </div>
                    
                </div>
                <Outlet/>
            </div>            
        </div>
    );
}

export default MainApp;