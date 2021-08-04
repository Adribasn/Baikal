import React from 'react';
import './LandingPageStyle.css';

export const LandingPage = () => {
    return (
        <div className="grid-container">
            <div className="item-1">
                <div class="logo-container-1">
                    <img src="/home/adribas/Documents/dev/Baikal/frontend/assets/baikal-colored-text.svg"></img>
                </div>
                <h1>Happening now</h1>
                <h2>Join Baikal today.</h2>
                <button id="signup-button">Sign up</button>
                <button id="login-button">Log in</button>
            </div>

            <div className="item-2">
                <div class="logo-container-2">
                    <div id="logo-white"></div>
                </div>
            </div>
        </div>
    )
}