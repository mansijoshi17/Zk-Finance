import React from "react";
import { Link } from "react-router-dom";
import { Web3Context } from "../context/context";
import { shortAddress } from "../config";

export const Header = () => {
  const web3Context = React.useContext(Web3Context);
  const { address, connectWallet } = web3Context;

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
        <li>
          {address ? (
            <button
              className="button "
              style={{ padding: "5px 5px", fontSize: "15px" }}
            >
              {shortAddress(address)}
            </button>
          ) : (
            <button
              className="button "
              style={{ padding: "5px 5px", fontSize: "15px" }}
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
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
