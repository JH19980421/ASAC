import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <a href={props.url} id="nav_bar">
        <li className="NavBar">{props.name}</li>
      </a>
    </div>
  );
};

export default NavBar;
