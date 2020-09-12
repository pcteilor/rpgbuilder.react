//  Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Dependencies
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Styles of CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './styles/custom.css';
import './styles/rpc-theme.css';

// Componentes
//import App from './App';
import Card from './componentes/Card'
import Header from './componentes/Header'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
