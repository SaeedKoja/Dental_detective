import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

//import  "./Login Component/login.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>
);


