import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "maplibre-gl/dist/maplibre-gl.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
