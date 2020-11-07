import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      redirectUri={window.location.origin}
      audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
      scope="read:current_user update:current_user_metadata read:org"
    >

      <App />
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
