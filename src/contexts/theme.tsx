import React, { useState } from "react";

// Helpers
import { getCache } from "../utils/storage";

export interface ThemeContextInterface {
  isDarkThemeEnabled: boolean;
  setIsDarkThemeEnabled: Function;
}

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState<boolean>(
    getCache("isDarkThemeEnabled") || false
  );

  return (
    <ThemeContext.Provider
      value={{ isDarkThemeEnabled, setIsDarkThemeEnabled }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
