import React from "react";
import "./Home.css";
import myPhoto from "../assets/myPhoto.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src={myPhoto} alt="Laxminarayan Rajbhar" className="home-photo" />
      <h1 className="home-title">Hello, I'm Laxminarayan Rajbhar</h1>
      <p className="home-subtitle">Frontend Developer | Creative UI Designer</p>
      <button 
        className="home-button" 
        onClick={() => navigate("/projects")}
      >
        View My Work
      </button>
    </div>
  );
}

export default Home;
