import React, { useState, useEffect } from "react";
import "./Home.css";
import myPhoto from "../assets/myPhoto.jpeg";
import { useNavigate } from "react-router-dom";

const roles = ["Frontend Developer", "Creative UI Designer", "Backend Developer"];

function Home() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          // Pause at full word, then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="home-container">
      <div className="photo-wrapper">
        <div className="photo-ring-outer"></div>
        <div className="photo-ring-inner"></div>
        <img src={myPhoto} alt="Laxminarayan Rajbhar" className="home-photo" />
      </div>
      <h1 className="home-title">Hello, I'm Laxminarayan Rajbhar</h1>
      <p className="home-subtitle">
        <span className="role-animated">{displayedText}</span>
        <span className="cursor">|</span>
      </p>
      <button className="home-button" onClick={() => navigate("/projects")}>
        View My Work
      </button>
    </div>
  );
}

export default Home;