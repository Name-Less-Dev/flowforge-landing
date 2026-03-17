"use client";

import Container from "./container";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-md
        bg-background/70
        border-b border-black/10 dark:border-white/10
      "
    >
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition"
          >
            FlowForge
          </a>

          {/* Links */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">

            <a href="#features" className="hover:text-brand transition">
              Recursos
            </a>

            <a href="#how-it-works" className="hover:text-brand transition">
              Como funciona
            </a>

            <a href="#proof" className="hover:text-brand transition">
              Resultados
            </a>

            <a href="#pricing" className="hover:text-brand transition">
              Preços
            </a>

            <a href="#testimonials" className="hover:text-brand transition">
              Depoimentos
            </a>

          </nav>

          {/* CTA */}
          <a
            href="#cta"
            className="
              bg-brand
              text-brand-foreground
              px-4 py-2
              rounded-lg
              hover:opacity-90
              transition
              font-medium
            "
          >
            Começar
          </a>

        </div>
      </Container>
    </motion.header>
  );
}