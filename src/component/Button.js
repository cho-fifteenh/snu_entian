import React, { Component } from "react";

class Button extends Component {
  state = {
    buttonName: true,
    button: true,
  };

  handleClick = (e) => {
    this.setState({
      buttonName: !this.state.buttonName,
      button: !this.state.button,
    });
  };
  render() {
    return (
      <button
        className={this.state.button ? "main_btn_go" : "main_btn_back"}
        onClick={this.handleClick}
      >
        <span className="main_btn_title">
          {this.state.buttonName ? "Go" : "Back"}
        </span>
        <img
          className="main_btn_img"
          src={require("../assets/images/all/go_icon.png")}
          alt="화살표"
        />
      </button>
    );
  }
}

export default Button;
