import React from "react";
import "./Footer.css";

const thisYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id="footerbar">Coded by Jordy Veenstra - {thisYear}</footer>
  ) 
};

export default Footer;
