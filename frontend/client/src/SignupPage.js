import React from 'react';
import { Link } from 'react-router-dom';
import SignupCSS from './SignupPageStyle.module.css';
import fire from './fire';

export const SignupPage = (props) =>  {
    const { email, password, setEmail, setPassword, HandleSignup, emailError, passwordError } = props;

    const setNamesLocally = () => {
        localStorage.setItem('firstname', document.getElementById('firstname').value);
        localStorage.setItem('lastname', document.getElementById('lastname').value);
    }

    const buttonFunc = () => {
        setNamesLocally()
        HandleSignup();
    }

    return (
        <div className={SignupCSS.gridContainer}> 
            <div className={SignupCSS.itemOneContainer}>
                <div className={SignupCSS.itemOne}>
                    <div>
                        <h1 className={SignupCSS.signupText}>Sign up</h1>
                        <div className={SignupCSS.inputContainer}>
                            <input className={SignupCSS.firstName} id="firstname" autoFocus placeholder="First name"></input>
                            <input className={SignupCSS.lastName} id="lastname" placeholder="Last name"></input>
                            <input className={SignupCSS.email} required value={email} name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <p className={SignupCSS.errorMessage} style={{ display: emailError === '' ? 'none' : '' }}>{emailError}</p>
                            <input className={SignupCSS.password} required value={password} placeholder="password"  name="password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                            <p className={SignupCSS.errorMessage} style={{ display: passwordError === '' ? 'none' : '' }}>{passwordError}</p>
                        </div>
                        <button className={SignupCSS.registerButton} type="submit" onClick={buttonFunc}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

