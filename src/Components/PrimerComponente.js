import React from 'react';
import styled from 'styled-components';
import {Globo1} from './Globo1';
import {Globo2} from './Globo2';

const Grande = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  background-color: #4ac5ff;
  height: 100%;
  position: relative;
`;

const Imagenes = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

const Dentro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10rem;
`;

const Nombre = styled.div`
  display: flex;
  color: white;
  font-family: 'Amatic';
  font-size: 50rem;
  line-height: 20rem;
`;

export const PrimerComponente = () => {
  return (
    <Grande>
      <Nombre>KEATS</Nombre>
      <Imagenes>
        <Dentro>
          <Globo2></Globo2>
          <Globo1></Globo1>
        </Dentro>
      </Imagenes>
    </Grande>
  );
};
