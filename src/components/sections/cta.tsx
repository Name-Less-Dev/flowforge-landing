"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-20 -z-10 pointer-events-none flex justify-center">
        <div className="w-[400px] h-[400px] bg-brand/20 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Automatize seu trabalho.
          <br />
          <span className="text-brand">
            Foque no que realmente importa.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-foreground/70"
        >
          Crie fluxos inteligentes, conecte suas ferramentas e elimine tarefas
          repetitivas em minutos.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            className="
              px-8 py-4
              rounded-xl
              bg-brand
              text-white
              font-semibold
              shadow-lg
              transition
              hover:scale-105
              hover:shadow-xl
            "
          >
            Começar gratuitamente
          </button>

          <button
            className="
              px-8 py-4
              rounded-xl
              border border-black/10 dark:border-white/20
              hover:bg-black/5 dark:hover:bg-white/10
              transition
            "
          >
            Ver demonstração
          </button>
        </motion.div>

      </div>
    </section>
  );
}