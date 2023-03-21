import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import { IconButton } from "./components";
import { useThemeContext } from "./context/theme";
import Main from "./pages/Main";
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
          <Route path="/" element={true ? <Auth /> : <Main />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
