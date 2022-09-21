import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Helmet><meta name="viewport" content="initial-scale=1.0" /></Helmet>
  <App/>
  </BrowserRouter>
    
  
);
reportWebVitals();
