import React, { Component } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import List from "../component/List";

class Main extends Component {
  render() {
    return (
      <div className="wra">
        <div className="container">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
