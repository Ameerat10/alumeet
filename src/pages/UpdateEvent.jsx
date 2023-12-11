import React, { useContext, useEffect, useRef, useState } from 'react';
import { SmallLoader } from '../components/Loaders';
import { useParams } from 'react-router-dom';
import { getEvent, updateEvent } from '../services/apis';
import AppContext from '../AppContext';

function UpdateEvent(props) {

    const {setPageTitle} = useContext(AppContext);

    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [event, setEvent] = useState({});
    const [formFields, setFormFields] = useState({});

    const getEventDetails = async()=>{
        try {
            setLoading(true);
            const response = await getEvent(id);
            if(response.event){
                console.log(response.event)
                setEvent(response.event)
                setFormFields(response.event);
            }
            
        } catch (error) {
            console.log(error)                                
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        setPageTitle("Update Event")
        getEventDetails();
    }, [])


    const [message, setMessage] = useState({
        type: "",
        text: ""    
    });
    const [updating, setUpdating] = useState(false);
    
    function handleInputChange(e){
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const handleChangeImage = (e)=>{
        setFormFields({...formFields, image: e.target.files[0]})
    }

    const messageRef = useRef(null);

    async function handleSubmit(e){
        e.preventDefault();
        setUpdating(true);

        console.log("FIELDS", formFields)

        try {
            const response = await updateEvent(formFields, event._id);
            if(response){
                setMessage(
                    {
                        type: "success",
                        text: response.message
                    }
                )
                getEventDetails();
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
            setUpdating(false)
        }
    }

    return (
        <div className='app__padding flex flex-col gap-5'>
            {loading?
                <div className='h-full pt-2 full-center'>
                    <SmallLoader/>
                </div>
                :
                <section ref={messageRef}>
                    <div className='flex justify-between'>
                        <h3 className="app__section__title">Update Event - {event.title}</h3>
                    </div>
                    <p className='mt-3 w-3/4 mb-5'>
                        {event.description}
                    </p>

                    <form onSubmit={handleSubmit} className='w-1/2 update__event--form flex flex-col items-center gap-3'>
                        {message.text && <div className={`border w-full ${message.type=="error" ? "label__error":"label__success"}`}>{message.text}</div>}
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="title">Event name</label>
                                <input type="text" id='title' name='title' value={formFields.title} onChange={handleInputChange} required/>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="category">Event category</label>
                                <select name="category" id="category" onChange={handleInputChange} required>
                                    <option value="">--Select event category--</option>
                                    <option value="networking" selected={formFields.category === "networking"}>Networking</option>
                                    <option value="professional development" selected={formFields.category === "professional development"}>Professional Development</option>
                                </select>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="date">Date</label>
                                <input type="date" id='date' name='date' value={formFields?.date?.split("T")[0]} onChange={handleInputChange} required/>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="location">Location</label>
                                <input type="text" id='location' name='location' value={formFields.location} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="startTime">Start time</label>
                                <input type="time" id='startTime' name='startTime' value={formFields.startTime} onChange={handleInputChange} required/>
                            </div>
                            <div className='form__group'>
                                <label htmlFor="endTime">End Time</label>
                                <input type="time" id='endTime' name='endTime' value={formFields.endTime} onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="description">Description</label>
                                <textarea id='description' name='description' value={formFields.description} onChange={handleInputChange} required>

                                </textarea>
                            </div>
                        </div>
                        <div className="form__row flex items-center gap-2">
                            <div className='form__group'>
                                <label htmlFor="image">Image</label>
                                <input type="file" name="image" id="image" onChange={handleChangeImage}/>
                            </div>
                        </div>
                        
                        <div className="relative register__action">
                            <button className="main__btn btn__yellow">
                                UPDATE EVENT
                            </button>
                            {updating && <SmallLoader/>}
                        </div>

                    </form>
                    
                </section>

            }
        </div>
    );
}

export default UpdateEvent;