import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ViewEvent(props) {

    const {id} = useParams();

    useEffect(()=>{console.log(id)}, []);

    const navigate = useNavigate();

    const eventData = {
        id: 1,
        title: "Birthday Party for John Doe",
        category: "Party",
        date: "2023-04-05",
        location: "John's House",
        startTime: "8 AM",
        endTime: "10 PM",
        imageURL: "/images/party.jpg",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aspernatur perspiciatis pariatur suscipit eius modi illo inventore. Natus eos cupiditate omnis eaque repellat! Quae, vitae!"
    }

    const keysMapper = {
        id:"ID",
        title:"Event Title",
        category:"Event Category",
        date:"Date",
        location:"Location",
        startTime:"Start Time",
        endTime:"End Time",
        description:"Description",
        imageURL:"Event Banner"
    }

    return (
        <div className='app__padding flex flex-col gap-5'>
            <section>
                <div className='flex justify-between'>
                    <h3 className="app__section__title">View Event - Careers Masters Program</h3>
                    <div>
                        <button className="main__btn btn__yellow" onClick={()=>navigate(`/event/${id}/edit`)}>Update Event</button>
                    </div>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>
                <div className='flex flex-col gap-2'>
                    {Object.entries(eventData).map(([key, value], i)=>(
                        <div className='flex'>
                            <span className='view__event--label'>{keysMapper[key]}</span>
                            <p className='font-600 flex-1'>{value}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
        </div>
    );
}

export default ViewEvent;