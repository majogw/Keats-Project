import React from 'react';
import styled from 'styled-components';
import familiareunion from './Images/familiareunion.svg';

const GranFamilia = styled.div`
  display: flex;
`;

const Familia = styled.img`
  height: 24.56rem;
  margin-top: 1.25rem;
`;

export const FamiliaReunion = () => {
  return (
    <GranFamilia>
      <Familia alt={'Meeting of Families'} src={familiareunion} />
    </GranFamilia>
  );
};
