import { Button } from "@mui/material";
import React from "react";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Button onClick={toggleTheme} variant="contained">
        Toggle {theme}
      </Button>
    </div>
  );
};

export default App;
