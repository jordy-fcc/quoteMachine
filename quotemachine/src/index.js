import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './vars.css';
import "./Footer.css";
import QuoteMachine from './QuoteMachine';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuoteMachine />
    <Footer />
  </React.StrictMode>
);


