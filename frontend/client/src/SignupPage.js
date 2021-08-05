import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPageStyle.css';

export const SignupPage = () => {
    return (
        <div className="grid-container"> 
            <div className="item-1">
                <div className="item-1-inner-container">
                    <h1>Sign up</h1>
                    <input id="first-name" placeholder="First name"></input>
                    <input id="last-name" placeholder="Last name"></input>
                    <input id="email" placeholder="Email"></input>
                    <button id="register-button">Register</button>
                </div>
            </div>
        </div>
    )
}