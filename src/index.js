import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// My First Component!
function AppComponent(){
  return (
    <h1 id='title'>
      Oli React
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>, //Component because Start with a Upper 
    document.getElementById('root')
);

