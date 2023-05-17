import { createRoot } from 'react-dom/client';
import React from 'react';

import { Provider } from './context/books';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
