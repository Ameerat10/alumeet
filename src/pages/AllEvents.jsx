import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { API_URL, getAllEvents } from '../services/apis';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';


function AllEvents(props) {
    const {user, setPageTitle} = useContext(AppContext);

    const navigate = useNavigate();

    const tableHeaders = [
        "Event ID",
        "Event Title",
        "Event Category",
        "Date",
        "Location",
        "Start Time",
        "End Time",
        "Image",
        "Action"
    ]

    const tableSampleData = [
        {
            id: 1,
            title: "Birthday Party for John Doe",
            category: "Party",
            date: "2023-04-05",
            location: "John's House",
            startTime: "8 AM",
            endTime: "10 PM",
            imageURL: "/images/party.jpg",
        },
        {
            id: 2,
            title: "Concert by The Beatles",
            category: "Music",
            date: "2023-06-07",
            location: "The Colosseum",
            startTime: "7 PM",
            endTime: "9 PM",
            imageURL: "/images/beatles.png",
        }
        
    ]

    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        const getEvents = async()=>{
            try {
                setLoading(true);
                const response = await getAllEvents();
                if(response.events){
                    console.log(response.events)
                    setEvents(response.events)
                }  
                
            } catch (error) {
                console.log(error)                
            }
            finally{
                setLoading(false)
            }

        }

        getEvents();
        setPageTitle("All Events")
    }, [])

    return (
        <div className='app__padding flex flex-col gap-5'>
            <section>
                <div className='flex justify-between action__title'>
                    <h3 className="app__section__title">All Alumni Events</h3>
                    <div>
                        <NavLink to="/create-event"><button className="main__btn btn__yellow">Add Event</button></NavLink>
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
                                {events.map((row, i)=>(
                                    <div className="row flex">

                                        <p className='flex-1 text-center ellipsis'>{i+1}</p>
                                        <p className='flex-1 text-center ellipsis'>{row.title}</p>
                                        <p className='flex-1 text-center ellipsis'>{row.category}</p>
                                        <p className='flex-1 text-center ellipsis'>{new Date(row.date).toLocaleDateString()}</p>
                                        <p className='flex-1 text-center ellipsis'>{row.location}</p>
                                        <p className='flex-1 text-center ellipsis'>{row.startTime}</p>
                                        <p className='flex-1 text-center ellipsis'>{row.endTime}</p>
                                        <p className='flex-1 text-center ellipsis'>
                                            {
                                                row.image?
                                                <img src={`${API_URL}/images/${row.image}`} alt="" className='table__img' />
                                                :
                                                "No Image"
                                            }
                                        </p>

                                        <p className='flex gap-1 items-center justify-between table__action'>
                                            <i className='fas cursor-pointer fa-eye' onClick={()=>navigate(`/event/${row._id}`)}></i>
                                            {row?.createdBy?._id === user._id && <i className='fas cursor-pointer fa-edit' onClick={()=>navigate(`/event/${row._id}/edit`)}></i>}
                                        </p>
                                    </div>
                                ))

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

export default AllEvents;