import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonNavigation} from './ButtonNavigation';
import Navigation from './Navigation';
import {CajitaÜberUns} from './CajitaÜberUns';
import {Footer} from './Footer';
import {Logo2} from './Logo2';

export const AboutUs = () => {
  const history = useHistory();
  function regresar() {
    history.push('/');
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation></Navigation>
        <Logo2></Logo2>
        <CajitaÜberUns></CajitaÜberUns>
        <Footer></Footer>
      </header>
    </div>
  );
};
