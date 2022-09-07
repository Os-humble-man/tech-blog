import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaDev,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-bar container">
        <div className="newsletter-section">
          <h5>Newsletter</h5>
          <p>abonner vous a la news letter pour ne rien rater</p>
          <input type="email" name="" id="" placeholder="votre email..."/>
          <button type="submit">S'abonner</button>
        </div>
        <div className="link-menu">
          <a href="">Home</a>
          <a href="">Categorie</a>
          <a href="">About us</a>
        </div>
        <div className="social-network">
          <h3>Suivez nous sur</h3>
          <span>
          <Link to={{ pathname: "https://github.com/Os-humble-man" }}>
            <FaGithub className="icon" />
          </Link>
          </span>
          <span>
          <Link to={{ pathname: "https://dev.to/oshumbleman" }}>
            <FaDev className="icon" />
          </Link>
          </span>
          <span>
          <Link to={{ path: "https://web.facebook.com/best.kanangila" }}>
            <FaFacebook className="icon" />
          </Link>
          </span>
          <span>
          <Link
            to={{
              path: "https://www.youtube.com/channel/UCuuqhuc6OnR4bdJQvDst3mA",
            }} target="_blank"
          >
            <FaYoutube className="icon" />
          </Link>
          </span>
          <span>
          <Link to={{ pathname: "https://www.linkedin.com" }} target="_blank">
            <FaLinkedin className="icon" />
          </Link>
          </span>
        </div>
        <div className="reserved">
          <p>© 2020 TechBlog . Tout droit reserver</p>
        </div>
      </footer>
    </div>
  );
}
