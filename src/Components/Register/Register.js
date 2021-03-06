import React from "react";
import "./Register.css";
import red from "./img/Red.png";
import Nairobi from "./img/Nairobi.png";
import Logo from "./img/logo4.png";

function Register() {
  return (
    <div className="ABC" id="register">

    
      <div className="heading">
        <p>Did you Register?</p>
        <button
          id="button"
          onClick={e => {
            window.location.href = "https://bit.ly/hack-o-heist";
          }}>Click To Register{" "}
          <svg
            style={{ marginLeft: "10px" }}
            width="20"
            height="15"
            viewBox="0 0 39 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 13.7551H37M37 13.7551L26.6827 1M37 13.7551L28.1058 26"
              stroke="white"
              stroke-width="3"/>
          </svg>
        </button>
      </div>

      <img className="Nairobi" src={Nairobi} alt="" />

      <img className="wave" src={red} alt="" />

      <div className="footerContent">
        <div className="left">
          <img className="RClogo" src={Logo} alt="" />
          <p className="Text">
            “If you’re struggling to “think outside the box” remember the box is
            self-imposed. Who says it has to be a box? Why not a bowl of petunias?”
            ― Ryan Lilly
          </p>
        </div>
        <div className="right">
          <h3 className="Contact">Contact Us</h3>
          <ul>
            <li>Shivam Tyagi- 8102323657</li>
            <li>Mohd Zubair - 8102499134</li>
            <li>Pawan Singh - 8707880499</li>
            <li>Shashwat Awasthi - 7394888169</li>
            <li>Shivam Kumar - 6203886702</li>
          </ul>
        </div>
      </div>

      

      
    </div>
  );
}

export default Register;
