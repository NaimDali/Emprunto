import React from "react";

export default function SignUp() {
  return (
    <div class="container mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-4">Create your own profile</h1>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
        </div>

        <form class="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Surname
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Confirm Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="confirmemail"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="pass"></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirmpass"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
