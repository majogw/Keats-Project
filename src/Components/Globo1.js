import globo1 from 'Components/Images/globos1.svg';
import React from 'react';
import styled from 'styled-components';
import {Cambio} from './Globo2';

const Tamanio = styled.img`
  height: 30.68rem;
`;

export const Globo1 = () => {
  return (
    <Cambio>
      <Tamanio src={globo1} />
    </Cambio>
  );
};
