import React from 'react';
import EventCard from '../components/EventCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home(props) {
    
    return (
        <>
            <Header/>
            <main className='main__website'>
                <section className="hero flex text-white flex-col justify-center">
                    <h1 className='text-5xl w-1/2'>
                    Connecting the Past, Building the Future Together
                    </h1>
                    <p className='mt-2 mb-3 text-xl w-1/2'>
                    We are a vibrant group of former students from ALU dedicated to build lasting connections and creating opportunities for personal and professional growth
                    </p>
                    <div className='flex align-center gap-2'>
                        <button className='main__btn'>Learn More</button>
                        <button className='main__btn'>Join Us</button>
                    </div>
                </section>

                <section className="bg__ciel flex padded__section">
                    <div className="container mx-auto w-4/5 flex items-center justify-between gap-5">
                        {new Array(3).fill(0).map((_, i)=>(
                            <div className="card flex flex-col items-center gap-2" key={i}>
                                <div className="welcome__img">
                                    <img src={`/ev${i+1}.svg`} alt="" className='' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-xl text-center font-700'>Lorem ipsum dolor sit amet </p>
                                    <p className='text-md text-center my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?</p>
                                </div>
                            </div>
                        
                        ))}                        
                    </div>
                </section>

                <section className='padded__section what__section'>
                    <div className="container mx-auto w-4/5 flex items-center justify-between gap-3">
                        
                        <div className="container__left relative w-3/5">
                            <img src="/hero.jpeg" alt="" />
                        </div>
                        <div className='flex-1'>
                            <h3 className='main__title'>What We Do</h3>
                            <p className='leading-3'>
                            Alumeet is on a mission to foster a thriving community of university alumni. Our goal is to connect, collaborate, and provide opportunities for personal and professional growth. We understand the unique bond that alumni share, and we are dedicated to enriching this connection in several meaningful ways.
                            Alhub is on a mission to foster a thriving community of university alumni. Our goal is to connect, collaborate, and provide opportunities fo
                            </p>
                        </div>

                    </div>
                </section>
                <div className="dotted__line mx-auto w-1/2 mb-5"></div>
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

export default Home;