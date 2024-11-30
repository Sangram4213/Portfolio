import React from "react";
import myImg from "../../assets/myImg.jpg";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';


const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme ==='light' ? sun : moon;
  const linkedInIcon = theme ==='light' ? linkedInLight : linkedInDark;
  const githubIcon = theme ==='light' ? githubLight : githubDark;


  return (
    <section id="hero">
      <div className="colorModelContainer">
        <img
          className="hero"
          src={myImg}
          alt="Profile Picture of Sangram Wable"
        />
        <img className="colorMode" src={themeIcon} alt="Color mode icon"  onClick={toggleTheme}/>
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
          <img src={linkedInIcon} alt="LinkedIn" />
          <a href="https://github.com/Sangram4213" target="_blank"></a>
          <img src={githubIcon} alt="Github" />
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
