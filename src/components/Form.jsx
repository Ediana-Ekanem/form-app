import React, { useState } from "react";

function Form() {
  // save your state in an object instead of seperate var
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSingle: true,
    employment: "",
    favColor: "",
  });

  // This console is used to test
  //   console.log(formData.favColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
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
              onChange={handleChange}
              name="email"
              value={formData.email}
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
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            <label>Password</label>
          </div>
          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            Confirm Password:
          </label>
          <div className="form-floating w-75 mx-auto mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword}
            />
            <label>Confirm Password</label>
          </div>
          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            Comment:
          </label>
          <div className="form-floating w-75 mx-auto">
            <textarea
              className="form-control"
              id="floatingComment"
              placeholder="Comment"
              onChange={handleChange}
              name="comment"
              value={formData.comment}
            />
            <label>Comment</label>
          </div>

          <div className="form-floating w-75 mx-auto mt-3">
            <input
              type="checkbox"
              id="isSingle"
              checked={formData.isSingle}
              onChange={handleChange}
              name="isSingle"
            />
            <label className="" htmlFor="isSingle">
              Are you Single?
            </label>
            <br />
            <br />
          </div>
          <div className="form-floating w-75 mx-auto mt-3">
            <fieldset>
              <legend>Current employment status</legend>

              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                onChange={handleChange}
                checked={formData.employment === "unemployed"}
              />
              <label htmlFor="unemployed">Unemployed</label>
              <br />
              <input
                type="radio"
                id="part-time"
                name="employment"
                value="part-time"
                onChange={handleChange}
                checked={formData.employment === "part-time"}
              />
              <label htmlFor="unemployed">Part-time</label>
              <br />
              <input
                type="radio"
                id="full-time"
                name="employment"
                value="full-time"
                onChange={handleChange}
                checked={formData.employment === "full-time"}
              />
              <label htmlFor="unemployed">Full-time</label>
              <br />
            </fieldset>
          </div>

          <label className="fs-5 fw-semi-bold " style={{ marginLeft: "53px" }}>
            What is your favourite color
          </label>
          <div className="form-floating mb-4 w-75 mx-auto">
            <br />
            <select
              id="favColor"
              value={formData.favColor}
              onChange={handleChange}
              name="favColor"
            >
              <option value="">-- Choose --</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="d-block mx-auto btn btn-primary mt-5 btn-lg w-75"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
