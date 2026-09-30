import { ThemeProvider } from "./context/ThemeContext";
import ThemedContent from "./Components/ThemedContent";
import CharacterCounter from "./Components/CharacterCounter";

function App() {
  return (
    <ThemeProvider>
      <ThemedContent />

      <CharacterCounter />
    </ThemeProvider>
  );
}

export default App;