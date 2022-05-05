import React from "react";

export default function Person({ user }) {
  const uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="col-md-4 animated fadeIn" key={user.id}>
        <div class="my-auto">
          <img src={user.picture} class="img-fluid mb-3" alt=""></img>
          <h1 class="mb-0">
            {uppercase(user.name.first) + " " + uppercase(user.name.last)}
          </h1>
          <p className="card-text">
            {user.location.city + ", " + uppercase(user.location.state)}
            <br />
            <span className="phone">{user.phone}</span>
          </p>
          <h2>
            <span class="counter"> 84 </span>
            <span>%</span>
          </h2>
          <p class="mb-5">
            Sociable person, living in the capital Tunis, Tunisia.
          </p>

          <div class="resume-section p-3 p-lg-5 d-flex flex-column">
            <div class="row my-auto" id="contact">
              <div class="col-md-4 col-sm-12 mt-5">
                <div class="contact-cont2">
                  <div class="contact-add contact-box-desc">
                    <h3>
                      <i class="fa fa-map-marker cl-atlantis fa-2x"></i> Address
                    </h3>
                    <p>
                      {user.location.city +
                        ", " +
                        uppercase(user.location.state)}
                    </p>
                  </div>
                  <div class="contact-phone contact-side-desc contact-box-desc">
                    <h3>
                      <i class="fa fa-phone cl-atlantis fa-2x"></i> Phone
                    </h3>
                    <p>{user.phone}</p>
                  </div>
                  <div class="contact-mail contact-side-desc contact-box-desc">
                    <h3>
                      <i class="fa fa-envelope-o cl-atlantis fa-2x"></i> Email
                    </h3>
                    <address class="address-details-f">
                      Fax: 800 123 3456 Email:{" "}
                      <a href="mailto:info@themsbit.com" class="">
                        info@themsbit.com
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
