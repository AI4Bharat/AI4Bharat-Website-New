import * as React from "react";
import GlobalData from "../../content/global/index.json";

const ThemeContext = React.createContext(GlobalData.theme);

export const useTheme = () => React.useContext(ThemeContext);

const updateRenderColorMode = (themeMode: "dark" | "light") => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(themeMode);
  }
};

const getUserSystemDarkMode = () => {
  if (typeof window !== "undefined") {
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "light";
    }
  }

  return "light";
};

export const Theme = ({ data, children }) => {
  const [systemDarkMode, setSystemDarkMode] = React.useState(
    getUserSystemDarkMode()
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const updateSystemMediaPreference = (event) => {
        setSystemDarkMode(event.matches ? "dark" : "light");
      };

      userMedia.addEventListener("change", updateSystemMediaPreference);

      return () =>
        userMedia.removeEventListener("change", updateSystemMediaPreference);
    }
    return;
  }, [setSystemDarkMode]);

  const {
    color = "blue",
    icon = "boxicon",
    font = "sans",
    darkMode = "system",
  } = data;

  React.useEffect(() => {
    updateRenderColorMode(
      darkMode === "system"
        ? systemDarkMode
        : darkMode !== ""
        ? darkMode
        : "light"
    );
  }, [systemDarkMode, darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        icon,
        font,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
