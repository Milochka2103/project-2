import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import './LoginPage.css';

export const LoginPage = ({ setIsLoggedIn }) => {
  
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('isLoggedIn', true)
    setIsLoggedIn(true);
    history.push('/')
  }
  

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <h1>Authorization</h1>
      <div>
        <input
          ref={loginRef}
          type="text"
          placeholder="Your email"
          name="login"
          required
        />
      </div>
      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Your password"
          name="password"
          required
        />
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
}
