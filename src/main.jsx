import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Servicios from './componentes/modulo_servision/servisios.jsx';
import AlquilerVenta from './componentes/alquilerVenta/alquilerVenta.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/alquiler-venta" element={<AlquilerVenta />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
