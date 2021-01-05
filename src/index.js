import {ContactUs} from 'Components/ContactUs';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import {AboutUs} from './Components/AboutUs';
import './Components/Fonts/AmaticSC-Regular.ttf';
import './Components/Fonts/Roboto-Medium.ttf';
import {Nuevo} from './Components/Nuevo/Nuevo';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/aboutus' component={AboutUs} />
      <Route exact path='/contactus' component={ContactUs} />
      <Route exact path='/nuevo' component={Nuevo} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
