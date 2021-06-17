import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Theat~Play 🎥
    </span>
  );
};

export default Header;
