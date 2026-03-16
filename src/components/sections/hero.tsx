"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Container from "../layout/container";
import { FakePreview } from "@/components/product-preview/fake-preview";

export default function Hero() {
  /**
   * Mouse tracking (center based)
   */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth movement (important for premium feel)
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            willChange: "transform, opacity",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-[-250px]
            w-[900px] h-[900px]
            -translate-x-1/2
            rounded-full
            blur-3xl
            pointer-events-none
            bg-gradient-to-r
            from-blue-500/20
            via-indigo-500/20
            to-purple-500/20
          "
        />

        {/* subtle grain to remove banding */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            opacity-[0.015]
            mix-blend-overlay
            bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
            bg-[size:4px_4px]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Automatize tarefas.
              <span className="text-blue-500 block">
                Escale resultados.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-foreground/70">
              Conecte suas ferramentas e crie automações inteligentes
              que trabalham por você enquanto você foca no que importa.
            </p>

            <motion.button
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
              }}
              className="
                mt-10
                rounded-xl
                bg-brand
                px-7 py-3.5
                text-brand-foreground
                font-medium
                shadow-lg shadow-brand/25
                transition-shadow
                hover:shadow-xl hover:shadow-brand/40
                cursor-pointer
              "
            >
              Começar agora
            </motion.button>

            <p className="mt-6 text-sm text-foreground/50">
              Sem cartão de crédito • Setup em menos de 2 minutos
            </p>
          </motion.div>

          {/* RIGHT — PRODUCT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <FakePreview />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}