import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmallLoader } from '../components/Loaders';
import { register } from '../services/apis';

function AddUser(props) {
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState({});
    
    function handleInputChange(e){
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        type: "",
        text: ""
    });

    const messageRef = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        console.log(formFields)

        try {
            const response = await register(formFields);
            if(response){
                setMessage({
                    type: "success",
                    text: response.message
                })

            }            
            
        } catch (error) {
            console.log(error)
            setMessage({
                type: "error",
                text: error?.response?.data?.message
            })
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
        <div className='app__padding flex flex-col gap-5'>
            <section ref={messageRef}>
                <div className='flex justify-between action__title'>
                    <h3 className="app__section__title">Add User</h3>
                </div>

                <form onSubmit={handleSubmit} className='w-1/2 mt-2 register__form flex flex-col items-center gap-3'>
                    {message.text && <div className={`border w-full ${message.type=="error" ? "label__error":"label__success"}`}>{message.text}</div>}
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

                    <div className="relative register__action">
                        <button className="main__btn btn__yellow">
                            ADD
                        </button>
                        {loading && <SmallLoader/>}
                    </div>
                </form>
            </section>
        </div>
    );
}

export default AddUser;