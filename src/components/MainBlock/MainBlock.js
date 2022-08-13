import React from 'react';
import { Header } from './Header/Header';



export const MainBlock = ({ setIsLoggedIn }) => {

  return (
      <main>
        <Header setIsLoggedIn={setIsLoggedIn} />
      </main>
  );
};
