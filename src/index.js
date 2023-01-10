import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./firebase/firebase.js"
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-EKPFP5PM9N";
ReactGA.initialize(TRACKING_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
