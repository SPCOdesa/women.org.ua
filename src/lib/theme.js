// Color palette configurations for easy theme switching
export const themes = {
  purple: {
    name: "Purple & Pink",
    colors: {
      primary: "#9333ea",
      primaryLight: "#f3e8ff",
      primaryDark: "#581c87",
      secondary: "#ec4899",
      accent: "#a855f7",
      border: "#e9d5ff",
      text: "#9333ea",
      textLight: "#e9d5ff",
      textDark: "#6b21a8",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
  blue: {
    name: "Blue & Cyan",
    colors: {
      primary: "#2563eb",
      primaryLight: "#eff6ff",
      primaryDark: "#1e3a8a",
      secondary: "#06b6d4",
      accent: "#3b82f6",
      border: "#dbeafe",
      text: "#2563eb",
      textLight: "#dbeafe",
      textDark: "#1e40af",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
  emerald: {
    name: "Emerald & Teal",
    colors: {
      primary: "#059669",
      primaryLight: "#f0fdf4",
      primaryDark: "#064e3b",
      secondary: "#14b8a6",
      accent: "#10b981",
      border: "#d1fae5",
      text: "#059669",
      textLight: "#d1fae5",
      textDark: "#065f46",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
  rose: {
    name: "Rose & Orange",
    colors: {
      primary: "#e11d48",
      primaryLight: "#ffe4e6",
      primaryDark: "#831843",
      secondary: "#f97316",
      accent: "#f43f5e",
      border: "#ffe4e6",
      text: "#e11d48",
      textLight: "#ffe4e6",
      textDark: "#be123c",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
  indigo: {
    name: "Indigo & Violet",
    colors: {
      primary: "#4f46e5",
      primaryLight: "#eef2ff",
      primaryDark: "#312e81",
      secondary: "#a78bfa",
      accent: "#6366f1",
      border: "#e0e7ff",
      text: "#4f46e5",
      textLight: "#e0e7ff",
      textDark: "#3730a3",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
  cream: {
    name: "Light Beige & Cream",
    colors: {
      primary: "#a68a64",
      primaryLight: "#f5f1ed",
      primaryDark: "#6b5d52",
      secondary: "#d4a574",
      accent: "#c9a876",
      border: "#e8dfd7",
      text: "#a68a64",
      textLight: "#e8dfd7",
      textDark: "#6b5d52",
      white: "#ffffff",
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray600: "#4b5563",
      gray700: "#374151",
      gray900: "#111827",
    },
  },
};

export const defaultTheme = "indigo";

export function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) {
    console.error("Theme not found:", themeName);
    return;
  }

  console.log("Applying theme:", themeName, theme);

  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
    console.log(`Set --color-${key} to ${value}`);
  });
}
