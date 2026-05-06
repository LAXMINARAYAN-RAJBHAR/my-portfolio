import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  const [exited, setExited] = useState(false);

  if (exited) {
    return (
      <div className="exit-screen">
        <p>You have exited the app.</p>
      </div>
    );
  }

  return (
    <div className="layout-wrapper">

      {/* Navbar at top */}
      <Navbar />

      {/* Page content */}
      <main className="layout-content">
        <Outlet />
      </main>

      {/* Close button at bottom */}
      <div className="close-bar">
        <button className="close-btn" onClick={() => setExited(true)}>
          ✕ Exit App
        </button>
      </div>

    </div>
  );
}

export default Layout;