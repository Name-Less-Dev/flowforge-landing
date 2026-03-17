"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Product Manager",
    company: "NovaTech",
    text: "Conseguimos automatizar processos que levavam horas em poucos minutos. A produtividade da equipe mudou completamente.",
  },
  {
    name: "Lucas Almeida",
    role: "Tech Lead",
    company: "CloudForge",
    text: "A interface é extremamente intuitiva. Mesmo pessoas não técnicas conseguem criar automações complexas.",
  },
  {
    name: "Renata Souza",
    role: "Operações",
    company: "FlowSync",
    text: "Reduzimos tarefas manuais e erros humanos drasticamente. Hoje tudo roda sozinho.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            O que nossos usuários dizem
          </h2>

          <p className="mt-4 text-foreground/70">
            Equipes modernas já estão economizando tempo com automação.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                p-7
                rounded-2xl
                border border-black/10 dark:border-white/10
                bg-white/60 dark:bg-white/5
                backdrop-blur
                shadow-sm
                hover:shadow-xl
                will-change-transform
              "
            >
              {/* Glow hover */}
              <motion.div
                className="
                  absolute inset-0 rounded-2xl
                  pointer-events-none
                  bg-gradient-to-br
                  from-brand/12
                  via-transparent
                  to-transparent
                "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />

              <p className="text-foreground/80 relative leading-relaxed">
                “{testimonial.text}”
              </p>

              <div className="mt-6 relative">
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                <p className="text-sm text-foreground/60">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}