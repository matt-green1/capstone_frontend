import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom' 
import 'semantic-ui-css/semantic.min.css'
import './fonts/WindsorProBold.woff'
import './fonts/WindsorProElongated.woff'
import './fonts/WindsorProRg.woff'
import './fonts/WindsorProUltHv.woff'
import './fonts/WindsorProXBoldCn.woff'
import './fonts/danzza-medium-webfont.ttf'
import './images/send.png'
import './images/store.png'
import './images/write copy.png'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
