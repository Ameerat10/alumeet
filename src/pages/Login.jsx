import React from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    return (
        <div className='h-screen pi-10 flex justify-center items-center'>
            <div className='flex items-center'>
                <div className="login__left flex-1">
                    <img src="/hero.jpeg" alt="" className='w-full h-full cover' />
                </div>
                <div className="login__right flex-1 px-2 py-3 flex flex-col items-center">
                    <h1>Welcome Back</h1>
                    <p>Log into your Alumeet account</p>

                    <form action="" className='w-full w-3/4 mt-3 flex flex-col'>
                        <div className='form__group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' />
                        </div>
                        <div className='form__group mt-2 mb-1'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name='password' />
                        </div>
                        <div className='flex justify-end mb-2'>
                            <NavLink to="forgot-password">Forgot password?</NavLink>
                        </div>
                        <button className="main__btn btn__yellow w-full mx-auto">
                            LOGIN
                        </button>
                    </form>

                </div>
            </div>            
        </div>
    );
}

export default Login;