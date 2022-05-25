import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Header() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => { await oktaAuth.signInWithRedirect(); }
  const logout = async () => { await oktaAuth.signOut(); }

  const userText = authState.isAuthenticated
    ? <button onClick={logout}>SIGN OUT</button>
    : <button onClick={login}>SIGN IN</button>;

  return (
    <header>
      <div>Okta React App</div>
      <ul className="menu">
        {
          authState.isAuthenticated ?
            <>
              <li><Link to="/restricted">Home</Link></li>
              <li><Link to="/securedpage">Secured Page</Link></li>
            </> : ''
        }
        {userText}
      </ul>
    </header>
  );
}

export default Header;