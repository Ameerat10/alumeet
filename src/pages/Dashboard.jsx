import React from 'react';
import EventCard from '../components/EventCard';
import OpportunityCard from '../components/OpportunityCard';
import { NavLink } from 'react-router-dom';

function Dashboard(props) {
    return (
        <div className='app__padding dashboard__page flex flex-col gap-5'>
            <section className='flex flex-col items-start gap-3'>
                <h3 className="app__section__title">Quick Actions</h3>
                <div className='flex quick__actions gap-2'>
                    <NavLink to={`/create-event`}>
                        Add event
                    </NavLink>
                    <NavLink to={`/all-events`}>
                        View Events
                    </NavLink>

                </div>
            </section>
            <section className='flex flex-col items-start gap-3'>
                <h3 className="app__section__title">Upcoming Events</h3>
                <div className='flex gap-3'>
                    {new Array(4).fill(0).map((_, i)=>(
                        <EventCard/>
                    ))}

                </div>
                <div className='flex justify-end w-full'>
                    <NavLink>View All</NavLink>
                </div>
            </section>
            <section className='flex flex-col items-start gap-3'>
                <h3 className="app__section__title">Opportunities</h3>
                <div className='flex gap-3'>
                    {new Array(4).fill(0).map((_, i)=>(
                        <OpportunityCard/>
                    ))}

                </div>
            </section>
        </div>
    );
}

export default Dashboard;