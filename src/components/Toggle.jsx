import { useEffect, useState } from "react";

const themes = ["theme-1", "theme-2", "theme-3"];

export default function Toggle() {
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function handleToggle() {
    const current = themes.indexOf(theme);
    const next = (current + 1) % themes.length;
    setTheme(themes[next]);
  }

  return (
    <div className="flex items-center gap-4 ">
      <span className="text-sm font-semibold text-text">Theme</span>

      <button
        onClick={handleToggle}
        title="Toggle Theme"
        className="flex h-8 w-20 cursor-pointer items-center rounded-full bg-bg-secondary p-1 transition"
      >
        <div
          className={`h-6 w-6 rounded-full bg-key-accent transition-transform ${
            theme === "theme-1"
              ? "translate-x-0"
              : theme === "theme-2"
                ? "translate-x-6"
                : "translate-x-12"
          }`}
        />
      </button>
    </div>
  );
}
