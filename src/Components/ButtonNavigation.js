import React from 'react';
import {useHistory} from 'react-router-dom';

export const ButtonNavigation = (props) => {
  const history = useHistory();
  function navegar() {
    window.scrollTo(0, 0);
    if (props.label === 'Home') {
      console.log('Home');
      history.push('/');
    } else if (props.label === 'Home1') {
      console.log('Home1');
      history.push('/nuevo');
    } else if (props.label === 'Über uns') {
      console.log('Über uns');
      history.push('/aboutus');
    } else if (props.label === 'Contact us') {
      console.log('Contact us');
      history.push('/contactus');
    }
  }
  return (
    <div className='ButtonNavigation' onClick={navegar}>
      <div> {props.label} </div>
      {props.active && <div className='linea-azul'></div>}
    </div>
  );
};
