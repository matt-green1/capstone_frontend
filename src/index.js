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


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
