import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hero } from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>
);