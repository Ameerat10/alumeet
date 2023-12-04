import React from 'react';
import { useNavigate } from 'react-router-dom';


function AllEvents(props) {

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

    return (
        <div className='app__padding flex flex-col gap-5'>
            <section>
                <div className='flex justify-between'>
                    <h3 className="app__section__title">All Alumni Events</h3>
                    <div>
                        <button className="main__btn btn__yellow">Add Event</button>
                    </div>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>
                <div className='table'>
                    <div className="table__header flex">
                        {tableHeaders.map((item) => (
                            <span className='flex-1 text-center' key={item}>{item}</span>
                        ))}
                    </div>
                    <div className="table__body">
                        {tableSampleData.map((row, i)=>(
                            <div className="row flex">
                                {Object.values(row).map((value, i)=>(
                                    <p className='flex-1 text-center ellipsis'>{value}</p>
                                ))}
                                <p className='flex flex-1 gap-1 items-center justify-center'>
                                    <i className='fas cursor-pointer fa-eye' onClick={()=>navigate(`/event/${i+1}`)}></i>
                                    <i className='fas cursor-pointer fa-edit' onClick={()=>navigate(`/event/${i+1}/edit`)}></i>
                                </p>
                            </div>
                        ))

                        }
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AllEvents;