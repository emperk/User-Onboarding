import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checked" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a User</h2>

        <button disabled={disabled}>submit</button>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.password}</div>
          <div>{errors.email}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>General Information</h4>
        <label>
          Name
          <input 
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Password
          <input 
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>

        <label>
          Email
          <input 
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>
      </div>
      <div className="form-group terms">
        <h4>Terms of Service</h4>
        <label>
          I Agree
          <input 
            type="checkbox"
            name="agree"
            checked={values.agree}
            onChange={onChange}
          />
        </label>

        <label>
          I Disagree
          <input 
            type="checkbox"
            name="disagree"
            checked={values.disagree}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  )
}