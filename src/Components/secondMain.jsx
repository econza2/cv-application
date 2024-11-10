import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./CV";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CV />
  </StrictMode>
);
