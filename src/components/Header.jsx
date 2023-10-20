import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to={`/`} style={{ textDecoration: "none" }} className="logo">
        Zk-Finance
      </Link>
      <ul className="desktop-menu">
        <li className="zoom">
          <Link to={`/generate`} style={{ textDecoration: "none" }}>
            Generate
          </Link>
        </li>
        <li className="zoom">
          <Link to={`/verify`} style={{ textDecoration: "none" }}>
            Verify
          </Link>
        </li>
        <li className="zoom">
          <button
            className="button "
            style={{ padding: "5px 5px", fontSize: "15px" }}
          >
            Connect Wallet
          </button>
        </li>
      </ul>
      <ul className="menu-links menu-collapsed">
        <li>
          <a href="#home">Generate</a>
        </li>
        <li>
          <a href="#about">Verify</a>
        </li>
        <li>
          <a href="#about">Connect</a>
        </li>
      </ul>
      <div className="mobile-menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
