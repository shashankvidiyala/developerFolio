import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("This website is hosted on AWS S3 bucket")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Template forked from{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
          {" "}
          and modified by me
        </p>
      </div>
    </Fade>
  );
}
