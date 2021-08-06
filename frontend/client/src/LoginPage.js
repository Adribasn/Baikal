import React from 'react';
import LoginCSS from './LoginPageStyle.module.css';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <div className={LoginCSS.gridContainer}>
            <div className={LoginCSS.itemOneContainer}>
                <div className={LoginCSS.itemOne}>
                    <div>
                        <h1 className={LoginCSS.welcome}>Welcome</h1>
                        <div className={LoginCSS.inputContainer}>
                            <input className={LoginCSS.email} placeholder="Email"></input>
                            <input className={LoginCSS.password} placeholder="password" type="password"></input>
                        </div>
                        <Link to="/home" style={{ textDecoration: 'none' }}><button className={LoginCSS.loginButton}>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}