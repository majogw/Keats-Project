import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Unien from './Images/UniversityofZurich.png';
import {ButtonNavigation} from './ButtonNavigation';

export const Footer = () => {
  function clickFacebook() {
    console.log('Facebook');
  }
  return (
    <div className='footer'>
      <div className='totalfooter'>
        <div className='footerboton'>
          <div className='divhorizontal footerboton'>
            <div className='botonabajo'>
              <ButtonNavigation label='Home'></ButtonNavigation>
            </div>
            <div className='botonabajo1'>
              <ButtonNavigation label='Über uns'></ButtonNavigation>
            </div>
            <div className='botonabajo'>
              {' '}
              <ButtonNavigation label='Contact us'></ButtonNavigation>
            </div>
          </div>
        </div>
        <div className='icon-container'>
          <div className='iconos-cajita'>
            <span className='icon'>
              <FontAwesomeIcon
                onClick={clickFacebook}
                icon={['fab', 'facebook-square']}
                size='lg'
              />
            </span>
            <span className='icon'>
              <FontAwesomeIcon icon={['fab', 'instagram']} size='lg' />
            </span>
            <span className='img-container'>
              <img className='img-Unien' src={Unien} />
            </span>
          </div>
        </div>
      </div>
      <div className='mail-footer'>
        <a className='mail-abajo ' href='mailto:info.keats@gmail.com'>
          Info.Keats@gmail.com
        </a>
      </div>
    </div>
  );
};
