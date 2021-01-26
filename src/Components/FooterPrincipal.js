import React from 'react';
import styled from 'styled-components';
import {Colores, Fonts, MakeSpacing, screenHeight} from './Variables';

const MarcoFooter = styled.div`
  display: flex;
  background-color: ${Colores.celesteObscuro};
  height: ${screenHeight / 3}px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MarcoButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

const ButtonNav = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: white;
  font-family: ${Fonts.robotoMedium};
  cursor: pointer;
`;

export const FooterPrincipal = () => {
  return (
    <MarcoFooter>
      <MarcoButton style={{flex: 3}}>
        <ButtonNav>Home</ButtonNav>
        <ButtonNav>Über uns</ButtonNav>
        <ButtonNav>Kontakt</ButtonNav>
      </MarcoButton>
      <MakeSpacing yMultiply={1}></MakeSpacing>
      <MarcoButton style={{flex: 1, justifyContent: 'center'}}>
        <ButtonNav style={{fontSize: '1rem'}}>© KEATS 2020</ButtonNav>
      </MarcoButton>
    </MarcoFooter>
  );
};
