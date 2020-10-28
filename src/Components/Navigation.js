import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Logo1} from './Logo1';
import {ButtonNavigation} from './ButtonNavigation';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  function regresar() {
    history.push('/');
  }

  return (
    <div className='Navigation'>
      <div className='divhorizontal'>
        <div>
          <Logo1 className=''></Logo1>
        </div>
        <div className='divhorizontal divnegro'>
          <div>
            <ButtonNavigation
              label='Home1'
              active={location.pathname === '/Home1'}
            ></ButtonNavigation>
          </div>
          <div>
            <ButtonNavigation
              label='Home'
              active={location.pathname === '/'}
            ></ButtonNavigation>
          </div>
          <div>
            <ButtonNavigation
              label='Über uns'
              active={location.pathname === '/aboutus'}
            ></ButtonNavigation>
          </div>
          <div>
            <ButtonNavigation
              label='Contact us'
              active={location.pathname === '/contactus'}
            ></ButtonNavigation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
