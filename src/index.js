// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrimeReactProvider } from 'primereact/api';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <PrimeReactProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PrimeReactProvider>
);
