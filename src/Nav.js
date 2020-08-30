import React, { useEffect } from "react";
import "./Nav.css";
function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://cdn.iconscout.com/icon/free/png-128/netflix-282224.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
