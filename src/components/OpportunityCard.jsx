import React from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../services/apis';

function OpportunityCard({opportunity}) {
    return (
        <div className="event__card font-600 bg-white rounded-lg overflow-hidden shadow-3 flex flex-col">
            <div className="event__img">
                <img src={`${API_URL}/images/${opportunity.image}`} alt="" className='' />
            </div>
            <div className="flex flex-col justify-center px-2 py-1">
                <div className='font-600'>{opportunity.title}</div>
                <div className="flex flex-col gap-1 mt-1">
                    <div className='flex items-center gap-1'>
                        <img src="/desc.svg" alt="" className='card__icon' />
                        <div className='flex-1'>
                            {opportunity.description}
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>
                            {new Date(opportunity.date).toLocaleDateString()}
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/time.svg" alt="" className='card__icon' />
                        <div className='flex-1'>
                            {opportunity.subject}
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/location.svg" alt="" className='card__icon' />
                        <a href={opportunity.link} target='_blank' className='flex-1 font-700 underline'>{opportunity.link}</a>
                    </div>
                    <NavLink to={opportunity.link} target='_blank' className='main__btn px-4 mt-1 bg__main mx-auto'>APPLY</NavLink>
                </div>
                
            </div>                                
        </div>
    );
}

export default OpportunityCard;