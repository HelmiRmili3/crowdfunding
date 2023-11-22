import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import RoutesComponent from "./components/routes";
function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}
export default App;
