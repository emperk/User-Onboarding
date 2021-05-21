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
  name: "",
  password: "",
  email: "",
  // checkbox //
  agree: false,
  disagree: false,
};

const initialFormErrors = {
  name: "",
  password: "",
  email: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  // useState //
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // helpers //

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response?.data?.data);
        console.log("RESPONSE DATA FROM GET USERS: ", response.data);
      })
      .catch((error) => {
        console.log("THE ERROR: ", error);
      });
  };

  const postNewUser = (newUser) => {
    console.log("post", newUser);
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        console.log("THE RESPONSE: ", response);
        setUsers([response?.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((error) => {
        console.log("THE ERROR: ", error);
      });
  };

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() =>
  //       setFormErrors({
  //         ...formErrors, [name]: ''
  //       }))
  // }

  // const inputChange = (name, value) => {
  //   validate(name, value)
  //   setFormValues ({
  //     ...formValues,
  //     [name]: value
  //   })
  // }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => 
        setFormErrors({ 
          ...formErrors, [
            name]: err.errors[0]
          }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      termsOfService: ["agree", "disagree"].filter(term => formValues[term]),
    };

    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  console.log("users", users);

  return (
    <div className="container">
      <header>
        <h1>Create a New User</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map(user => (
        <User key={user.id} details={user} />
      ))}
    </div>
  );
}
