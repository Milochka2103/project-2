import React from 'react';
import './LoginPage.css';

export const LoginPage = ({ setIsLoggedIn }) => {
  
  const logIn = () => setIsLoggedIn(true)

  return (
    <form onSubmit={logIn} className="loginform">
      <h1>Authorization</h1>
      <div>
        <input type="text" placeholder="Your email" name="login" required />
      </div>
      <div>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          required
        />
      </div>
      <div>
        <button type='submit'>Log in</button>
      </div>
    </form>
  );
}
