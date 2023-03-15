import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(<App />);
