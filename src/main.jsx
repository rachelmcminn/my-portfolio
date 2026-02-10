import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntuneConnect } from "./projects/intuneConnect.jsx";
import { Gremlinizer } from "./projects/gremlinizer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/intune-connect" element={<IntuneConnect />} />
        <Route path="/projects/gremlinizer" element={<Gremlinizer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

