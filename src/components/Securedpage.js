import React from 'react';

function Securedpage() {
    let oktaTokens = localStorage.getItem('okta-token-storage');

    oktaTokens = oktaTokens ? JSON.parse(oktaTokens) : []
    let authorisedName = oktaTokens.idToken.claims.name
    let name = authorisedName.split(' ');
    let firstName = name[0];

    return (
        <div className="page">

            <div className="warning">
                <h1>{firstName}</h1>
                <h2>You are on Securedpage</h2>
            </div>
        </div>
    );
}

export default Securedpage;