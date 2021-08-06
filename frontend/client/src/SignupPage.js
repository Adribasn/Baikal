import React from 'react';
import { Link } from 'react-router-dom';
import SignupCSS from './SignupPageStyle.module.css';

export const SignupPage = () => {
    return (
        <div className={SignupCSS.gridContainer}> 
            <div className={SignupCSS.itemOne}>
                <div>
                    <h1>Sign up</h1>
                    <input className={SignupCSS.firstName} placeholder="First name"></input>
                    <input className={SignupCSS.lastName} placeholder="Last name"></input>
                    <input className={SignupCSS.email} placeholder="Email"></input>
                    <button className={SignupCSS.registerButton}>Register</button>
                </div>
            </div>
        </div>
    )
}