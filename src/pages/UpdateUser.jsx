import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, updateUser } from '../services/apis';
import { SmallLoader } from '../components/Loaders';

function UpdateUser(props) {
    const navigate = useNavigate();

    const {id} = useParams();

    const [formFields, setFormFields] = useState({});

    const [fetching, setFetching] = useState(false);
    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                setFetching(true)
                const response = await getUser(id);
                if(response){
                    setFormFields(response)
                }   
                
            } catch (error) {
                console.log(error)                                
            }
            finally{
                setFetching(false);
            
            }
        }

        fetchUser();
    }, [])
    
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
            const response = await updateUser(id, formFields);
            if(response){
                setMessage({
                    type: "success",
                    text: "User updated successfully"
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
                    <h3 className="app__section__title">Update User</h3>
                </div>

                {
                    fetching ?
                    <div className='py-5'>
                        <SmallLoader/>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className='w-1/2 mt-2 register__form flex flex-col items-center gap-3'>
                        {message.text && <div className={`border w-full ${message.type=="error" ? "label__error":"label__success"}`}>{message.text}</div>}
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="firstName">Firstname</label>
                                <input type="text" id='firstName' name='firstName' value={formFields.firstName} onChange={handleInputChange} required/>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="lastName">Lastname</label>
                                <input type="text" id='lastName' name='lastName' value={formFields.lastName} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' value={formFields.email} onChange={handleInputChange} required/>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="birthdate">Birth date</label>
                                <input type="date" id='birthDate' name='birthDate' value={formFields.birthDate} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="gender">Gender</label>
                                <div className="flex gap-1">
                                    <input type="radio" id='gender' name='gender' value="Male" onChange={()=>handleCustomInputChange("gender", "Male")} checked={formFields.gender === "Male"}/>Male
                                    <input type="radio" id='gender' name='gender' value="Female" onChange={()=>handleCustomInputChange("gender", "Female")} checked={formFields.gender === "Female"}/>Female
                                </div>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="fieldOfStudy">Major/Field of study</label>
                                <input type="text" id='fieldOfStudy' name='fieldOfStudy' value={formFields.fieldOfStudy} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="graduationYear">Graduation Year</label>
                                <select name="graduationYear" id="graduationYear" onChange={handleInputChange} required>
                                    <option value="">--Select Year--</option>
                                    <option value="2018" selected={formFields.graduationYear === "2018"}>2018</option>
                                    <option value="2019" selected={formFields.graduationYear === "2019"}>2019</option>
                                </select>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="occupation">Current Occupation</label>
                                <input type="text" id='occupation' name='occupation' value={formFields.occupation} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="country">Country/Location</label>
                                <input type="text" id='country' name='location' value={formFields.location} onChange={handleInputChange} required/>
                            </div>
                        </div>

                        <div className="relative register__action">
                            <button className="main__btn btn__yellow">
                                UPDATE
                            </button>
                            {loading && <SmallLoader/>}
                        </div>
                    </form>                    
                }

            </section>
        </div>
    );
}

export default UpdateUser;