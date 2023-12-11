import React, { useContext, useEffect, useRef, useState } from 'react';
import { SmallLoader } from '../components/Loaders';
import AppContext from '../AppContext';
import { createOpportunity } from '../services/apis';

function CreateOpportunity(props) {

    const {user, setPageTitle} = useContext(AppContext);

    useEffect(()=>{
        setPageTitle("Create Opportunity")
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
            const response = await createOpportunity({...formFields, createdBy:user._id});
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
                    <h3 className="app__section__title">Create Opportunity</h3>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>

                <form onSubmit={handleSubmit} className='w-1/2 create__opportunity--form flex flex-col items-center gap-3'>
                    {message.text && <div className={`border w-full ${message.type=="error" ? "label__error":"label__success"}`}>{message.text}</div>}

                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="title">Opportunity name</label>
                            <input type="text" id='title' name='title' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group'>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id='subject' name='subject' onChange={handleInputChange} required/>
                        </div>
                    </div>

                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="date">Date</label>
                            <input type="date" id='date' name='date' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group'>
                            <label htmlFor="link">Link</label>
                            <input type="text" id='link' name='link' onChange={handleInputChange} required/>
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
                            ADD OPPORTUNITY
                        </button>
                        {loading && <SmallLoader/>}
                    </div>

                </form>
                
            </section>
        </div>
    );
}

export default CreateOpportunity;