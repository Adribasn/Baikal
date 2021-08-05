import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { LandingPage } from './LandingPage';
import { SignupPage } from './SignupPage';
 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
