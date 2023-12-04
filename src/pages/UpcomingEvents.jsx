import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EventCard from '../components/EventCard';

function UpcomingEvents(props) {
    return (

        <>
            <Header/>
            <main className='main__website'>
                <section className="hero about__hero flex text-white flex-col justify-center relative">
                    <h1 className='text-5xl w-1/2'>
                    Upcoming Events
                    </h1>
                    <p className='mt-2 mb-3 text-xl w-1/2'>
                        Your ALU alumni connection aiming to build brighter future
                    </p>
                    <div className='flex shadow-5 flex-col items-center rounded-md text-black text-center w-1/2 about__hero--cta absolute bg-white p-2'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores explicabo sequi libero similique. Culpa iusto adipisci aspernatur cumque cum.
                        </p>
                        <p className='mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quod odit, non natus est itaque!</p>
                        <button className='main__btn btn__yellow mt-2'>
                            Join Now
                        </button>
                    </div>
                </section>
                <section className='bg__ciel flex padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex items-center justify-between gap-3">
                        
                        <div className='flex-1'>
                            <h3 className='main__title'>Our Mission</h3>
                            <p className='leading-3'>
                            Alumeet is on a mission to foster a thriving community of university alumni. Our goal is to connect, collaborate, and provide opportunities for personal and professional growth. We understand the unique bond that alumni share, and we are dedicated to enriching this connection in several meaningful ways.
                            Alhub is on a mission to foster a thriving community of university alumni. Our goal is to connect, collaborate, and provide opportunities fo
                            </p>
                        </div>
                        <div className="relative flex-1">
                            <img src="/hero.jpeg" alt="" />
                        </div>

                    </div>
                </section>

                <section className='padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col gap-5">
                        <h1 className='text-center main__title'>Upcoming Events</h1>
                        <div className='flex items-center justify-between gap-5'>
                            {new Array(3).fill(0).map((_, i)=>(
                                <EventCard key={i}/>
                            
                            ))}                       

                        </div>
                    </div>
                </section>
                
            </main>
            
            <Footer/>

        </>

    );
}

export default UpcomingEvents;