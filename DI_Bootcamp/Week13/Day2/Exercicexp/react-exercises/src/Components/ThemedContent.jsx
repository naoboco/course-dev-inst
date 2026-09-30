import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

function ThemedContent() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    minHeight: "300px",
    padding: "30px",
    borderRadius: "12px"
  };

  return (
    <div style={styles}>
      <h2>Exercise 1 - Theme Switcher</h2>

      <p>
        Current theme: {theme}
      </p>

      <ThemeSwitcher />
    </div>
  );
}

export default ThemedContent;