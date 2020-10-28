import React from 'react';
import {useHistory} from 'react-router-dom';
import {CajitaHomeUno} from './CajitaHomeUno';
import {ButtonNavigation} from './ButtonNavigation';
import Navigation from './Navigation';
import {Footer} from './Footer';
import {Logo2} from './Logo2';

export const Home1 = () => {
  const history = useHistory();
  function regresar() {
    history.push('/');
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation></Navigation>
        <Logo2></Logo2>
        <CajitaHomeUno></CajitaHomeUno>
        <Footer></Footer>
      </header>
    </div>
  );
};
