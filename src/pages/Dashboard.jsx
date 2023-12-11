import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import OpportunityCard from '../components/OpportunityCard';
import { NavLink } from 'react-router-dom';
import { getAllOpportunities, getUpcomingEvents } from '../services/apis';
import { SmallLoader } from '../components/Loaders';

function Dashboard(props) {


    const [loadingUpcoming, setLoadingUpcoming] = useState(false);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    const [loadingOpps, setLoadingOpps] = useState(false);
    const [opportunities, setOpportunities] = useState([]);

    useEffect(()=>{
        
        const getAllUpcomingEvents = async()=>{
            try {
                setLoadingUpcoming(true);
                const response = await getUpcomingEvents();
                if(response.events){
                    console.log(response.events)
                    setUpcomingEvents(response.events)
                }  
                
            } catch (error) {
                console.log(error)                                
            }
            finally{
                setLoadingUpcoming(false)
            }
        }

        const getOpportunities = async()=>{
            try {
                setLoadingOpps(true);
                const response = await getAllOpportunities();
                if(response.opportunities){
                    console.log(response.opportunities)
                    setOpportunities(response.opportunities)
                }  
                
            } catch (error) {
                console.log(error)                
            }
            finally{
                setLoadingOpps(false)
            }

        }

        getAllUpcomingEvents();
        getOpportunities();


    }, [])

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

                {
                    loadingUpcoming?
                    <div className='full-center w-1/2 py-5'>
                        <SmallLoader/>
                    </div>
                    :                    
                    <>
                        <div className='flex gap-3 dashboard__cards'>
                            {upcomingEvents.map((event, i)=>(
                                <EventCard event={event}/>
                            ))}

                        </div>
                        <div className='flex justify-end w-full'>
                            <NavLink>View All</NavLink>
                        </div>                    
                    </>
                }
            </section>
            <section className='flex flex-col items-start gap-3'>
                <h3 className="app__section__title">Opportunities</h3>
                
                {
                    loadingUpcoming?
                    <div className='full-center w-1/2 py-5'>
                        <SmallLoader/>
                    </div>
                    :                    
                    <>
                    <div className='flex gap-3'>
                        {opportunities.map((opportunity, i)=>(
                            <OpportunityCard opportunity={opportunity}/>
                        ))}
                    </div>                    
                    </>
                }
            </section>
        </div>
    );
}

export default Dashboard;