import { THEMES } from "../../variables/variables";
import { useTheme } from "../store/theme/handleTheme";
import { ThemeIcons } from "../assets/icons/themeIcons";

export default function ThemeSwitcher() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {Object.entries(THEMES).map(([key, value]) => (
        <button
          key={key}
          value={value}
          onClick={(e) =>
            handleThemeChange(value)
          }
          className={`p-2 rounded-lg border transition-all duration-300 
            ${
              theme === value
                ? "bg-gray-900 text-white border-transparent scale-110 shadow-md"
                : "color-bg-soft text-text border border-text hover:scale-105 hover:cursor-pointer"
            }`}
          title={key.charAt(0) + key.slice(1).toLowerCase()}
        >
          {ThemeIcons[value] || key.charAt(0)}
        </button>
      ))}
    </div>
  );
}
