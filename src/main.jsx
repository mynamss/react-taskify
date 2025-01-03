import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

import { StyledEngineProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <div className="container">
        <App />
      </div>
    </StyledEngineProvider>
  </StrictMode>
);
