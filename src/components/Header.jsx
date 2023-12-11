import React from 'react';
import { menuItems } from '../utils';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className='flex text-white justify-between items-center py-2 px-5'>
            <NavLink to="/" className='font-700 text-xl'>ALUMEET</NavLink>
            <nav className='mx-auto flex items-center flex-1 justify-between site__nav'>
                <ul className='flex items-center mx-auto'>
                    {menuItems.map((item, i) => (
                        <li className='px-2' key={i}>
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 nav__actions'>
                    <button onClick={()=>navigate("/login")} href="" className='main__btn'>Login</button>
                    <button onClick={()=>navigate("/register")} href="" className='main__btn'>Sign Up</button>
                </div>
            </nav>

            <div className='toggleContainer hidden'>
              <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
              <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
              </label>
            </div>

        </header>
    );
}

export default Header;