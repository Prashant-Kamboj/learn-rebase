import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { css } from "../styled-system/css/css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className={css({
        background: "#e0e0e0",
        height: "100vh",
        width: "100%",
      })}
    >
      <App />
      <div>fix branch changes</div>
    </div>
  </StrictMode>
);
