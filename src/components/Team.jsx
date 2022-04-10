import React from "react";
import Member from "./member";

export default function Team() {
  const MEMBERS = [
    {
      imgsource: "img/hedi.jpg",
      name: "Mohamed Hedi Khemiri",
      fb: "https://www.facebook.com/hedi.khe/",
      insta: "https://www.instagram.com/hedikhemiri/",
    },
    {
      imgsource: "img/naim.jpg",
      name: "Naim Dali Hassen",
      fb: "https://www.facebook.com/naim.dali.54",
      insta: "https://www.instagram.com/naim.dali/",
    },
  ];
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 class="section-title">Team Members</h4>
          </div>
          <div class="row g-0 team-items">
            {MEMBERS.map((member) => (
              <Member
                imgsource={member.imgsource}
                name={member.name}
                fb={member.fb}
                insta={member.insta}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
