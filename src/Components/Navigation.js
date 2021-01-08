import React, {useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ButtonNavigation} from './ButtonNavigation';
import {Logo1} from './Logo1';

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
          <Logo1></Logo1>
        </div>
        <div className='divhorizontal divnegro'>
          <div>
            <ButtonNavigation
              label='Home1'
              active={location.pathname === '/nuevo'}
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
