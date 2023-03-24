import { AuthLeftSide, AuthRightSide } from "./components";
import { Box } from "@mui/material";
function Auth() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <AuthLeftSide />
      <AuthRightSide />
    </Box>
  );
}

export default Auth;
