import { useState } from "react";
import "./App.css";
import { Layout } from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Generate } from "./components/Generate";
import { Verify } from "./components/Verify";

import { Web3ContextProvider } from "./context/context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/verify" element={<Verify />}></Route>
      </Route>
    )
  );

  return (
    <>
      <Web3ContextProvider>
        <RouterProvider router={router} />
      </Web3ContextProvider>
    </>
  );
}

export default App;
