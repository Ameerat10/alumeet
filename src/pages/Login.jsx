import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../services/apis';
import { SmallLoader } from '../components/Loaders';

function Login(props) {

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState({});
    
    function handleInputChange(e){
        setFormFields({...formFields, [e.target.name]: e.target.value})
    }

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin = async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(formFields)

        try {
            const response = await login(formFields);
            if(response){
                setMessage(response.message)
                localStorage.setItem("alumeet__token", response.token)
                navigate("/dashboard")
            }            
            
        } catch (error) {
            console.log(error)
            setMessage(error?.response?.data?.message)
        }
        finally{
            setLoading(false)
        }
    }


    return (
        <div className='h-screen pi-10 flex justify-center items-center'>
            <div className='flex items-center login__container'>
                <div className="login__left flex-1">
                    <img src="/hero.jpeg" alt="" className='w-full h-full cover' />
                </div>
                <div className="login__right flex-1 px-2 py-3 flex flex-col items-center">
                    <h1>Welcome Back</h1>
                    <p>Log into your Alumeet account</p>

                    <form onSubmit={handleLogin} className='w-full w-3/4 mt-3 flex flex-col'>
                        {message && <div className='border label__error mb-1'>{message}</div>}
                        <div className='form__group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' onChange={handleInputChange} required/>
                        </div>
                        <div className='form__group mt-2 mb-1'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name='password' onChange={handleInputChange} required/>
                        </div>
                        <div className='flex justify-end mb-2'>
                            <NavLink to="forgot-password">Forgot password?</NavLink>
                        </div>

                        <div className="relative register__action flex flex-col">
                            <button className="main__btn btn__yellow">
                                LOGIN
                            </button>
                            {loading && <SmallLoader/>}
                        </div>
                    </form>

                </div>
            </div>            
        </div>
    );
}

export default Login;