import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DescriptionProvider } from './DescriptionContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DescriptionProvider>
      <App />
    </DescriptionProvider>
  </React.StrictMode>,
);
