import React from "react";
import myImg from "../../assets/myImg.jpg";
import themeIcon from "../../assets/sun.svg";
import linkedIn from "../../assets/linkedin-light.svg";
import gitHub from "../../assets/gitHub-light.svg";
import cv from '../../assets/cv.pdf'

const Hero = () => {
  return (
    <section id="hero">
      <div className="colorModelContainer">
        <img
          className="hero"
          src={myImg}
          alt="Profile Picture of Sangram Wable"
        />
        <img className="colorMode" src={themeIcon} alt="Color mode icon" />
      </div>
      <div>
        <h1>
          Sangram
          <br />
          Wable{" "}
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/sangram-wable-986705220/"
            target="_blank"
          ></a>
          <img src={linkedIn} alt="LinkedIn" />
          <a href="https://github.com/Sangram4213" target="_blank"></a>
          <img src={gitHub} alt="Github" />
        </span>
        <p>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
<a href={cv} download>
    <button className="hover">Resume</button>
</a>
      </div>
    </section>
  );
};

export default Hero;
