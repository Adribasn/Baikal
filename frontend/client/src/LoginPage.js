import React from 'react';
import LoginCSS from './LoginPageStyle.module.css';
import { Link } from 'react-router-dom';

export const LoginPage = (props) => {
    const { email, password, setEmail, setPassword, HandleLogin, emailError, passwordError } = props;

    return (
        <div className={LoginCSS.gridContainer}>
            <div className={LoginCSS.itemOneContainer}>
                <div className={LoginCSS.itemOne}>
                    <div>
                        <h1 className={LoginCSS.welcome}>Welcome</h1>
                        <div className={LoginCSS.inputContainer}>
                            <input className={LoginCSS.email} autoFocus required value={email} name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <p className={LoginCSS.errorMessage}>{emailError}</p>
                            <input className={LoginCSS.password} required placeholder="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                            <p className={LoginCSS.errorMessage}>{passwordError}</p>
                        </div>
                        <Link to="/home" style={{ textDecoration: 'none' }}><button className={LoginCSS.loginButton} type="submit" onClick={HandleLogin}>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
