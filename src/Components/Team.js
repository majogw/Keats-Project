import React from 'react';
import fotoAnais from './Images/Anais.jpg';
import fotoJonas from './Images/Jonas.jpg';
import fotoNico from './Images/Nico.jpg';
import fotoNithu from './Images/Nithu.jpg';
import UnsereWerte from './UnsereWerte';

export const Team = () => {
  return (
    <div className='Teamparalelo'>
      <div className='Teamcuadro'>
        <div className='titulo texttituloteam titulouber'>
          <h1 className=''>Über Uns</h1>
        </div>
        <div className='text-team'>
          <p>
            Wir bei Keats teilen die Überzeugung, dass alle Kinder, unabhängig
            ihrer Herkunft, ihres Geschlechts, ihres sozioökonomischen Status
            und anderer Differenzen, ein Recht auf gleiche Bildungschancen haben
            sollen. Wir glauben, dass Probleme nur überwunden werden können,
            wenn die Gesellschaft dafür sensibilisiert wird und gemeinsam
            handelt.
          </p>
          <div className='titulo texttituloteam'>
            <h1>Unsere Werte</h1>
          </div>
        </div>
        <div className='contienecdu'>
          <div className='principal'>
            <div>
              <UnsereWerte></UnsereWerte>
            </div>
          </div>
        </div>

        <div className='contienecdu'>
          <div className='principal'>
            <div>
              <p>
                [SDGs als Symbole einblenden: 3 (good health and wellbeing), 4
                (quality education), 5 (gender equality – dadurch, dass
                arbeitende Frauen unterstützt werden, da sie keinen
                Hort/Mittagstisch zahlen müssen), 10 (reduced inequalities)]
              </p>
            </div>
          </div>
        </div>

        <div className='contienecdu'>
          <div className='principal'>
            <div>
              <div className='titulo texttituloteam titulouber'>
                <h1>Was bisher geschah:</h1>
              </div>
              <p>
                Keats entstand im Dezember 2018 an der Universität Zürich im
                Rahmen eines Seminars (Social Entrepreneurship), welches als
                Wettbewerb ausgelegt war. Unser Projekt wurde mit dem besten
                Businessplan und Pitch ausgezeichnet. Seither arbeiten wir
                eifrig an der Verwirklichung unseres Projektes. Wir haben Anfang
                2019 einen App-Entwickler in unser Team aufgenommen und mit ihm
                zusammen einen funktionellen Prototyp unserer App entwickelt.
                Weiter haben wir das Gespräch mit Schulleitern, Eltern und
                Lehrern aufgesucht, um ihre Bedürfnisse und Anregungen zu
                erfahren. Seit Herbst 2019 haben wir eine Kollaboration mit
                einer Schule in Luzern in die Wege geleitet. Unser neustes
                Mitglied seit Anfang 2020 ist im UX Design tätig und für die
                Entwicklung der Benutzerfreundlichkeit unserer App zuständig.
              </p>
            </div>
          </div>
        </div>

        <div className='contienecdu'>
          <div className='principal'>
            <h2 className='nombre'>Nico (App-Entwickler)</h2>
            <img className='imgteam' src={fotoNico} />
            <div className='grandetext'>
              <p className='textteam'>Nicolas is a developer</p>
            </div>
          </div>
        </div>
        <div className='contienecdu'>
          <div className='principal'>
            <h2 className='nombre'>Jonas (UX-Designer)</h2>
            <h3></h3>
            <img className='imgteam' src={fotoJonas} />
            <div className='grandetext'>
              <p className='textteam'>
                Ich bin bei Keats mit dabei, weil ich mehr Chancengleichheit für
                alle will. Ich bin verantwortlich für leuchtende Farben und dass
                du dich bei der Benutzung der App so richtig wohlfühlst.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='Teamcuadro'>
        <div className='contienecdu'>
          <div className='principal'>
            <h2 className='nombre'> Anaïs (Co-Founder) </h2>
            <img className='imgteam' src={fotoAnais} />
            <div className='grandetext'>
              <p className='textteam'>
                Als Kind nicht-deutschsprachiger Eltern, weiss ich wie schwierig
                Integration sein kann. Seit ich mich erinnern kann möchte ich
                mich deshalb engagieren, um es Betroffenen leichter zu machen
                und eine offene und tolerante Gesellschaft zu fördern. Ich bin
                überzeugt, dass Sprache, eine gute Portion Neugierde, sowie
                Verständnis für andere Perspektiven die Hauptzutaten für
                Integration sind. Mit Keats möchte ich diese fördern und Kindern
                mit ihren Eltern eine Möglichkeit zum Austausch bieten.
              </p>
            </div>
          </div>
        </div>
        <div className='contienecdu'>
          <div className='principal'>
            <h2 className='nombre'>Nithu (Co-Founder)</h2>
            <img className='imgteam' src={fotoNithu} />
            <div className='grandetext'>
              <p className='textteam'>
                Ich mache bei Keats mit, weil ich selber als Kind mit
                Migrationshintergrund die Situation kannte, sich wegen
                Sprachbarrieren nicht gut genug ausdrücken zu können. Ich möchte
                meine persönliche Erfahrung einbringen, um es den Kindern heute
                zu erleichtern miteinander in Kontakt zu kommen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
