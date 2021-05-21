import React from "react";

function User({details}) {
  if (!details) {
    return <h3>LOADING...</h3>
  }

  return (
    <div className="friend container">
      <p>{details.first_name}</p>
      <p>Email: {details.email}</p>
      {/* <p>Password: {details.password}</p> */}

      {
        !!details.termsOfService && !!details.termsOfService.length &&
        <div>
          Terms of Service:
          <ul>
            {details.termsOfService.map((term, idx) => <li key={idx}>{term}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User;