import React, { Component } from "react";
import "../style/style.css";

class ListBox extends Component {
  render() {
    return (
      <div className="list_box">
        <div className="list_flex_box">
          <div className="list_box_l">
            <p className="list_box_title">Otology</p>
            <p className="percent">56%</p>
          </div>
          <button className="list_btn">GO</button>
        </div>
        <p className="gray_bar">
          <span className="blue_bar"></span>
        </p>
      </div>
    );
  }
}

export default ListBox;
