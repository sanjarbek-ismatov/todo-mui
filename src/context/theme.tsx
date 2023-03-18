import { createContext, FC, ReactNode, useContext } from "react";
import useTheme from "../hooks/useTheme";
interface Theme {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext({} as Theme);
export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
