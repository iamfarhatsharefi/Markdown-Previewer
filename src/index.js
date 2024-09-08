import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Use createRoot for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
