import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
const root = createRoot(document.getElementById("root") as HTMLDivElement);
function Index() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}
root.render(<Index />);
