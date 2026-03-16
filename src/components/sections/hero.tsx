"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";


export default function Hero() {
  return (
    <section className="pt-32 pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            Automatize tarefas.
            <span className="text-blue-500"> Escale resultados.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Conecte suas ferramentas e crie automações poderosas sem esforço.
          </p>

          <motion.button
            whileHover={{
                scale: 1.07,
                y: -2,
            }}
            whileTap={{
                scale: 0.96,
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 18,
            }}
            className="
                mt-14
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
        </motion.div>
      </Container>
    </section>
  );
}