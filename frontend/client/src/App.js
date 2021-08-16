import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { LoginPageRedirection } from './LoginPageRedirection';
import { HomePage } from './HomePage';
import { LandingPage } from './LandingPage';
import { SignupPage } from './SignupPage';
import { NotificationsPage } from './NotificationsPage';
import { MessagesPage } from './MessagesPage';
import { ProfilePage } from './ProfilePage';
import fire from './fire';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCampground, faFlag, faComments, faUser, faFeatherAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SignupPageRedirection } from './SignupPageRedirection';


library.add(fab, faCampground, faFlag, faComments, faUser, faFeatherAlt, faPlus);
 
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const HandleLogin = () => {
    clearErrors();
    fire 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const HandleSignup = () => {
    clearErrors();
    fire 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const HandleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Router>
      <div className="App">
        {user ? (
          <React.Fragment>
            <Route exact path="/home" component={HomePage}><HomePage /></Route>
            <Route exact path="/notifications" component={NotificationsPage}><NotificationsPage /></Route>
            <Route exact path="/messages" component={MessagesPage}><MessagesPage /></Route>
            <Route exact path="/profile" component={ProfilePage}><ProfilePage HandleLogout={HandleLogout} /></Route>
            <Route exact path='/login' component={LoginPageRedirection}><LoginPageRedirection /></Route>
            <Route exact path='/signup' component={SignupPageRedirection}><SignupPageRedirection /></Route>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/" component={LandingPage}><LandingPage /></Route>
            <Route exact path="/signup" component={SignupPage}><SignupPage email={email} password={password} setEmail={setEmail} setPassword={setPassword} HandleSignup={HandleSignup} emailError={emailError} passwordError={passwordError} /></Route>
            <Route exact path="/login" component={LoginPage}><LoginPage email={email} password={password} setEmail={setEmail} setPassword={setPassword} HandleLogin={HandleLogin} emailError={emailError} passwordError={passwordError} /></Route>
          </React.Fragment>
        )}
      </div>
    </Router>

  );
}

export default App;
