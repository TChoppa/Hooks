import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PracHooks from './Hooks/PracHooks';
import HookUseEffect from './Hooks/HookUseEffect';
import HookUseRef from './Hooks/HookUseRef';
import HookUseMemo from './Hooks/HookUseMemo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  // <HookUseRef/>
  // </React.StrictMode>
  // <HookUseRef/>
  <HookUseMemo/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
