import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteUser, getUsers } from '../services/apis';
import { SmallLoader } from '../components/Loaders';

function ManageUsers(props) {

    const {user, setPageTitle} = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setPageTitle("Manage Users")
        const fetchUsers = async()=>{
            try {
                setLoading(true);
                const response = await getUsers();
                if(response){
                    setUsers(response)
                }   
                
            } catch (error) {
                console.log(error)                                
            }
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    }, [])

    const tableHeaders = [
        "User ID",
        "First Name",
        "Lastname",
        "Email",
        "Class",
        "Location",
        "Action"
    ]

    const navigate = useNavigate();
    const [currentId, setCurrentId] = useState(null);
    const [deleting, setDeleting] = useState(false)

    const handleDeleteUser = async(id)=>{
        setCurrentId(id);

        try {
            setDeleting(true);
            const response = await deleteUser(id);
            if(response){
                setUsers(users.filter(user=>user._id !== id))
            }
            
        } catch (error) {
            alert('An error occurred while deleting the user');            
        }
        finally{
            setDeleting(false);
        }
    }
    

    return (
        <div className='app__padding flex flex-col gap-5'>
            <section>
                <div className='flex justify-between action__title'>
                    <h3 className="app__section__title">Users List</h3>
                    <div>
                        <NavLink to="/manage-users/add"><button className="main__btn btn__yellow">Add User</button></NavLink>
                    </div>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>

                <div className="table__container">
                    <div className='table'>
                        <div className="table__header flex">
                            {tableHeaders.map((item, i) => (
                                <span className={`${i<tableHeaders.length-1 ? "flex-1" :"table__action"} text-center`} key={item}>{item}</span>
                            ))}
                        </div>
                        <>
                        {loading?
                            <div className='table__loader pt-2 full-center'>
                                <SmallLoader/>
                            </div>
                            :
                            <div className="table__body">
                                {users.length === 0 ?
                                    <p className='text-center py-2'>No users found!</p>
                                    :

                                    <>
                                        {users.map((row, i)=>(
                                            <div className="row flex">

                                                <p className='flex-1 text-center ellipsis'>{i+1}</p>
                                                <p className='flex-1 text-center ellipsis'>{row.firstName}</p>
                                                <p className='flex-1 text-center ellipsis'>{row.lastName}</p>
                                                <p className='flex-1 text-center ellipsis'>{row.email}</p>
                                                <p className='flex-1 text-center ellipsis'>{row.graduationYear}</p>
                                                <p className='flex-1 text-center ellipsis'>{row.location}</p>                                                

                                                <p className='flex gap-1 items-center justify-between table__action'>
                                                    <i className='fas cursor-pointer fa-edit' onClick={()=>navigate(`/manage-users/${row._id}/edit`)}></i>
                                                    <div className='delete__icon'>
                                                        {
                                                            deleting && currentId === row._id  ?
                                                            <SmallLoader/> :
                                                            <i onClick={()=>handleDeleteUser(row._id)} className='fas cursor-pointer fa-trash'></i>
                                                        }
                                                    </div>
                                                </p>
                                            </div>
                                        ))                                
                                        }
                                    </>

                                }
                            </div>
                        }
                        </>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default ManageUsers;