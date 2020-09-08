import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

class Login extends Component {
  render() {
    return (
      <div className="wra">
        <div className="container">
          <div style={FlexBox}>
            <form style={InputForm}>
              <img
                src={require("../assets/images/all/sub_logo.png")} //이미지넣기
                style={{ width: "260px", margin: "auto auto 145px" }}
                alt="snu entian logo"
              />
              <p style={InputTitle}>SIGN IN</p>
              <input placeholder="010-0000-0000" style={InputStyle} />
              <Link to="/main">
                <button style={btnStyle}>Go</button>
              </Link>
            </form>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const InputTitle = {
  color: "#fff",
  fontSize: "24px",
  marginBottom: "44px",
  fontWeight: "bold",
};

const InputForm = {
  maxWidth: "360px",
  width: "100%",
  marginTop: "auto",
};
const InputStyle = {
  backgroundColor: "transparent",
  width: "100%",
  color: "#fff",
  fontSize: "18px",
  lineHeight: "21px",
  paddingBottom: "10px",
  border: "none",
  borderBottom: "1px solid #fff",
  marginBottom: "70px",
};

const btnStyle = {
  backgroundColor: "#246fff",
  color: "#fff",
  fontSize: "24px",
  border: "none",
  borderRadius: "20px",
  padding: "20px 0",
  width: "100%",
};
const FlexBox = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default Login;
