import React from "react";
import "./Headercss.css";
const PageHeader = () => {
  const user = {
    name: "Anuj Gosalia -  CEO Terribly Tiny Tales ",
    profileImage:
      "https://flatlogic.github.io/light-blue-vue-admin/img/a5.84f014f0.jpg"
  };

  return (
    <header>
      <div className="top">
        <h1 style={{ display: "inline-block" }}>STORIES</h1>
        <button className="courses-button">Courses</button>
      </div>
      <br></br>
      <div className="down">
        <img
          src={user.profileImage}
          alt={user.name}
          className="profile-image"
        />
        <br></br>
        <span className="user-name">{user.name}</span>
      </div>
    </header>
  );
};

export default PageHeader;
