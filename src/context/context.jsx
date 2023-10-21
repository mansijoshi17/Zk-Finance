import React, { useState, createContext, useEffect, useCallback } from "react";

import { ethers, Contract } from "ethers";

export const Web3Context = createContext(undefined);

export const Web3ContextProvider = (props) => {
  const [address, setAddress] = useState("");

  // useEffect(() => {
  //   connectWallet();
  // }, []);

  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install the Metamask Extension!");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAddress(accounts[0]);
    } catch (err) {
      console.log(err);
      if (err.code === 4902) {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          setAddress(accounts[0]);
        } catch (err) {
          alert(err.message);
        }
      }
    }
  };

  return (
    <Web3Context.Provider
      value={{
        connectWallet,

        address,
      }}
      {...props}
    >
      {props.children}
    </Web3Context.Provider>
  );
};
