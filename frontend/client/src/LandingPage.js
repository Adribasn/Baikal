import React from 'react';

export const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="landing-image-container">
                <div id="logo-shape-white"></div>
            </div>

            <div className="landing">
                <div id="logo-shape-colored" class="landing-section-logo"></div>
                <h1>Happening now</h1>
                <h2>Join Baikal today.</h2>
                <div className="button-container">
                    <button id="signup-button">Sign up</button>
                    <button id="login-button">Log in</button>
                </div>
            </div>

        </div>
    )
}