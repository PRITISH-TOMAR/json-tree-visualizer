import { useTheme } from "./store/theme/handleTheme";
import Header from "./components/titleBar/Header";
import JsonEngine from "./components/json-engine/JsonEngine";


function App() {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <Header />
      <JsonEngine />
    </div>
  );
}

export default App;
