import React from 'react';
import './LandingPageStyle.css';

export const LandingPage = () => {
    return (
        <div className="landing-grid">
            <div className="landing-container">
                <div class="logo-container">
                    <div class="logo-colored"></div>
                </div>

                <h1>Happening now</h1>
                <h2>Log in to Baikal</h2>
                <button id="signup-button">Sign up</button>
                <button id="login-button">Log in</button>
            </div>

            <div className="image-container">
                <div class="logo-white"></div>
            </div>
            
        </div>
    )
}