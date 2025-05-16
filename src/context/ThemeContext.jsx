import { createContext, useState, useEffect } from "react";

// Unda context kwa ajili ya theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Angalia kama kuna theme iliyohifadhiwa kwenye localStorage
  const storedTheme = localStorage.getItem("theme");
  
  // Angalia kama browser iko kwenye dark mode
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Weka theme ya awali kutoka localStorage au settings za browser
  const initialTheme = storedTheme ? storedTheme : prefersDark ? "dark" : "light";

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Hifadhi theme mpya kwenye localStorage
    localStorage.setItem("theme", theme);

    // Ongeza au ondoa "dark" kwenye `data-theme` ya HTML
    document.body.className = theme;
  }, [theme]);

  // Function ya kubadili theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
