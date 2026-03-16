"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type StatProps = {
  value: number;
  label: string;
  suffix?: string;
};

function Stat({ value, label, suffix = "" }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand">
        {count}
        {suffix}
      </div>

      <p className="mt-2 text-sm text-foreground/70">
        {label}
      </p>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="py-24 border-y border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Confiado por equipes modernas
          </h2>

          <p className="mt-4 text-foreground/70">
            Automação poderosa usada diariamente por empresas digitais.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Stat value={10000} suffix="+" label="Automações criadas" />
          <Stat value={99} suffix="%" label="Uptime médio" />
          <Stat value={500} suffix="+" label="Equipes ativas" />
        </div>

      </div>
    </section>
  );
}