import React from 'react';
import styled from 'styled-components';
import fotoAnais from './Images/Anais.jpg';

export const PrincipalGrupo = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 3rem;
  background-color: #ccefff;
  font-family: 'Roboto-Medium';
`;
export const TotalTextoa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MarcoTitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const TituloSind = styled.h3`
  display: flex;
  color: black;
`;
export const MarcoTextoa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 71.75rem;
`;
export const TextoSind = styled.p`
  display: flex;
  font-size: 1.5rem;
  color: #4ac5ff;
`;
export const MarcoTituloa = styled.div`
  display: flex;
`;

export const TituloGeschihte = styled.h3`
  display: flex;
  color: black;
`;
export const MarcoTextob = styled.div`
  display: flex;
  justify-content: center;
  width: 71.75rem;
`;
export const TextoGeschichte = styled.p`
  display: flex;
  font-size: 1.5rem;
  color: #4ac5ff;
`;
export const MarcoGraf = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GrupoCuatro = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ChicasMarco = styled.li`
  display: flex;
  flex-direction: row;
`;
export const ChicosMarco = styled.li`
  display: flex;
  flex-direction: row;
`;

export const Anais = styled.li`
  display: flex;
`;

export const MarcoAnais = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextoAnais = styled.p`
  display: flex;
`;

export const Anaispic = styled.img`
  display: flex;
  width: 12.5rem;
  height: 12.5rem;
  margin-left: 3rem;
  outline-color: transparent;
  outline-style: dotted;
`;

export const Jonas = styled.li`
  display: flex;
`;

export const Nithu = styled.li`
  display: flex;
`;

export const Nico = styled.li`
  display: flex;
`;

export const Grupo = () => {
  return (
    <PrincipalGrupo>
      <TotalTextoa>
        <MarcoTitulo>
          <TituloSind>Wir sind Keats und für das stehen wir ein</TituloSind>
        </MarcoTitulo>
        <MarcoTextoa>
          <TextoSind>
            Wir bei Keats teilen die Überzeugung, dass alle Kinder, unabhängig
            ihrer Herkunft, ihres Geschlechts, ihres sozioökonomischen Status
            und anderer Differenzen, ein Recht auf gleiche Bildungschancen haben
            sollen. Wir glauben, dass Probleme nur überwunden werden können,
            wenn die Gesellschaft dafür sensibilisiert wird und gemeinsam
            handelt.
          </TextoSind>
        </MarcoTextoa>
        <MarcoTituloa>
          <TituloGeschihte>
            Wir sind Keats und das ist unsere Geschichte
          </TituloGeschihte>
        </MarcoTituloa>
        <MarcoTextob>
          <TextoGeschichte>
            Keats entstand im Dezember 2018 an der Universität Zürich im Rahmen
            eines Seminars (Social Entrepreneurship), welches als Wettbewerb
            ausgelegt war. Unser Projekt wurde mit dem besten Businessplan und
            Pitch ausgezeichnet. Seither arbeiten wir eifrig an der
            Verwirklichung unseres Projektes. Wir haben Anfang 2019 einen
            App-Entwickler in unser Team aufgenommen und mit ihm zusammen einen
            funktionellen Prototyp unserer App entwickelt. Weiter haben wir das
            Gespräch mit Schulleitern, Eltern und Lehrern aufgesucht, um ihre
            Bedürfnisse und Anregungen zu erfahren. Seit Herbst 2019 haben wir
            eine Kollaboration mit einer Schule in Luzern in die Wege geleitet.
            Unser neustes Mitglied seit Anfang 2020 ist im UX Design tätig und
            für die Entwicklung der Benutzerfreundlichkeit unserer App
            zuständig.
          </TextoGeschichte>
        </MarcoTextob>
      </TotalTextoa>
      <MarcoGraf>
        <GrupoCuatro>
          <ChicasMarco>
            <MarcoAnais>
              <Anaispic alt='foto' src={fotoAnais} />
              <Anais>Anaïs (Co-Gründerin)</Anais>
              <TextoAnais>
                Als Kind nicht-deutschsprachiger Eltern, weiss ich wie schwierig
                Integration sein kann. Seit ich mich erinnern kann möchte ich
                mich deshalb engagieren, um es Betroffenen leichter zu machen
                und eine offene und tolerante Gesellschaft zu fördern. Ich bin
                überzeugt, dass Sprache, eine gute Portion Neugierde, sowie
                Verständnis für andere Perspektiven die Hauptzutaten für
                Integration sind. Mit Keats möchte ich diese fördern und Kindern
                mit ihren Eltern eine Möglichkeit zum Austausch bieten.
              </TextoAnais>
            </MarcoAnais>
            <Nithu>Nithu (Co-Gründerin)</Nithu>
          </ChicasMarco>
          <ChicosMarco>
            <Jonas>Jonas (Kernteam und UX-, UI-Design)</Jonas>
            <Nico>Nico (Kernteam und Entwicklung)</Nico>
          </ChicosMarco>
        </GrupoCuatro>
      </MarcoGraf>
    </PrincipalGrupo>
  );
};