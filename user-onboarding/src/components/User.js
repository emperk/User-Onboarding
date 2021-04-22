import React from "react";

function User({details}) {
    if (!details) {
        return <h3>LOADING...</h3>
    }

    return (
        <div className="friend container">
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: {details.termsOfService}</p>
        </div>
    )
}

export default User