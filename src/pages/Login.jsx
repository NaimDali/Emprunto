import axios from "axios";
import React, { useState } from "react";
import AuthenticationContext from "../context/AuthenticationContext";
import { setAuthToken } from "../util/setAuthToken";

export default function Login() {
  const [user, setUser] = useState({});
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const onIdentifierChange = (event) => {
    setCredentials((prev) => {
      return { identifier: event.target.value, password: prev.password };
    });
  };
  const onPasswordChange = (event) => {
    setCredentials((prev) => {
      return { password: event.target.value, identifier: prev.identifier };
    });
  };
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/auth/login", credentials)
      .then((response) => {
        if (response.status !== 201) {
          setMessage("Veuillez vérifier vos identifiants.");
          return;
        }
        const token = response.data.jwt;

        //set JWT token to local
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(parseJwt(token)));

        //set token to axios common header
        setAuthToken(token);
        setUser(parseJwt(token));
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="container  mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-md-2"></div>

        <div class="card col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <h1>Login to your account</h1>
          {message}
          <form onSubmit={onSubmit}>
            <div class="mb-3">
              <label for="identifier" class="form-label">
                Email address or username
              </label>
              <input
                type="text"
                class="form-control"
                id="identifier"
                aria-describedby="emailHelp"
                value={credentials.identifier}
                onChange={onIdentifierChange}
              ></input>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={credentials.password}
                onChange={onPasswordChange}
              ></input>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>
              <label class="form-check-label" for="exampleCheck1">
                Keep me signed in
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <div>
              Does not have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
