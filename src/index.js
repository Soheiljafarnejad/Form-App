import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";


const root = createRoot(document.getElementById("root"));
root.render(
  <SimpleBar style={{ maxHeight: "100vh" }}>
    <App />
  </SimpleBar>
);
