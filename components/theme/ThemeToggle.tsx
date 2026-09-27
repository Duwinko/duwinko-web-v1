"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_COOKIE,
  type ThemeName,
  resolveTheme,
} from "@/lib/theme";

function persistTheme(theme: ThemeName) {
  document.documentElement.setAttribute("data-theme", theme);
  document.cookie = `${THEME_COOKIE}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<ThemeName>(DARK_THEME);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(resolveTheme(document.documentElement.getAttribute("data-theme")));
    setReady(true);
  }, []);

  const isLight = theme === LIGHT_THEME;

  return (
    <button
      type="button"
      className={className ?? "btn btn-ghost btn-square btn-sm"}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      onClick={() => {
        const next = isLight ? DARK_THEME : LIGHT_THEME;
        persistTheme(next);
        setTheme(next);
      }}
    >
      {ready && isLight ? (
        <Moon className="h-4 w-4" aria-hidden />
      ) : (
        <Sun className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
