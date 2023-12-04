import React from 'react';
import { menuItems } from '../utils';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className='flex text-white justify-between items-center py-2 px-5'>
            <a href="" className='font-700 text-xl'>ALUMEET</a>
            <nav className='mx-auto'>
                <ul className='flex items-center'>
                    {menuItems.map((item, i) => (
                        <li className='px-2' key={i}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='flex gap-2'>
                <button onClick={()=>navigate("/login")} href="" className='main__btn'>Login</button>
                <button onClick={()=>navigate("/register")} href="" className='main__btn'>Sign Up</button>
            </div>

        </header>
    );
}

export default Header;