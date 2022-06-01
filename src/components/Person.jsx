import React from "react";

export default function Person({ user }) {
  const uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="col-6 animated fadeIn" key={user.id}>
        <div class="my-auto">
          <h1 class="mb-0">
            {uppercase(user.firstname) + " " + uppercase(user.lastname)}
          </h1>

          <p class="mb-1">{user.bio}</p>

          <div class="resume-section p-3 p-lg-5 d-flex flex-column">
            <div class="row my-auto" id="contact">
              <div class="col-md-4 col-sm-12 mt-5">
                <div class="contact-cont2">
                  <div class="contact-add contact-box-desc">
                    <h3>
                      <i class="fa fa-map-marker cl-atlantis fa-2x"></i>
                      Addresse
                    </h3>
                    <p>{user.location}</p>
                  </div>
                  <div class="contact-phone contact-side-desc contact-box-desc">
                    <h3>
                      <i class="fa fa-phone cl-atlantis fa-2x"></i> Email
                    </h3>
                    <address class="address-details-f">
                      <a href={"mailto:" + user.email} class="">
                        {user.email}
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 animated fadeIn">
        {<img src={user.sourceimg} class="img-fluid m-20" width="400px"></img>}
      </div>
    </div>
  );
}
