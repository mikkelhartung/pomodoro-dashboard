import React, { FC } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from '../Avatar';
// import styles from './styles.module.scss'

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

const Header: FC = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav>
      {isAuthenticated ? (
        <div>
          <Avatar image={user.picture} />
          <h2>{user.name}</h2>

          <LogoutButton />
        </div>
      ) : <LoginButton />
      }
    </nav>
  )
}

export default Header
