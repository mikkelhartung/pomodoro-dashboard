import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};


function App() {
  const [userMetadata, setUserMetadata] = useState<[]>([]);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });


        if (user) {
          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

          const metadataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const { user_metadata: { github_orgs } } = await metadataResponse.json();

          setUserMetadata(github_orgs);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [user, getAccessTokenSilently]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {userMetadata.map(org => <p>{org}</p>)}
          <LogoutButton />
        </div>
      ) : <LoginButton />
      }
    </div>
  );
}

export default App;
