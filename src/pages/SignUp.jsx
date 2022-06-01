import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    location: "",
    password: "",
    bio: "",
    sourceimg: "",
  });
  const [confirmState, setConfirmState] = useState({ email: "", password: "" });
  const [disabledState, setDisabledState] = useState(true);
  const [message, setMessage] = useState({
    passMessage: "",
    emailMessage: "",
    finishMessage: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const onConfirmEmailChange = (event) => {
    if (!event.target.value) setDisabledState(true);
    setConfirmState({ ...confirmState, email: event.target.value });
    if (formState.email === event.target.value) {
      setDisabledState(false);
      setMessage({ ...message, emailMessage: "" });
    } else {
      setDisabledState(true);
      setMessage({
        ...message,
        emailMessage: "Veuillez revérifier votre e-mail.",
      });
    }
  };
  const onConfirmPasswordChange = (event) => {
    setConfirmState({ ...confirmState, password: event.target.value });
    if (formState.password === event.target.value) {
      setDisabledState(false);
      setMessage({
        ...message,
        passMessage: "",
      });
    } else {
      console.log(formState.password, event.target.value);
      setDisabledState(true);
      setMessage({
        ...message,
        passMessage: "Veuillez revérifier votre mot de passe.",
      });
    }
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      formState
    );
    console.log(response);
    if (response.status === 201) window.location.href = "/login";
    else
      setMessage({
        ...message,
        finishMessage: "Création de compte échoué, veuillez réessayer.",
      });
  };

  return (
    <div class="container mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <h1 class="mb-4">Créer votre compte personnel:</h1>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
        </div>

        <form
          class="col-lg-7 wow fadeInUp"
          data-wow-delay="0.3s"
          onSubmit={submitHandler}
        >
          {message.finishMessage && <h1>{message.finishMessage}</h1>}
          {message.emailMessage && <h1>{message.emailMessage}</h1>}
          {message.passMessage && <h1>{message.passMessage}</h1>}
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Nom:
            </label>
            <input
              type="text"
              class="form-control"
              name="lastname"
              aria-describedby="emailHelp"
              value={formState.lastname}
              onChange={onChange}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Prénom:
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="firstname"
              onChange={onChange}
              value={formState.firstname}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username:
            </label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              name="username"
              onChange={onChange}
              value={formState.username}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Biographie:
            </label>
            <input
              type="text"
              class="form-control"
              name="bio"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={formState.bio}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Adresse mail:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              onChange={onChange}
              value={formState.email}
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" class="form-text">
              On ne partagera jamais votre e-mail avec qui que ce soit.
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Confirmer votre adresse mail:
            </label>
            <input
              type="email"
              class="form-control"
              id="confirmemail"
              name="email"
              aria-describedby="emailHelp"
              onChange={onConfirmEmailChange}
              value={confirmState.email}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Mot de passe:
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="pass"
              onChange={onChange}
              value={formState.password}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Confirmer votre mot de passe:
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="confirmpass"
              onChange={onConfirmPasswordChange}
              value={confirmState.password}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Localisation:
            </label>
            <input
              type="text"
              class="form-control"
              name="location"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={formState.location}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              source image:
            </label>
            <input
              type="text"
              class="form-control"
              name="sourceimg"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={formState.location}
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            disabled={disabledState}
          >
            S'inscrire.
          </button>
        </form>
      </div>
    </div>
  );
}
