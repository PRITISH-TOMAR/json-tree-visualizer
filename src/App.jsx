import { useTheme } from "./store/theme/handleTheme";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <ThemeSwitcher />

      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-semibold mb-4">JSON Viewer</h1>
        <p className="text-text-soft">Current theme: {theme}</p>
      </div>
    </div>
  );
}

export default App;
