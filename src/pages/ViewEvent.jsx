import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL, getEvent } from '../services/apis';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';

function ViewEvent(props) {

    const {setPageTitle} = useContext(AppContext);

    const {id} = useParams();

    const navigate = useNavigate();


    const [loading, setLoading] = useState(false);
    const [event, setEvent] = useState({});

    useEffect(()=>{
        setPageTitle("View Event")
        const getEventDetails = async()=>{
            try {
                setLoading(true);
                const response = await getEvent(id);
                if(response.event){
                    console.log(response.event)
                    setEvent(response.event)
                }
                
            } catch (error) {
                console.log(error)                                
            }
            finally{
                setLoading(false)
            }
        }

        getEventDetails();
    }, [])

    return (
        <div className='app__padding flex flex-col gap-5'>
            {loading?
                <div className='h-full pt-2 full-center'>
                    <SmallLoader/>
                </div>
                :
                <section>
                    <span onClick={()=>navigate(-1)} className='cursor-pointer mb-1'><i className='fas fa-arrow-left'></i>&nbsp;&nbsp;Back</span>
                    <div className='flex justify-between action__title'>
                        <h3 className="app__section__title">View Event - {event.title}</h3>
                        <div>
                            <button className="main__btn btn__yellow" onClick={()=>navigate(`/event/${id}/edit`)}>Update Event</button>
                        </div>
                    </div>
                    <p className='mt-3 w-3/4 mb-5'>
                        {event.description}
                    </p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex'>
                            <span className='view__event--label'>ID</span>
                            <p className='font-600 flex-1'>{event._id}</p>
                        </div>
                        <div className='flex'>
                            <span className='view__event--label'>Event Category</span>
                            <p className='font-600 flex-1'>{event.category}</p>
                        </div>
                        <div className='flex'>
                            <span className='view__event--label'>Event Date</span>
                            <p className='font-600 flex-1'>{new Date(event.date).toLocaleDateString()}</p>
                        </div>
                        <div className='flex'>
                            <span className='view__event--label'>Event Location</span>
                            <p className='font-600 flex-1'>{event.location}</p>
                        </div>
                        <div className='flex'>
                            <span className='view__event--label'>Event Start Time</span>
                            <p className='font-600 flex-1'>{event.startTime}</p>
                        </div>
                        <div className='flex'>
                            <span className='view__event--label'>Event End Time</span>
                            <p className='font-600 flex-1'>{event.endTime}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='view__event--label'>Event Banner</span>
                            <p className='font-600 flex-1'>
                                {
                                    event.image?
                                    <img src={`${API_URL}/images/${event.image}`} alt="" className='desc__img' />
                                    :
                                    "No Image"
                                }
                            </p>
                        </div>

                    </div>
                </section>

            }
        </div>
    );
}

export default ViewEvent;