// import React from 'react';
// import ReactDOM from 'react-dom';
// import { worker } from './api-mocks/browser'
// worker.start()

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import { render } from 'react-dom'
// import App from './App';

// render(
//   <App />
//   , document.querySelector('#root')
// )
import React from 'react'
import { render } from 'react-dom'

// 👉 Importing the top-level component
import App from './App'

// This is for the fake API. Do not delete!
// import { worker } from './api-mocks/browser'
// worker.start()

// 👉 Importing React libs from node_modules folder

render(
  <App />
  , document.querySelector('#root')
)

