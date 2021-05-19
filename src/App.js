// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import User from "./components/User";
import Form from "./components/Form";
import axios from "axios";
import schema from "./validation/formSchema";
import * as yup from "yup";

const initialFormValues = {
  // TEXT INPUTS //
  username: "",
  password: "",
  email: "",
  // checkbox // 
  agree: false,
  disagree: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
};

const initialUsers = [];
const initialDisabled = true;






