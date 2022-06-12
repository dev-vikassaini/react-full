import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComptInsideCompt from './ComptInsideCompt';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <ComptInsideCompt /> */}
  </React.StrictMode>
);
reportWebVitals();
