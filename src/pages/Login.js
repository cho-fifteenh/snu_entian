import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import "../style/style.css";

class Login extends Component {
  render() {
    return (
      <div className="wra">
        <div className="container">
          <div className="flex_box">
            <form className="input_form">
              <img
                src={require("../assets/images/all/sub_logo.png")} //이미지넣기
                style={{ width: "260px", margin: "auto auto 145px" }}
                alt="snu entian logo"
              />
              <p className="input_title">SIGN IN</p>
              <input placeholder="010-0000-0000" className="login_input" />
              <Link to="/main">
                <button className="login_btn">Go</button>
              </Link>
            </form>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
