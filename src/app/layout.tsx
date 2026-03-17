import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import ThemeSwitcher from "@/components/theme-switcher";

export const metadata: Metadata = {
  title: "FlowForge | Automação Inteligente",
  description: "Automatize processos e conecte suas ferramentas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem("theme");
                const dark = saved ? saved === "dark" : true;
                if (dark) document.documentElement.classList.add("dark");
              })();
            `,
          }}
        />

        <Navbar />
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}