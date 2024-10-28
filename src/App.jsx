import React from "react";
import CardComp from "./Component/CardComp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <div>
        <CardComp />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
