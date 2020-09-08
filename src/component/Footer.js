import React from "react";

const Footer = () => {
  return (
    <p style={FooterStyle}>
      Milestone for Residents
      <br />
      Copyright SNU-ENTian All rights reserved
    </p>
  );
};

const FooterStyle = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "22px",
  textAlign: "center",
  opacity: "0.6",
  margin: "auto auto 40px auto",
};
export default Footer;
