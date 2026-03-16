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
          <span className="font-semibold text-lg">
            FlowForge
          </span>

          {/* Links */}
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="hover:text-brand transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-brand transition">
              Pricing
            </a>
            <a href="#contact" className="hover:text-brand transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <button className="bg-brand text-brand-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </Container>
    </motion.header>
  );
}