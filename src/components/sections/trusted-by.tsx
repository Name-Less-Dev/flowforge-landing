"use client";

import { motion } from "framer-motion";

const companies = [
  "NovaTech",
  "CloudForge",
  "FlowSync",
  "DataPulse",
  "HyperLoop",
  "Zenith Labs",
];

export default function TrustedBy() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-widest text-foreground/50">
          Confiado por equipes inovadoras
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                font-semibold
                text-lg
                text-foreground/40
                select-none
                cursor-default
              "
            >
              {company}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}