import React from 'react';
import { Header } from './Header/Header';
import { Predictions } from '../Predictions/Predictions';


export const MainBlock = ({ setIsLoggedIn }) => {

  return (
    <>
      <main>
        <Header setIsLoggedIn={setIsLoggedIn} />
      </main>

      <div>
        <Predictions />
      </div>
      
    </>
  );
};
