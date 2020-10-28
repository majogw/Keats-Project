import React from 'react';
import {BigComponent} from './BigComponent';

export const Nuevo = () => {
  return (
    <div>
      <BigComponent color={'#4ac5ff'} arrow />
      <BigComponent color={'white'} activeCircle={1} />
      <BigComponent color={'#4ac5ff'} activeCircle={2} />
      <BigComponent color={'white'} activeCircle={3} />
    </div>
  );
};
