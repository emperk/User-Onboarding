import React from "react";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkout" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add a User</h2>

                <button disabled={disabled}>SUBMIT</button>

                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.email}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>

            <div className="form-group inputs">
                <h4>GENERAL INFORMATION</h4>
                <label>
                    Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name="username"
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

                <label>
                    I Agree
                    <input 
                        type="radio"
                        name="termsOfService"
                        value="I Agree"
                        checked={values.termsOfService === "I Agree"}
                        onChange={onChange}
                    />
                </label>

                <label>
                    I Do Not Agree. This is a SCAM!
                    <input 
                        type="radio"
                        name="termsOfService"
                        value="I Do Not Agree. This is a SCAM!"
                        checked={values.termsOfService === "I Do Not Agree. This is a SCAM!"}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}