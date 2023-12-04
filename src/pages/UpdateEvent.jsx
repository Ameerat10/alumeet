import React from 'react';

function UpdateEvent(props) {
    return (
        <div className='app__padding flex flex-col gap-5'>
            <section>
                <div className='flex justify-between'>
                    <h3 className="app__section__title">Update Event - Careers Masters Program</h3>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>

                <form action="" className='w-1/2 flex flex-col items-center gap-3'>

                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="name">Event name</label>
                            <input type="text" id='name' name='name' />
                        </div>
                        <div className='form__group'>
                            <label htmlFor="eventCategory">Event category</label>
                            <select name="eventCategory" id="eventCategory">
                                <option value="">2018</option>
                                <option value="">2019</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="date">Date</label>
                            <input type="date" id='date' name='date' />
                        </div>
                        <div className='form__group'>
                            <label htmlFor="location">Location</label>
                            <input type="text" id='location' name='location' />
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="startTime">Start time</label>
                            <input type="time" id='startTime' name='startTime' />
                        </div>
                        <div className='form__group'>
                            <label htmlFor="endTime">End Time</label>
                            <input type="time" id='endTime' name='endTime' />
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="description">Description</label>
                            <textarea id='description' name='description'>

                            </textarea>
                        </div>
                    </div>
                    <div className="form__row flex items-center gap-2">
                        <div className='form__group'>
                            <label htmlFor="image">Image</label>
                            <input type="file" name="image" id="image" />
                        </div>
                    </div>
                    
                    <button className="main__btn btn__yellow">
                        UPDATE EVENT
                    </button>

                </form>
                
            </section>
        </div>
    );
}

export default UpdateEvent;