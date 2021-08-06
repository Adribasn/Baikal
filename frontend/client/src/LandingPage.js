import React from 'react';
import LandingCSS from './LandingPageStyle.module.css';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className={LandingCSS.gridContainer}>
            <div className={LandingCSS.itemOneContainer}>
                <div className={LandingCSS.itemOne}>
                    <img src={ColoredLogo} className={LandingCSS.coloredLogo}></img>
                    <h1>Happening now</h1>
                    <h2>Join Baikal today.</h2>
                    <div className={LandingCSS.buttonContainer}>
                        <Link to="/signup" style={{ textDecoration: 'none '}}><button className={LandingCSS.signupButton}>Sign up</button></Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}><button className={LandingCSS.loginButton}>Log in</button></Link>
                    </div>
                </div>
            </div>

            <div className={LandingCSS.itemTwo}>
                <img src={WhiteLogo} className={LandingCSS.whiteLogo}></img>
            </div>
        </div>
    )
}