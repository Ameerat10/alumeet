import React from 'react';
import OpportunityCard from '../components/OpportunityCard';

function Opportunities(props) {
    return (
        <div className='app__padding opportunities__page flex flex-col gap-5'>
            <section>
                <div className='flex justify-between'>
                    <h3 className="app__section__title">Opportunities</h3>
                    <div>
                        <button className="main__btn btn__yellow">Add Event</button>
                    </div>
                </div>
                <p className='mt-3 w-3/4 mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae quibusdam veritatis, error, ab repellat labore illum quo, natus voluptas consectetur in laboriosam? Harum, error amet ducimus reiciendis accusamus dignissimos?
                </p>
                <div className='flex flex-wrap gap-3 justify-around'>
                    {new Array(12).fill(0).map((_, i)=>(
                        <div className='w-1/5'>
                            <OpportunityCard key={i}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Opportunities;