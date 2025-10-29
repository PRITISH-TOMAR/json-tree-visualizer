import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between min-h-16 px-4 w-full gap-2">
      <h1 className="sm:text-3xl text-2xl font-bold">JSON Tree Visualizer</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
