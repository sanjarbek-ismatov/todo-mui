import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import { IconButton } from "./components";
import { useThemeContext } from "./context/theme";
const App = () => {
  const { theme, toggleTheme } = useThemeContext();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Box
        sx={{
          background: "background.default",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <IconButton />
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
