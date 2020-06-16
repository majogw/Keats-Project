import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import {AboutUs} from './Components/AboutUs';
import {ContactUs} from './Components/ContactUs';
import './Components/Fonts/AmaticSC-Regular.ttf';
import './Components/Fonts/Roboto-Medium.ttf';

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} exact />
      <Route exact path='/aboutus' component={AboutUs} />
      <Route exact path='/contactus' component={ContactUs} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
