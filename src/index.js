import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WalletProvider } from "./contexts/walletContext";
import { AuthProvider } from "./contexts/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </WalletProvider>
  </React.StrictMode>
);
reportWebVitals();
