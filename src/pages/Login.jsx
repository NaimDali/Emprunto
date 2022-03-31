import React from "react";

export default function Login() {
  return (
    <div class="container  mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-md-2"></div>

        <div class="card col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <h1>Login to your account</h1>

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
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
              Does not have an account? <a href="#">sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
