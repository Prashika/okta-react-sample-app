import React from 'react';

function Restricted() {
  let oktaTokens = localStorage.getItem('okta-token-storage');

  oktaTokens = oktaTokens ? JSON.parse(oktaTokens) : []
  let authorisedName = oktaTokens.idToken.claims.name
  
  return (
    <div className="page">

      <div className="warning">
        <h1>Welcome {authorisedName}</h1>
        <h2>You are Authorized Personnel</h2>
      </div>
    </div>
  );
}

export default Restricted;