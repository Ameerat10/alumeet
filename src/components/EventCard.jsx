import React, { useContext, useEffect, useState } from 'react';
import { API_URL, joinEvent } from '../services/apis';
import { SmallLoader } from './Loaders';
import AppContext from '../AppContext';

function EventCard({event}) {

    const {user} = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const handleJoinEvent = async()=>{
        try {
            setLoading(true);
            const data = {
                eventId:event._id,
                userId:user._id
            }
            const response = await joinEvent(data);
            if(response.message){
                console.log(response.message)
                setSuccess(true)
            }

        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(event.joiners.includes(user?._id)){
            setSuccess(true)
        }

    }, [])

    return (
        <div className="event__card bg-white rounded-lg overflow-hidden shadow-3 flex flex-col">
            <div className="event__img">
                <img src={`${API_URL}/images/${event.image}`} alt="" className='' />
            </div>
            <div className="flex flex-col justify-center px-2 py-1">
                <div className='font-600'>{event.title}</div>
                <div className="flex flex-col gap-1 mt-1">
                    <div className='flex items-center gap-1'>
                        <img src="/category.svg" alt="" className='card__icon' />
                        <div className='flex-1 uppercase'>{event.category}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/desc.svg" alt="" className='card__icon' />
                        <div className='flex-1'>{event.description}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>{new Date(event.date).toLocaleDateString()}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/time.svg" alt="" className='card__icon' />
                        <div className='flex-1'>{event.startTime} - {event.endTime}</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/location.svg" alt="" className='card__icon' />
                        <div className='flex-1'>{event.location}</div>
                    </div>

                    <div className="relative register__action flex items-center justify-center">
                        {success ?
                            <span className='joined__label'>JOINED</span>
                            :
                            <button onClick={handleJoinEvent} className='main__btn px-4 bg__main mx-auto'>JOIN</button>
                        }

                        {loading && <SmallLoader/>}
                    </div>
                </div>
                
            </div>                                
        </div>
    );
}

export default EventCard;