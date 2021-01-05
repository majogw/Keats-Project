import React from 'react';
import styled from 'styled-components';
import {Comiendo} from './Comiendo';

const Tercero = styled.div`
  flex: 1;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4ac5ff;
  height: 100%;
  position: relative;
`;

const FordernCompleto = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto-Medium';
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const Fordern = styled.h1`
  display: flex;
  color: white;
`;

const FordernText = styled.p`
  display: flex;
  width: 30rem;
`;

export const TercerComponente = () => {
  return (
    <Tercero>
      <Comiendo></Comiendo>
      <FordernCompleto>
        <Fordern>Was wir fördern</Fordern>
        <FordernText>
          – die soziale Integration<br></br> – das Wohlbefinden<br></br> – die
          Beschleunigung des Spracherwerbs <br></br>– das Erlernen
          interkultureller Fähigkeiten in jungem Alter<br></br> – die Vernetzung
          der Eltern<br></br> – die Vernetzung des Quartiers<br></br> – eine
          inklusive, diverse und gleichberechtigte Gesellschaft <br></br>
          <br></br>
          Die soziale Interaktion, die durch unser Startup gefördert wird,
          erfolgt in Form von gemeinsamen Mittagessen. Dazu stellt Keats eine
          Plattform zur Verfügung, auf welcher eine Familie entweder ein
          Mittagessen anbieten oder für das eigene Kind buchen kann.
        </FordernText>
      </FordernCompleto>
    </Tercero>
  );
};
