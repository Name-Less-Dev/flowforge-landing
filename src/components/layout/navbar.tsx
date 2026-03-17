"use client";

import Container from "./container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "features", label: "Recursos" },
  { id: "how-it-works", label: "Como funciona" },
  { id: "proof", label: "Resultados" },
  { id: "pricing", label: "Preços" },
  { id: "testimonials", label: "Depoimentos" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative transition
                  ${
                    active === link.id
                      ? "text-brand"
                      : "hover:text-brand"
                  }
                `}
              >
                {link.label}

                {/* underline animado */}
                {active === link.id && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand rounded-full"
                  />
                )}
              </a>
            ))}
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