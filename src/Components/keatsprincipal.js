import React from 'react';
import {useHistory} from 'react-router-dom';
import {globos2} from './Images/globos2.svg';
import {globos1} from './Images/globos1.svg';

export const keatsPrincipal = () => {
  return (
    <div className='TeamParalelo'>
      <div className='Teamcuadro '>
        <div className='espacio-letrasantes'>
          <p className='letras-grandes'>KEATS</p>
        </div>
        <div>
          <div className='globo2'>
            <globos2></globos2>
          </div>
          <div className='globo1'>
            <globos1></globos1>;
          </div>
        </div>
      </div>
    </div>
  );
};
