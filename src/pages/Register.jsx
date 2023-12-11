import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { register } from '../services/apis';
import { SmallLoader } from '../components/Loaders';

function Register(props) {

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState({});
    
    function handleInputChange(e){
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const messageRef = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        console.log(formFields)

        try {
            const response = await register(formFields);
            if(response){
                setMessage(response.message)
                navigate("/login")
            }            
            
        } catch (error) {
            console.log(error)
            setMessage(error?.response?.data?.message)
            //Scroll to messageRef
            messageRef.current.scrollIntoView({behavior: 'smooth'})
        }
        finally{
            setLoading(false)
        }


    }

    const handleCustomInputChange = (key, value)=>{
        setFormFields({...formFields, [key]: value})
    }

    return (
        <>
            <Header/>
            <main className='main__website'>
                <section className="hero register__page about__hero flex text-white flex-col justify-center relative">
                    <h1 className='text-5xl w-1/2'>
                    Alumeet Registration
                    </h1>
                    <p className='mt-2 mb-3 text-xl w-1/2'>
                        Your ALU alumni connection aiming to build brighter future
                    </p>                    
                </section>
                <section ref={messageRef} className='flex padded__section'>
                    <div className="container register__form--sec mx-auto w-4/5 flex flex-col items-center gap-3">
                        <h3 className='text-2xl text-center'>Alumeet Registration Form</h3>
                        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis similique labore obcaecati incidunt sit natus repellendus, sunt magnam minus aliquid veritatis eveniet, praesentium nihil accusamus deleniti dolorum error. Unde, sit.</p>
                        <div className="dotted__line mx-auto w-1/2"></div>

                        <form onSubmit={handleSubmit} className='w-1/2 register__form flex flex-col items-center gap-3'>
                            {message && <div className='border label__error'>{message}</div>}
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="firstName">Firstname</label>
                                    <input type="text" id='firstName' name='firstName' onChange={handleInputChange} required/>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="lastName">Lastname</label>
                                    <input type="text" id='lastName' name='lastName' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' name='email' onChange={handleInputChange} required/>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="birthdate">Birth date</label>
                                    <input type="date" id='birthDate' name='birthDate' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="gender">Gender</label>
                                    <div className="flex gap-1">
                                        <input type="radio" id='gender' name='gender' value="Male" onChange={()=>handleCustomInputChange("gender", "Male")}/>Male
                                        <input type="radio" id='gender' name='gender' value="Female" onChange={()=>handleCustomInputChange("gender", "Female")}/>Female
                                    </div>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="fieldOfStudy">Major/Field of study</label>
                                    <input type="text" id='fieldOfStudy' name='fieldOfStudy' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="graduationYear">Graduation Year</label>
                                    <select name="graduationYear" id="graduationYear" onChange={handleInputChange} required>
                                        <option value="">--Select Year--</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                    </select>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="occupation">Current Occupation</label>
                                    <input type="text" id='occupation' name='occupation' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="country">Country/Location</label>
                                    <input type="text" id='country' name='location' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className="form__row flex items-center gap-2">
                                <div className='form__group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id='password' name='password' onChange={handleInputChange} required/>
                                </div>
                                <div className='form__group'>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="text" id='confirmPassword' name='confirmPassword' onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div className='flex w-full gap-1 items-center mb-2'>
                                <input type="checkbox" name="acceptTerms" id="acceptTerms" required/>
                                <label htmlFor="acceptTerms">I have read and accepted the <a href="">Terms of Services and Privacy Policy</a></label>
                            </div>

                            <div className="relative register__action">
                                <button className="main__btn btn__yellow">
                                    REGISTER
                                </button>
                                {loading && <SmallLoader/>}
                            </div>
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