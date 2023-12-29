import React from 'react';
import { useState } from 'react';
import { Login } from './Login.js';
import {Register} from './Register.js';
import "./authPage.css";

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    const handleAuthPageToggle = ()=>{
        setIsLogin(pre=>!pre);
    }
    return (
        <div className='auth-container'>
            {isLogin ? <Login switchAuthHandler={handleAuthPageToggle}/> :<Register switchAuthHandler={handleAuthPageToggle}/>}
        </div>
    )
}