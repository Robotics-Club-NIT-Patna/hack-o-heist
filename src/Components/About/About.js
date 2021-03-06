import "./About.css";
import React, { useEffect } from "react";
import layer from "./layer.png";
import pic from "./Money-Heist-Mask-PNG-Image 3.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="back">
      <img class="layer" src={layer} alt="layer" />
      <div className="containerAbout">
        <img className="maskPhoto" src={pic} alt="" />
        <div
          data-aos="fade-up-left"
          data-aos-offset="120"
          data-aos-anchor-placement="top"
        >
          <h2 className="headingAbout">ABOUT US</h2>
          <div className="material">
            Hack-O-Heist is a thrilling and action-packed hackathon, organised
            by the Robotics Club NIT Patna. Hack-O-Heist is scheduled to be a 36
            hours long event where participants have to choose one of the
            provided themes and build a hack for the same. Ready to take this
            challenge of 36-hours of hacking? Look upon the themes , come up
            with hardware or software based solutions and showcase your
            innovation skills. Read our rulebook{" "}
            <a
              href="https://drive.google.com/file/d/1JIFbI7p8YP-VV4qhCuCppCFt11_ETILl/view?usp=sharing"
              target="_blank"
              style={{ color: "rgba(177, 0, 0, 1)" }}
              rel="noreferrer"
            >
              here.
            </a>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default About;
