import React from 'react';
import { menuItems } from '../utils';

function Footer() {
    return (
        <footer className='bg__main pi-10 pt-5 pb-1'>
            <div className="flex justify-between footer__top">
                <div>
                    <p className="footer__title text-xl mb-2">Contact Us</p>
                    <ul className='flex flex-col gap-1'>
                        <li>Email: email@gmail.com</li>
                        <li>Phone: +2306732782</li>
                        <li>Pamplemousses, Mauritius</li>
                    </ul>
                </div>
                <div>
                    <p className="footer__title text-xl mb-2">Quick links</p>
                    <ul className='flex flex-col gap-1'>
                        {
                            menuItems.map((item, i)=>(
                                <li><a href={item.link} className='text-white'>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='socials flex flex-col gap-1'>
                    {new Array(3).fill(0).map((_, i)=>(
                        <a href="">
                            <img src="/ev3.svg" alt="" />
                        </a>
                    ))
                    }

                </div>

            </div>
            <div className='text-center mt-5'>
                &copy;2023 ALumeet | All rights reserved
            </div>

        </footer>
    );
}

export default Footer;