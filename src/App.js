import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Restricted from './components/Restricted';
import Securedpage from './components/Securedpage';

function App() {

  const oktaAuth = new OktaAuth({
    issuer: 'https://${process.env.REACT_APP_ISSUER}/oauth2/default',
    clientId: process.env.REACT_APP_CLIENT_ID,    
    redirectUri: `${window.location.origin}/callback`
  });

  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Header />
            <Route path='/' exact={true} component={Home} />
            <SecureRoute path='/restricted' exact={true} component={Restricted} />
            <SecureRoute path='/securedpage' exact={true} component={Securedpage} />
            <Route path='/callback' component={LoginCallback} />
          </Security>
        </div>
      </div>
    </div>
  );
}

export default App;
