import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Home() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); }
  const logout = async () => { await oktaAuth.signOut(); }

  const userText = authState.isAuthenticated
    ? <button onClick={logout}>SIGN OUT</button>
    : <button onClick={login}>SIGN IN</button>;

  return (
    <div className="page">
      <h1>LOGIN WITH OKTA REACT</h1>
      {
        authState.isAuthenticated ?
          <h2>You are already signed in<br />
            Click here to sign out:</h2> :
          ''
      }
      <Link to="/restricted">
        {userText}
      </Link>
    </div>
  );
}

export default Home;