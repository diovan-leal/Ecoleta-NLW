import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Index from './pages/Home'

//JSX SINTAXE DO XML NO JAVASCRIPT
//HABILIDADE DE ESCREVER HTML DENTRO DO JAVASCRIPT
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Index /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

