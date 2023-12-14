import React, { useContext, useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUpcomingEvents } from '../services/apis';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';
import { NavLink, useNavigate } from 'react-router-dom';

function Home(props) {

    const {user} = useContext(AppContext);
    const navigate = useNavigate();

    const [loadingUpcoming, setLoadingUpcoming] = useState(false);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

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

        getAllUpcomingEvents();
    }, [])


    const firstRow = [
        {
            title:"Welcome to our Alumni",
            content:"Alumeet is on a mission to foster a thriving community of university alumni. Our goal is to connect, collaborate, and provide opportunities for personal and professional grow. Join us in building a supportive network that fuels personal and professional growth, creating a dynamic space where your success story begins."
        },
        {
            title:"Beyond Graduation: Your Lifelong Network",
            content:"Alumeet extends a warm welcome to a lifelong network that goes beyond graduation. Our platform is more than just a space for events; Embrace the opportunity to stay connected with your alma mater and fellow graduates, unlocking a world of possibilities for mentorship, collaboration, and shared success"
        },
        {
            title:"Empowering Alumni Excellence",
            content:"Step into Alumeet, a platform committed to empowering alumni excellence. Join a community that values continuous learning, celebrates achievements, and supports each member on their unique journey toward excellence. Together, let's shape a future where alumni thrive and inspire."
        }
    ]
    
    
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
                        <NavLink to="/about"><button className='main__btn'>Learn More</button></NavLink>
                        <button onClick={()=>navigate("/register")} className='main__btn'>Join Us</button>
                    </div>
                </section>

                <section className="bg__ciel welcome__sec flex padded__section">
                    <div className="container mx-auto w-4/5 flex items-center justify-between gap-5">
                        {firstRow.map((row, i)=>(
                            <div className="card flex flex-col items-center gap-2" key={i}>
                                <div className="welcome__img">
                                    <img src={`/ev${i+1}.svg`} alt="" className='' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-xl text-center font-700'>{row.title} </p>
                                    <p className='text-md text-center my-1'>{row.content}</p>
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
                        
                        {
                            loadingUpcoming?
                            <div className='full-center w-1/2 py-5'>
                                <SmallLoader/>
                            </div>
                            :                    
                            <div className='flex home__events items-center justify-center gap-5'>
                                {upcomingEvents.map((event, i)=>(
                                    <EventCard key={i} event={event}/>
                                
                                ))}                       

                            </div>
                        }

                        <div className='flex justify-center'>
                            <NavLink to="/upcoming-events"><button className='main__btn btn__yellow'>View All Events</button></NavLink>
                        </div>
                    </div>
                </section>
                <section className='section__opportunities overflow-hidden relative py-5'>
                    <div className="container mx-auto w-4/5 flex flex-col items-center gap-1">
                        <h1 className='text-center main__title text-white'>Our Opportunities</h1>
                        <p className='text-center text-white w-3/4'>Embark on a journey of growth and guidance with our mentorship program. Our experienced alumni mentors are here to offer valuable insights, advice, and support, helping you navigate your career path</p>
                        <div className="flex justify-center flex-wrap gap-5 mt-3">
                            {new Array(5).fill(0).map((_, i)=>(
                                <div className='opp__repeated bg-white p-2'>
                                    <h5>Professional Development</h5>
                                    <p>
                                        Access exclusive workshops, seminars, and resources to boost your career with cutting-edge knowledge and skills.
                                    </p>
                                </div>
                            ))

                            }
                            
                        </div>
                    </div>
                </section>

                <div className="dotted__line mx-auto w-1/2 my-5"></div>
                
                <section className='padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col gap-5">
                        <h1 className='text-center main__title'>Networking Activities</h1>
                        
                        <div className='flex gap-1 net__activities'>
                            <div className='flex-1 net__1 '>
                                <img src="/net1.jpg" alt="" className='cover h-full' />
                            </div>  
                            <div className='flex-1 gap-1 flex flex-col'>
                                <img src="/net2.jpg" alt="" className='cover flex-1' />
                                <img src="/net3.jpg" alt="" className='cover flex-1' />
                            </div>   
                            <div className='flex-1 flex flex-col gap-1'>
                                <img src="/net4.jpg" alt="" className='cover flex-1' />
                                <img src="/net5.jpg" alt="" className='cover flex-1' />
                                <img src="/net6.jpg" alt="" className='cover flex-1' />
                            </div>                

                        </div>
                    
                    </div>
                </section>

                <div className="dotted__line mx-auto w-1/2 my-5"></div>

                <section className='padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col gap-5">
                        <h1 className='text-center main__title'>Our Stats</h1>

                        <div className='flex items-center stats__list gap-3 flex-wrap justify-center'>
                            <div className='flex flex-col items-center'>
                                <div className='stat__icon rounded-full full-center'>
                                    <img src="/member.svg" alt="" className='w-8/10' />
                                </div>
                                <span className='text-2xl mt-1 font-600'>15k+</span>
                                <p className='text-center'>ALU alumni members in our vibrant community</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='stat__icon rounded-full full-center'>
                                    <img src="/event.svg" alt="" className='w-8/10' />
                                </div>
                                <span className='text-2xl mt-1 font-600'>100+</span>
                                <p className='text-center'>Successful events, fostering connections and growth</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='stat__icon rounded-full full-center'>
                                    <img src="/scholarship.svg" alt="" className='w-8/10' />
                                </div>
                                <span className='text-2xl mt-1 font-600'>$500K+ </span>
                                <p className='text-center'>Scholarships to support alumni in their educational pursuits</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='stat__icon rounded-full full-center'>
                                    <img src="/care.svg" alt="" className='w-8/10' />
                                </div>
                                <span className='text-2xl mt-1 font-600'>75+</span>
                                <p className='text-center'>Organisations facilitating job placements & enhancing alumni  careers</p>
                            </div>

                        </div>
                            
                    </div>
                </section>

                <div className="dotted__line mx-auto w-1/2 my-5"></div>

                <section className='flex padded__section bg__ciel'>
                    <div className="container mission__sec mx-auto w-4/5 flex items-center justify-between gap-3">
                        
                        <div className="relative flex-1">
                            <img src="/hero.jpeg" alt="" />
                        </div>
                        <div className='flex-1'>
                            <h3 className='main__title'>Call to Action</h3>
                            <p className='leading-3 mb-3'>
                            Our vibrant alumni network is waiting to welcome you. 
                            Unlock a world of opportunities for networking, personal growth, and career advancement."
                            </p>
                            <NavLink to="/register"><button className='main__btn btn__yellow'>Join Us</button></NavLink>
                        </div>

                    </div>
                </section>

                <div className="dotted__line mx-auto w-1/2 my-5"></div>

                <section className='flex padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col gap-5">
                        <h1 className='text-center main__title'>Alumni Stories</h1>  
                        <div className='flex gap-5 justify-center alumni__stories flex-wrap'>
                            {new Array(3).fill(0).map((_, i)=>(
                                <div className="story__repeated rounded-md bg-white pt-4 pb-2 px-2 border relative flex flex-col items-center">
                                    <img src="/hero.jpeg" alt="" className='cover rounded-full' />
                                    <q>
                                        Being a part of this alumni platform has been a life-changing experience. It's not just about reconnecting with old friends; it's a gateway to incredible opportunities. I've met incredible people, expanded my network, and learned so much. 
                                        Thank you for this fantastic community
                                    </q>

                                    <span className='mt-2 text-yellow'>ABIMBOLA AKINDELE </span>

                                </div>

                            ))

                            }

                        </div>  
                    </div>
                </section>

            </main>
            
            <Footer/>
        </>
    );
}

export default Home;