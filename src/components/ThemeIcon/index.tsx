import { Box, IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useThemeContext } from "../../context/theme";
const Index = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Box
      sx={{
        position: "absolute",
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <IconButton onClick={toggleTheme}>
        {theme === "light" ? <WbSunnyIcon /> : <ModeNightIcon />}
      </IconButton>
    </Box>
  );
};

export default Index;
