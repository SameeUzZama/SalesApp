import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="Anchor">
      <Link className="Anchor-2" to="/">
        Home
      </Link>
      <Link className="Anchor-2" to="/products">
        Products
      </Link>
      <Link className="Anchor-2" to="/Bikes">
        Bikes
      </Link>
      <Link className="Anchor-2" to="/watch">
        Watch
      </Link>
      <Link className="Anchor-2" to="/ComplicatedCount">
        Complicated Counter
      </Link>
      <br />
      <Link className="Anchor-2" to="/ReduCounter">
        Reducer
      </Link>
      <Link className="Anchor-2" to="/CompCount">
        CompCountPractice
      </Link>
      <Link className="Anchor-2" to="/backclr">
        change background
      </Link>
      <Link className="Anchor-2" to="/redux">
        Check Redux
      </Link>
      <Link className="Anchor-2" to="/reffocus">
        Ref Focus
      </Link>
      <Link className="Anchor-2" to="/timer">
        Class Timer
      </Link>
      <Link className="Anchor-2" to="/funtimer">
        Fun Timer
      </Link>
      {/* <link className="Anchor" to="/address">
        Address
      </link> */}
    </div>
  );
};
