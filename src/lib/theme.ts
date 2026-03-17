export function toggleTheme() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  const isDark = root.classList.contains("dark");
  const next = !isDark;

  root.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

export function initTheme() {
  if (typeof window === "undefined") return;

  const saved = localStorage.getItem("theme");

  // DARK DEFAULT
  const shouldUseDark = saved ? saved === "dark" : true;

  document.documentElement.classList.toggle("dark", shouldUseDark);
}