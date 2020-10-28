import React from 'react';
import {useHistory} from 'react-router-dom';

export const botonDesaparecer = () => {
  const [numeroClick, setClick] = React.useState(0);
  function borrar() {
    if (numeroClick === 3) {
      // delete button//
    }
    console.log(numeroClick);
  }
  return (
    <button
      onClick={() => {
        borrar();
      }}
    ></button>
  );
};
