import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContextShare from './contextApi/ContextShare';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <React.StrictMode>
  <ContextShare>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextShare>
  </React.StrictMode>
 
);
