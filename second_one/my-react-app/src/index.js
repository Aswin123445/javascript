import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App ,* as Data from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';
import Unknown , * as Compo from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Unknown />
    <Compo.SecondComponent/>
    <Compo.FooterCompent/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
