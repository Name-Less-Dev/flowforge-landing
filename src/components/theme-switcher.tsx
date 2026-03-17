"use client";

import { useState } from "react";
import { toggleTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  // ✅ lê direto do DOM na inicialização
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });

  function handleToggle() {
    toggleTheme();
    setDark((prev) => !prev);
  }

  return (
    <motion.button
      onClick={handleToggle}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        flex items-center justify-center
        backdrop-blur-xl
        bg-background/70
        border border-foreground/10
        shadow-xl
        transition-all duration-300
        hover:scale-110
      "
    >
      <motion.div
        animate={{
          rotate: dark ? 0 : 180,
          scale: dark ? 1 : 0.85,
        }}
        transition={{ duration: 0.35 }}
      >
        {dark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.div>
    </motion.button>
  );
}