import globo2 from 'Components/Images/globos2.svg';
import React from 'react';
import styled from 'styled-components';

export const Cambio = styled.div`
  display: flex;
  transform: scaleX(-1);
`;

const Tam = styled.img`
  height: 35.12rem;
`;

export const Globo2 = () => {
  return (
    <Cambio>
      <Tam src={globo2} />
    </Cambio>
  );
};
