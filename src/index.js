import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/index";
import "./global/main.css"
import "./index.css"

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

//import  "./Login Component/login.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


