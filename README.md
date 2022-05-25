# okta-react-sample-app
Steps to follow:

1. Register your application by selecting Applications > Creat App Integration. On the next screen, choose OIDC and Single Page App and click Next.

On the following screen, edit the application settings. 
For React applications running in developer mode, the port number should be 3000. 

2. Configure your app as follows:

   Base URI: http://localhost:3000
  
   Login redirect URI: http://localhost:3000/callback
  
   Logout redirect URI: http://localhost:3000

3. Once you have completed the form, you will be given a client ID. 

   You will also need the issuer value for your Okta org. 
   
   For example, https://dev-133337.okta.com/oauth2/default

4. Add these values in .env as environment variables.
