import React, { useCallback, useEffect, useState } from "react";

// Helpers
import { getCache, setCache } from "../utils/storage";

export interface ThemeContextInterface {
  theme: string;
  setTheme: Function;
}

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const getTheme = useCallback(() => getCache("theme"), []);
  const [theme, setTheme] = useState<string>(getTheme() || "");

  useEffect(() => {
    if (getTheme()) {
      setTheme(getTheme());
    } else {
      setTheme("dark");
    }
  }, [getTheme]);

  useEffect(() => {
    if (theme) {
      setCache("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
