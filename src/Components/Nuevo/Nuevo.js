import React from 'react';
import {BigComponent} from './BigComponent';

export const Nuevo = () => {
  return (
    <div>
      <BigComponent component={1} color={'#4ac5ff'} arrow />
      <BigComponent component={2} color={'white'} activeCircle={1} />
      <BigComponent component={3} color={'#4ac5ff'} activeCircle={2} />
      <BigComponent component={4} color={'white'} activeCircle={3} />
    </div>
  );
};
