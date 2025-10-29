import { useTheme } from "./store/theme/handleTheme";
import ThemeSwitcher from "./components/titleBar/ThemeSwitcher";
import Header from "./components/titleBar/Header";
function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Header/>

      
    </div>
  );
}

export default App;
