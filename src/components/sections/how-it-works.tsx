"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Conecte seus apps",
    description:
      "Integre ferramentas como Gmail, Slack e Notion em poucos cliques.",
  },
  {
    title: "Crie fluxos inteligentes",
    description:
      "Monte automações visuais sem código usando nosso editor intuitivo.",
  },
  {
    title: "Automatize tudo",
    description:
      "Deixe tarefas repetitivas rodando automaticamente 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden">
        <div
        className="
            pointer-events-none
            absolute inset-0
            -z-10
        "
        >
        <div
            className="
            absolute
            left-1/2 top-1/2
            w-[500px] h-[500px]
            -translate-x-1/2 -translate-y-1/2
            bg-brand/10
            rounded-full
            blur-3xl
            opacity-50
            "
        />
        </div>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Como funciona
          </h2>

          <p className="mt-4 text-foreground/70">
            Automatize processos em três passos simples.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* linha vertical */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`
                  flex flex-col md:flex-row items-center gap-8
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Conteúdo */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-foreground/70">
                    {step.description}
                  </p>
                </div>

                {/* Ponto da timeline */}
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}