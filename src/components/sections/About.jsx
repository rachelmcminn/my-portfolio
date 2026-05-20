import React from "react";
import headshot from "../../assets/img/headshot.jpg";
import Button from "../Button/Button.jsx";
import TechStackItem from "../TechStackItem.jsx";

export const About = () => {
  const TECH_STACK = [
    "React",
    "Vite",
    "Node.js",
    "Javascript ES6+",
    "Typescript",
    "Python",
  ];

  return (
    <section id="about" className="content-section">
      <h1 className="section-title">// about me</h1>

      <div className="about-me-content">
        <img src={headshot} alt="Rachel McMinn" className="headshot" />
        <div id="about-me-text">
          <p>
            I'm a front-end engineer that specializes in{" "}
            <b>building clean, scalable UI systems</b> and enhancing user &
            developer experiences. <br />
            <br />I received my engineering degree in{" "}
            <b>Creative Technology and Design</b> at the University of Colorado
            Boulder, and went on to work as a{" "}
            <b> Software Engineer at a tech consulting firm in Denver, </b>
            where I shipped production apps across web and mobile platforms and
            helped <b>bring design thinking</b> into every stage of the
            development process.
          </p>

          <div>
            Some technologies I've been working with lately:
            <ul className="about-tech-stack">
              {TECH_STACK.map((name) => (
                <TechStackItem key={name} title={name} />
              ))}
            </ul>
          </div>

          <p>
            {" "}
            Outside of work, I love hiking, cooking, reading, and playing video
            games (and sometimes <br />
            streaming them too!).
          </p>

          <a
            href="files/McMinn_Rachel_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "16px" }}
          >
            <Button>Current Resume</Button>
          </a>
          <a href="mailto:racminn@gmail.com" rel="noreferrer">
            <Button mode="outline">Say Hi </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
