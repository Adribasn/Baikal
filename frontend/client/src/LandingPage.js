import React from 'react';
import './LandingPageStyle.css';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className="grid-container">
            <div className="item-1-container">
                <div className="item-1">
                    <img src={ColoredLogo} id="colored-logo"></img>
                    <h1>Happening now</h1>
                    <h2>Join Baikal today.</h2>
                    <div className="button-container">
                        <Link to="/signup" style={{ textDecoration: 'none '}}><button id="signup-button">Sign up</button></Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}><button id="login-button">Log in</button></Link>
                    </div>
                </div>
            </div>

            <div className="item-2">
                <img src={WhiteLogo} id="white-logo"></img>
            </div>
        </div>
    )
}