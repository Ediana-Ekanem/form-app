import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  console.log(email);

  //   console.log(email);

  function handleEmail(event) {
    console.log(event.target.value);
    setEmail();
  }

  return (
    <form>
      <div className="mx-auto" style={{ width: "500px" }}>
        <div className="container mt-5 shadow-lg p-5 rounded">
          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            Email:
          </label>
          <div className="form-floating mb-4 w-75 mx-auto">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleEmail}
            />
            <label>Email address</label>
          </div>
          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            Password:
          </label>
          <div className="form-floating mb-4 w-75 mx-auto">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            Confirm Password:
          </label>
          <div className="form-floating w-75 mx-auto">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
            />
            <label>Confirm Password</label>
          </div>
          <button className="d-block mx-auto btn btn-primary mt-5 btn-lg w-75">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
