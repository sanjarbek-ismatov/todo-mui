import { AuthLeftSide, AuthRightSide } from "./components";
import { Box } from "@mui/material";
function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <AuthLeftSide />
      <AuthRightSide />
    </Box>
  );
}

export default App;
