import React from 'react';
import { Link } from 'react-router-dom';
import SignupCSS from './SignupPageStyle.module.css';

export const SignupPage = () => {
    return (
        <div className={SignupCSS.gridContainer}> 
            <div className={SignupCSS.itemOneContainer}>
                <div className={SignupCSS.itemOne}>
                    <div>
                        <h1 className={SignupCSS.signupText}>Sign up</h1>
                        <div className={SignupCSS.inputContainer}>
                            <input className={SignupCSS.firstName} placeholder="First name"></input>
                            <input className={SignupCSS.lastName} placeholder="Last name"></input>
                            <input className={SignupCSS.email} placeholder="Email"></input>
                            <input className={SignupCSS.password} placeholder="password" type="password"></input>
                        </div>
                        <Link to="/home" style={{ textDecoration: 'none' }}><button className={SignupCSS.registerButton}>Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}