import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { DoctorProvider } from "./context/DoctorContext";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DoctorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DoctorProvider>
  </React.StrictMode>
);
