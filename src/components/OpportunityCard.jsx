import React from 'react';
import { NavLink } from 'react-router-dom';

function OpportunityCard(props) {
    return (
        <div className="event__card bg-white rounded-lg overflow-hidden shadow-3 flex flex-col">
            <div className="event__img">
                <img src={`/hero.jpeg`} alt="" className='' />
            </div>
            <div className="flex flex-col justify-center px-2 py-1">
                <div className='font-600'>Annual Networking Gala</div>
                <div className="flex flex-col gap-1 mt-1">
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>Join us for our prestigious Annual Alumni Networking Gala, where you'll have the chance to reconnect with fellow alumni,</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>17 August 2023</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>6:00 - 10:00 PM</div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src="/calendar.svg" alt="" className='card__icon' />
                        <div className='flex-1'>190 Alumni Avenue</div>
                    </div>
                    <NavLink to="" className='main__btn px-4 mt-1 bg__main mx-auto'>APPLY</NavLink>
                </div>
                
            </div>                                
        </div>
    );
}

export default OpportunityCard;