import { ThemeProvider } from "./context/ThemeContext";
import ThemedContent from "./Components/ThemedContent";

function App() {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;