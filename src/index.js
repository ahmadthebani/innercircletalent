import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route , HashRouter  } from "react-router-dom";

import Contact from './pages/Contact';
import Easforfounders from './pages/Easforfounders';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/easforfounders" element={<Easforfounders/>} />
    </Routes>
  </HashRouter>
);


