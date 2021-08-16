import React from 'react';
import { Link } from 'react-router-dom';
import SignupCSS from './SignupPageStyle.module.css';

export const SignupPage = (props) =>  {
    const { email, password, setEmail, setPassword, HandleSignup, emailError, passwordError } = props;

    return (
        <div className={SignupCSS.gridContainer}> 
            <div className={SignupCSS.itemOneContainer}>
                <div className={SignupCSS.itemOne}>
                    <div>
                        <h1 className={SignupCSS.signupText}>Sign up</h1>
                        <div className={SignupCSS.inputContainer}>
                            <input className={SignupCSS.firstName} autoFocus placeholder="First name"></input>
                            <input className={SignupCSS.lastName} placeholder="Last name"></input>
                            <input className={SignupCSS.email} required value={email} name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <p className={SignupCSS.errorMessage}>{emailError}</p>
                            <input className={SignupCSS.password} required value={password} placeholder="password"  name="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                            <p className={SignupCSS.errorMessage}>{passwordError}</p>
                        </div>
                        <Link to="/home" style={{ textDecoration: 'none' }}><button className={SignupCSS.registerButton} type="submit" onClick={HandleSignup}>Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

