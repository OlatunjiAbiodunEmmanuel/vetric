"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center">
      <Sun className={`h-5 w-5 ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`} />
      <label className="relative inline-flex items-center mx-3 cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setTheme(isDarkMode ? "light" : "dark")}
          className="sr-only"
        />
        <div className="w-12 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer-focus:ring-2 peer-focus:ring-green-400 dark:peer-focus:ring-green-600 transition-all">
          <div
            className={`w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform ${
              isDarkMode ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </div>
      </label>
      <Moon className={`h-5 w-5 ${isDarkMode ? "text-blue-500" : "text-gray-400"}`} />
    </div>
  );
}
