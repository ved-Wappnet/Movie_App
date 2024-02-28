
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  themeMode: "dark",
  toggleTheme: () => {},
});

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");

  useEffect(() => {
    document.body.className =
      themeMode === "dark" ? "bg-gray-800" : "bg-gray-300";
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
