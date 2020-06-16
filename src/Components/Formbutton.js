import React from 'react';
import {useHistory} from 'react-router-dom';

export const ButtonForm = (props) => {
  const history = useHistory();
  function bforma() {
    if (props.label === 'Home') {
      console.log('Home');
      history.push('/');
    
    }
  }
  return (
    <div className='ButtonForma' onClick={bforma}>
      <div> {props.label} </div>
      {props.active && <div className='linea-azul'></div>}
    </div>
  );
};
