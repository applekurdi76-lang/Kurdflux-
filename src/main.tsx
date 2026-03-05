import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ئەمە زیاد کرا
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* لێرە basename زیاد کرا بۆ ئەوەی لاپەڕە سپییەکە نەمێنێت */}
    <BrowserRouter basename="/Kurdflux-/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
