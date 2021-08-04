import React from 'react';
import './LandingPageStyle.css';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';

export const LandingPage = () => {
    return (
        <div className="grid-container">
            <div className="item-1">
                <img src={ColoredLogo} id="colored-logo"></img>
                <h1>Happening now</h1>
                <h2>Join Baikal today.</h2>
                <div className="button-container">
                    <button id="signup-button">Sign up</button>
                    <button id="login-button">Log in</button>
                </div>
            </div>

            <div className="item-2">
                <img src={WhiteLogo} id="white-logo"></img>
            </div>
        </div>
    )
}