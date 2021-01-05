import React from 'react';
import styled from 'styled-components';
import comiendo from './Images/comiendo.svg';

const GranComiendo = styled.div`
  display: flex;
`;

const Comiendoi = styled.img`
  height: 19.56rem;
`;

export const Comiendo = () => {
  return (
    <GranComiendo>
      <Comiendoi alt={'Family eating with children'} src={comiendo} />
    </GranComiendo>
  );
};
