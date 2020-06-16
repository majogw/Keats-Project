import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonNavigation} from './ButtonNavigation';
import Navigation from './Navigation';
import {CajitaContacUs} from './CajitaContactUs';
import {Footer} from './Footer';
import {Logo2} from './Logo2';

export const ContactUs = () => {
  const history = useHistory();
  function regresar() {
    history.push('/');
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='base-contact'>
          <div className='navy-footer'>
            <Navigation></Navigation>
          </div>
          <Logo2></Logo2>
          <div className='segundo-contact'>
            <CajitaContacUs></CajitaContacUs>
          </div>
          <div className='footer-contact'>
            <Footer></Footer>
          </div>
        </div>
      </header>
    </div>
  );
};
