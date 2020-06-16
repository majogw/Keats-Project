import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {AboutUs} from './Components/AboutUs';
import {ContactUs} from './Components/ContactUs';
import {useHistory} from 'react-router-dom';
import UnsereWerte from './Components/UnsereWerte';
import {Team} from './Components/Team';
import Wiederum from './Components/Wiederum';
import {Logo2} from './Components/Logo2';
import {Logo1} from './Components/Logo1';
import {Footer} from './Components/Footer';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {Navigation} from './Components/Navigation';
import ScreenshotApp from './Components/Images/ScreenshotApp.jpeg';

library.add(fab,far);

function App() {
  const history = useHistory();

  const [name, setName] = useState('Majo');
  function dioClick() {
    console.log('dioClick');
    //setName('Nico');
    history.push('/aboutus');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation></Navigation>
        <div className='Totales'>
          <div className='textos'>
            <div className='ab'>
              <div>
                <Logo1></Logo1>
              </div>
              <div className='titulo mission-titulo'>
                <h1>Mission</h1>
              </div>
              <div className='grandetext'>
                <p className='text'>
                  Essen verbindet - Keats ist ein soziales Startup, das die
                  Förderung von Chancengleichheit für Kinder mit
                  Migrationshintergrund verfolgt. Dies wird durch die Förderung
                  der sozialen Interaktion zwischen Kindern mit und ohne
                  Migrationshintergrund erreicht.
                </p>
              </div>
              <div className='titulo'>
                <h1>Dies wiederum fördert</h1>
              </div>
              <div>
                <Wiederum></Wiederum>
              </div>
              <div className='grandetext'>
                <p className='text'>
                  Die soziale Interaktion, die durch unser Startup gefördert
                  wird, erfolgt in Form von gemeinsamen Mittagessen. Dazu stellt
                  Keats eine Plattform zur Verfügung, auf welcher eine Familie
                  entweder ein Mittagessen anbieten oder für das eigene Kind
                  buchen kann.
                </p>
              </div>
              <div className='screenshot'>
                <img className='img-shot' src={ScreenshotApp} />
              </div>
              <div className='titulo'>
                <h1>Wieso mitmachen?</h1>
              </div>
              <div className='grandetext'>
                <p className='text'>
                  Primär sollen Primarschüler (7-12 Jahre) mit
                  Migrationshintergrund profitieren. Diese machen laut BFS über
                  einen Viertel (27%) der Primarschulkinder in der Schweiz aus.
                  Allerdings profitieren gleichzeitig auch Schweizer Kinder
                  durch den interkulturellen Austausch. Weiter profitieren
                  ebenfalls die Eltern, da sie eine simple und kostengünstige
                  Alternative für die Mittagsversorgung ihrer Kinder erhalten.
                  Die Schulen profitieren durch reduzierte Kosten im Bereich der
                  Integration. Schliesslich profitiert auch die Gesellschaft
                  durch die Förderung von Inklusion, Diversität und
                  Gleichberechtigung.
                </p>
              </div>
              <Logo2></Logo2>
              <div></div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
