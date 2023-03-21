import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { Provider } from "./context/theme";
const root = createRoot(document.getElementById("root") as HTMLDivElement);
function Index() {
  return (
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  );
}
root.render(<Index />);
