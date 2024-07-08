import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">Made by Aditya Sharma</span>
      <div className="iconContainer">
        <a
          href="https://www.linkedin.com/in/aditya-sharma-49241a1b9/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://www.blogger.com/blog/posts/5514772169717726983?hl=en&tab=jj"
          target="__blank"
        >
          <i className="fas fa-blog"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
