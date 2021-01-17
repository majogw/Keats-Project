import React from 'react';
import styled from 'styled-components';
import {FotoScreenshot} from './FotoScreenshotApp';

const Completa = styled.div`
  flex: 1;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  height: 100%;
  position: relative;
`;

const Mision = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto-Medium';
  justify-content: center;
  align-items: center;
`;

const TituloMision = styled.h1`
  display: flex;
  color: #4ac5ff;
  font-size: 2.37rem;
`;
const MisionMessage = styled.p`
  display: flex;
  width: 30rem;
  font-size: 1.12rem;
`;

export const SegundoComponente = () => {
  return (
    <Completa>
      <Mision>
        <TituloMision>Unsere Mission</TituloMision>
        <MisionMessage>
          Essen verbindet - Keats ist ein soziales Startup, das die Förderung
          von Chancengleichheit für Kinder mit Migrationshintergrund verfolgt.
          Dies wird durch die Förderung der sozialen Interaktion zwischen
          Kindern mit und ohne Migrationshintergrund erreicht.
        </MisionMessage>
      </Mision>
      <FotoScreenshot></FotoScreenshot>
    </Completa>
  );
};
