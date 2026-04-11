import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400" />
        </a>
      </div>
      <p className="text-center mt-4 text-gray-400">© 2026 Laxminarayan Rajbhar. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
