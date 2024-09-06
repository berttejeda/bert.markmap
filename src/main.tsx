// React core
import React from 'react';
import ReactDOM from 'react-dom/client'
// Hot-reloader logic
import { hot, AppContainer } from 'react-hot-loader';

import MarkmapHooks from './markmap-hooks';
import './style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function App() {
  return (
    <div className="flex flex-col h-screen p-2">
      <MarkmapHooks />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if(module.hot){
    module.hot.accept()
}