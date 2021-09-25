import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from 'react-icons/gr'

function Footer() {
  return (
    <footer>
      <h3 className="font_1">Thanks for visiting!</h3>

      <div className="contact_links">
        <a
          className="github_link link"
          href="https://github.com/Devang47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="twitter_link link"
          href="https://twitter.com/DevangSaklani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a className="twitter_link link" href="mailto:devangsaklani@gmail.com">
          <GrMail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
