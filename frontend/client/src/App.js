import { Switch, Route, Link } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { LandingPage } from './LandingPage';
import { SignupPage } from './SignupPage';
import { NotificationsPage } from './NotificationsPage';
import { MessagesPage } from './MessagesPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCampground, faFlag, faComments, faUser, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCampground, faFlag, faComments, faUser, faFeatherAlt);
 
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/notifications" component={NotificationsPage} />
        <Route exact path="/messages" component={MessagesPage} />
      </Switch>
    </div>
  );
}

export default App;
