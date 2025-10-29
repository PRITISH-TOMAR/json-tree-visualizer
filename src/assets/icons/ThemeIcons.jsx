import { Sun, Moon, Cloud, Sunset } from "lucide-react";
import { CheckCheck,  X} from "lucide-react";

export const ThemeIcons = {
  light: <Sun className="w-4 h-4" />,
  dark: <Moon className="w-4 h-4" />,
  ocean: <Cloud className="w-4 h-4" />,
  sunset: <Sunset className="w-4 h-4" />,
};

export const ValidIcons = {
correct: <CheckCheck className="w-4 h-4 text-green-400" />,
incorrect: <X className="w-4 h-4 text-red-400" />,
}