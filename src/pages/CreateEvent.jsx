import React, { useContext, useEffect, useRef, useState } from 'react';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';
import { createEvent } from '../services/apis';

function CreateEvent(props) {

    const {user, setPageTitle} = useContext(AppContext);

    useEffect(()=>{
        setPageTitle("Create Event")
    }, [])

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        type: "",
        text: ""    
    });

    const [formFields, setFormFields] = useState({});

    function handleInputChange(e){
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const handleChangeImage = (e)=>{
        setFormFields({...formFields, image: e.target.files[0]})
    }

    const messageRef = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        console.log("FIELDS", formFields)

        try {
            const response = await createEvent({...formFields, createdBy:user._id});
            if(response){
                setMessage(
                    {
                        type: "success",
                        text: response.message
                    }
                )
            }            
        } catch (error) {
            console.log(error)
            setMessage(
                {
                    type: "error",
                    text: error?.response?.data?.message
                }
            )
            messageRef.current.scrollIntoView({behavior: 'smooth'})
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <div className='app__padding flex flex-col gap-5'>
            <section ref={messageRef}>
                <div className='flex justify-between'>
                    <h3 className="app__section__title">Create Event</h3>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                Planning an alumni event? The journey to your event starts here, so tell us all about it. Start by providing the essential event information here. This is your opportunity to curate an experience that reflects your alumni community's spirit and ambitions. Every event begins with a vision, and your vision is the key to an exceptional alumni experience.
                </p>

                <form onSubmit={handleSubmit} className='w-1/2 create__event--form flex flex-col items-center gap-3'>
                    {message.text && <div className={`border w-full ${message.type=="error" ? "label__error":"label__success"}`}>{message.text}</div>}

                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="title">Event name</label>
                            <input type="text" id='title' name='title' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group'>
                            <label htmlFor="category">Event category</label>
                            <select name="category" id="category" onChange={handleInputChange} required>
                                <option value="">--Select event category--</option>
                                <option value="networking">Networking</option>
                                <option value="professional development">Professional Development</option>
                            </select>
                        </div>
                    </div>

                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="date">Date</label>
                            <input type="date" id='date' name='date' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group'>
                            <label htmlFor="location">Location</label>
                            <input type="text" id='location' name='location' onChange={handleInputChange} required/>
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="startTime">Start time</label>
                            <input type="time" id='startTime' name='startTime' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group'>
                            <label htmlFor="endTime">End Time</label>
                            <input type="time" id='endTime' name='endTime' onChange={handleInputChange} required/>
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="description">Description</label>
                            <textarea id='description' name='description' onChange={handleInputChange} required>
                            </textarea>
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" id="image" onChange={handleChangeImage} />
                        </div>
                    </div>
                    
                    <div className="relative register__action">
                        <button className="main__btn btn__yellow">
                            ADD EVENT
                        </button>
                        {loading && <SmallLoader/>}
                    </div>

                </form>
                
            </section>
        </div>
    );
}

export default CreateEvent;