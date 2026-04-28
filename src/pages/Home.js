import React from "react";
import "./Home.css";
import myPhoto from "../assets/myPhoto.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="photo-wrapper">
        <div className="photo-ring-outer"></div>
        <div className="photo-ring-inner"></div>
        <img src={myPhoto} alt="Laxminarayan Rajbhar" className="home-photo" />
      </div>
      <h1 className="home-title">Hello, I'm Laxminarayan Rajbhar</h1>
      <p className="home-subtitle">
        <span className="role-1">Frontend Developer</span>
        {" | "}
        <span className="role-2">Creative UI Designer</span>
        {" | "}
        <span className="role-3">Backend Developer</span>
      </p>
      <button className="home-button" onClick={() => navigate("/projects")}>
        View My Work
      </button>
    </div>
  );
}

export default Home;