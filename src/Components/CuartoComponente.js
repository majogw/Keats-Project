import React from 'react';
import styled from 'styled-components';
import {FamiliaReunion} from './FamiliaReunion';

const GrandeCuarto = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto-Medium';
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  background-color: white;
  height: 100%;
  position: relative;
`;

const DobleCuarto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background-color: white;
`;

const TituloMitmachen = styled.h1`
  display: flex;
  color: #4ac5ff;
`;

const TripleCuarto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-items: center;
  align-items: center;
  background-color: white;
`;

const TotalAbajo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background-color: white;
`;

const Titulokinder = styled.h1`
  display: flex;
  color: #4ac5ff;
`;
const KinderMessage = styled.p`
  display: flex;
  width: 20rem;
`;

const TituloEltern = styled.h1`
  display: flex;
  color: #4ac5ff;
`;
const ElternMessage = styled.p`
  display: flex;
  width: 20rem;
`;

const TituloSchulen = styled.h1`
  display: flex;
  color: #4ac5ff;
`;
const SchulenMessage = styled.p`
  display: flex;
  width: 20rem;
`;

export const CuartoComponente = () => {
  return (
    <GrandeCuarto>
      <DobleCuarto>
        <TituloMitmachen>Wieso mitmachen?</TituloMitmachen>
        <FamiliaReunion></FamiliaReunion>
      </DobleCuarto>
      <TripleCuarto>
        <TotalAbajo>
          <Titulokinder>Kinder</Titulokinder>
          <KinderMessage>
            Wir unterstüzen Kinder zwischen sieben und zwölf Jahren mit
            Migrationshintergrund unterstüzen. Gleichzeitig profitieren
            Schweizer Kinder durch interkulurellen Austausch von Sprachen, Essen
            und Freunden.
          </KinderMessage>
        </TotalAbajo>
        <TotalAbajo>
          <TituloEltern>Eltern</TituloEltern>
          <ElternMessage>
            Wir können Eltern entlasten und bieten eine simple und
            kostengünstige Alternative für die Mittagsversorgung ihrer Kinder.
          </ElternMessage>
        </TotalAbajo>
        <TotalAbajo>
          <TituloSchulen>Schulen</TituloSchulen>
          <SchulenMessage>
            Die Schulen profitieren durch reduzierte Kosten im Bereich der
            Integration und der Sprachen erlernung. Schliesslich profitiert auch
            die Gesellschaft durch die Förderung von Inklusion, Diversität und
            Gleichberechtigung.
          </SchulenMessage>
        </TotalAbajo>
      </TripleCuarto>
    </GrandeCuarto>
  );
};
