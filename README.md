# okta-react-sample-app
## Prerequisite: Steps to follow:
1. Create your own okta-developer account

2. Register your application by selecting Applications -> Create App Integration. On the next screen, choose OIDC and Single Page App and click Next.

   On the next screen, edit the application settings. 
   App integration name: Application name 

3. Configure your app as follows:

   Base URI: http://localhost:3000
  
   Login redirect URI: http://localhost:3000/callback
  
   Logout redirect URI: http://localhost:3000

4. Once you have completed the form, you will be given a client ID. 

   You will also need the issuer value for your Okta org. 
   
   For example, https://okta-domain.okta.com/oauth2/default

5. Add these values client ID and issuer value in .env as environment variables.

# Implementation:

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory:

### `npx create-react-app okta-react-sample-app`

## Source Code:
### Please refer: [https://github.com/Prashika/okta-react-sample-app.git](https://github.com/Prashika/okta-react-sample-app.git)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Use your own okta-developer account credentials for login.

The page will reload when you make changes.\
You may also see any lint errors in the console.
