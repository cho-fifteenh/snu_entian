import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex_box">
        <Link to="/">
          <img
            src={require("../assets/images/all/sub_logo.png")} //이미지넣기
            style={{ width: "160px" }}
            alt="snu entian logo"
          />
        </Link>
        <div className="nav">
          <button>Home</button>
          <button>Otology</button>
          <button>Rhinology</button>
          <button>Head & Neck</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
