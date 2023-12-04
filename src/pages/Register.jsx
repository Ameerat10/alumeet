import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

function Register(props) {
    return (
        <>
            <Header/>
            <main className='main__website'>
                <section className="hero about__hero flex text-white flex-col justify-center relative">
                    <h1 className='text-5xl w-1/2'>
                    Alumeet Registration
                    </h1>
                    <p className='mt-2 mb-3 text-xl w-1/2'>
                        Your ALU alumni connection aiming to build brighter future
                    </p>                    
                </section>
                <section className='flex padded__section'>
                    <div className="container mx-auto w-4/5 flex flex-col items-center gap-3">
                        <h3 className='text-2xl'>Alumeet Registration Form</h3>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis similique labore obcaecati incidunt sit natus repellendus, sunt magnam minus aliquid veritatis eveniet, praesentium nihil accusamus deleniti dolorum error. Unde, sit.</p>
                        <div className="dotted__line mx-auto w-1/2"></div>

                        <form action="" className='w-1/2 flex flex-col items-center gap-3'>

                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="firstname">Firstname</label>
                                    <input type="text" id='firstname' name='firstname' />
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="lastnamme">Lastnamme</label>
                                    <input type="text" id='lastnamme' name='lastnamme' />
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' name='email' />
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="birthdate">Birth date</label>
                                    <input type="date" id='birthdate' name='birthdate' />
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="gender">Gender</label>
                                    <div className="flex gap-1">
                                        <input type="radio" id='gender' name='gender'/>Male
                                        <input type="radio" id='gender' name='gender'/>Female
                                    </div>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="fieldOfStudy">Major/Field of study</label>
                                    <input type="text" id='fieldOfStudy' name='fieldOfStudy' />
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="graduationYear">Graduation Year</label>
                                    <select name="graduationYear" id="graduationYear">
                                        <option value="">2018</option>
                                        <option value="">2019</option>
                                    </select>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="occupation">Current Occupation</label>
                                    <input type="text" id='occupation' name='occupation' />
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="country">Country/Location</label>
                                    <input type="text" id='country' name='country' />
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id='password' name='password' />
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="text" id='confirmPassword' name='confirmPassword' />
                                </div>
                            </div>
                            <div className='flex w-full gap-1 items-center mb-2'>
                                <input type="checkbox" name="acceptTerms" id="acceptTerms" />
                                <label htmlFor="acceptTerms">I have read and accepted the <a href="">Terms of Services and Privacy Policy</a></label>
                            </div>
                            <button className="main__btn btn__yellow">
                                REGISTER
                            </button>
                            <div className='mt-2'>
                                Already have an account? <NavLink to="/login">Login</NavLink>
                            </div>
                        </form>

                    </div>                    
                </section>                
                
            </main>
            
            <Footer/>

        </>
    );
}

export default Register;