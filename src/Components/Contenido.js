import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonNavigation} from './ButtonNavigation';
import Navigation from './Navigation';
import {Logo2} from './Logo2';
import {LogoFamilia} from './LogoFamilia';
import {LogoLunch} from './LogoLunch';
import screenshotApp from './Images/ScreenshotApp.jpeg';
import {TeamLi} from './TeamLi';
import {Team} from './Team';

export const Contenido = () => {
  const history = useHistory();
  function regresar() {
    history.push('/');
  }

  return (
    <div className='TeamParalelo'>
      <div className='Teamcuadro'>
        <div className='mission-complete espacio-contenido'>
          <ul>
            <div className='mission-texto'>
              <div className='mission-lirow'>
                <li>
                  <div className='mission-h1'>
                    <h1>Unsere Mission</h1>
                  </div>
                  <p>
                    Essen verbindet - Keats ist ein soziales Startup, das die
                    Förderung von Chancengleichheit für Kinder mit
                    Migrationshintergrund verfolgt. Dies wird durch die
                    Förderung der sozialen Interaktion zwischen Kindern mit und
                    ohne Migrationshintergrund erreicht.
                  </p>
                </li>
              </div>
              <div className='mission-lirow'>
                <li>
                  <div className='image-screen'>
                    <img className='sreen-pict' src={screenshotApp} />
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className='fordern'>
          <div className='imagen-lunch'>
            <LogoLunch></LogoLunch>
          </div>
          <div className='fordern-text'>
            <ul>
              <div className='titulo-blanco'>
                <h1>Was wir fördern</h1>
              </div>
              <div>
                <li>die soziale Integration</li>
                <li> das Wohlbefinden </li>
                <li> die Beschleunigung</li>
                <li>des Spracherwerbs </li>
                <li>
                  das Erlernen interkultureller Fähigkeiten in jungem Alter
                </li>
                <li>die Vernetzung der Eltern</li>
                <li>die Vernetzung des Quartiers</li>
                <li>
                  eine inklusive, diverse und gleichberechtigte Gesellschaft
                </li>
                <p>
                  Die soziale Interaktion, die durch unser Startup gefördert
                  wird, erfolgt in Form von gemeinsamen Mittagessen. Dazu stellt
                  Keats eine Plattform zur Verfügung, auf welcher eine Familie
                  entweder ein Mittagessen anbieten oder für das eigene Kind
                  buchen kann.
                </p>
              </div>
            </ul>
          </div>
        </div>
        <div className='mitmachen'>
          <div className='titulo-celeste'>
            <h1>Wieso mitmachen?</h1>
          </div>
          <div className='imagenfa-conteiner'>
            <div className='imagen-familia'>
              <LogoFamilia></LogoFamilia>
            </div>
          </div>
          <div className='mitmachen-text'>
            <ul className='mitmachen-row'>
              <div className='mitmachen-row'>
                <li>
                  <div>
                    <div className='titulo-celeste'>
                      <h1>Kinder</h1>
                    </div>
                    <p>
                      Wir unterstüzen Kinder zwischen sieben und zwölf Jahren
                      mit Migrationshintergrund unterstüzen. Gleichzeitig
                      profitieren Schweizer Kinder durch interkulurellen
                      Austausch von Sprachen, Essen und Freunden.
                    </p>
                  </div>
                </li>
              </div>
              <div className='mitmachen-row'>
                <li>
                  <div>
                    <div className='titulo-celeste'>
                      <h1>Eltern</h1>
                    </div>
                    <div>
                      <p>
                        Wir können Eltern entlasten und bieten eine simple und
                        kostengünstige Alternative für die Mittagsversorgung
                        ihrer Kinder.
                      </p>
                    </div>
                  </div>
                </li>
              </div>
              <div className='mitmachen-row'>
                <li>
                  <div>
                    <div className='titulo-celeste'>
                      <h1>Schulen</h1>
                    </div>
                    <div>
                      <p>
                        Die Schulen profitieren durch reduzierte Kosten im
                        Bereich der Integration und der Sprachen erlernung.
                        Schliesslich profitiert auch die Gesellschaft durch die
                        Förderung von Inklusion, Diversität und
                        Gleichberechtigung.
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <TeamLi></TeamLi>
        </div>
      </div>
    </div>
  );
};
