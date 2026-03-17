"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "R$0",
    description: "Ideal para começar a automatizar tarefas simples.",
    features: [
      "3 automações",
      "Integrações básicas",
      "Execução diária",
      "Suporte comunidade",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$49",
    description: "Para equipes que querem escalar produtividade.",
    features: [
      "Automações ilimitadas",
      "Integrações avançadas",
      "Execução em tempo real",
      "Analytics",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Automação em larga escala com suporte dedicado.",
    features: [
      "Infra dedicada",
      "Segurança avançada",
      "SLA personalizado",
      "Suporte 24/7",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section 
    id="pricing"
    className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Planos simples e transparentes
          </h2>
          <p className="mt-4 text-foreground/70">
            Escolha o plano ideal para o nível de automação da sua equipe.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`
                relative
                flex flex-col
                p-8
                rounded-2xl
                border
                backdrop-blur
                ${
                  plan.highlight
                    ? "border-brand bg-brand/5 scale-105 shadow-xl"
                    : "border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"
                }
              `}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-brand text-white px-3 py-1 rounded-full">
                  Mais popular
                </div>
              )}

              <h3 className="text-xl font-semibold">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-foreground/70">
                {plan.description}
              </p>

              <div className="mt-6 text-4xl font-bold text-brand">
                {plan.price}
                {plan.price !== "Sob consulta" && (
                  <span className="text-sm text-foreground/60">
                    /mês
                  </span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`
                  mt-8 py-3 rounded-xl font-semibold transition
                  ${
                    plan.highlight
                      ? "bg-brand text-white hover:scale-105"
                      : "border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
                  }
                `}
              >
                Começar
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}