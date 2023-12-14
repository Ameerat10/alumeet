import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function AboutUs(props) {

    const values = [
        {
            img:"/growth.svg",
            title:"Continuous Growth",
        },
        {
            img:"/collab.svg",
            title:"Collaboration",
        },
        {
            img:"/impact.svg",
            title:"Social Impact",
        },
        {
            img:"/resilience.svg",
            title:"Resilience",
        }
    ]

    return (
        <>
            <Header/>
            <main className='main__website'>
                <section className="hero about__hero flex text-white flex-col justify-center relative">
                    <h1 className='text-5xl w-1/2'>
                    About Alumeet
                    </h1>
                    <p className='mt-2 mb-3 text-xl w-1/2'>
                    Your ALU Alumni Connection aiming to build brighter future
                    </p>
                    <div className='flex shadow-5 flex-col items-center rounded-md text-black text-center w-1/2 about__hero--cta absolute bg-white p-2'>
                        <p>
                        Your dedicated platform for connecting with fellow alumni. We are committed to creating a vibrant community that fosters personal growth, professional success, and lifelong connections. Join the Alumeet community and experience the benefits of staying connected
                        </p>
                        <p className='mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quod odit, non natus est itaque!</p>
                        <button onClick={()=>navigate("/register")} className='main__btn btn__yellow mt-2'>
                            Join Now
                        </button>
                    </div>
                </section>
                <section className='bg__ciel flex padded__section bg__ciel'>
                    <div className="container mission__sec mx-auto w-4/5 flex items-center justify-between gap-3">
                        
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

                <div className="dotted__line mx-auto w-1/2 my-5"></div>

                <section className='bg__ciel flex padded__section bg__ciel'>
                    <div className="container values__sec mission__sec mx-auto w-4/5 flex flex-row-reverse items-center justify-between gap-3">
                        
                        <div className='flex-1'>
                            <h3 className='main__title'>Our Values</h3>
                            <p className='leading-3'>
                            We're committed to creating a welcoming community and supporting individual growth. Our core values drive and enhance Alumni Experience.
                            </p>
                            <div className='values flex flex-col gap-1 mt-2'>
                                {values.map((value, i)=>(
                                    <div key={i} className='value flex items-center gap-2'>
                                        <img src={value.img} alt="" />
                                        <span>{value.title}</span>
                                    </div>
                                
                                ))

                                }
                            </div>
                        </div>
                        <div className="relative flex-1">
                            <img src="/hero.jpeg" alt="" />
                        </div>

                    </div>
                </section>

                <section className='padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col gap-5">
                        <h1 className='text-center main__title'>Meet Our team</h1>
                        
                        <div className='flex gap-1 team__list'>
                            {
                                new Array(3).fill(0).map((_, i)=>(
                                    <div key={i} className='flex-1 flex flex-col items-center team__member'>
                                        <img src="/hero.jpeg" alt="" className='w-full rounded-full cover' />
                                        <div className='flex flex-col items-center gap-1'>
                                            <h5 className='text-center text-yellow text-xl mt-1 member__name pb-1 relative'>Ameerat Ademuiya</h5>
                                            <p className='font-600'>Alumeet Representative</p>
                                            <p className='text-center'>With experience in alumni management and career development, Mike is committed to ensuring that all alumni have the resources and opportunities they need to succeed. He firmly believes that alumni can leverage their collective strength to create meaningful opportunities in their professional lives.</p>
                                        </div>
                                    </div>
                                
                                ))
                            }          

                        </div>
                    
                    </div>
                </section>

                <section className='padded__section bg__ciel'>
                    <div className="container join__us mx-auto w-4/5 flex gap-5 bg__main rounded-md">
                        <div className='flex-1 p-2 full-center flex-col gap-3'>
                            <h5 className='text-3xl'>Join Alumeet Today !!!</h5>
                            <NavLink to="/register"><button className='main__btn btn__yellow'>Join Us</button></NavLink>
                        </div>
                        <img src="/hero.jpeg" alt="" className='w-2/5' />
                    </div>
                </section>

                <div className="dotted__line mx-auto w-1/2 my-5"></div>

                <section className='padded__section bg__ciel'>
                    <div className="container mx-auto w-4/5 flex flex-col">
                        <h1 className='text-center main__title'>Contact Us</h1>
                        <p className="text-center mb-3">Feel free to contact us anytime. we will get back to you as soon as we can.</p>
                        <form action="https://formsubmit.co/pkishinyambwe@gmail.com" method='POST' className='contact__form flex flex-col items-center gap-2'>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="firstName">Firstname</label>
                                    <input type="text" id='firstName' name='firstName' required/>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="lastName">Lastname</label>
                                    <input type="text" id='lastName' name='lastName' required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' name='email' required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="description">Description</label>
                                    <textarea id='description' name='description' required>
                                    </textarea>
                                </div>
                            </div>
                            <button className="main__btn btn__yellow">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>

  
                
            </main>
            
            <Footer/>

        </>

    );
}

export default AboutUs;