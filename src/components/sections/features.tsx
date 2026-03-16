"use client";

import Container from "../layout/container";
import FeatureCard from "../ui/feature-card";
import { Zap, Workflow, Shield, Plug, BarChart, Bot } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 border-t border-black/5 dark:border-white/5"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-3xl font-bold tracking-tight">
            Automação poderosa para qualquer equipe
          </h2>

          <p className="mt-4 text-foreground/70">
            Conecte ferramentas, elimine tarefas repetitivas e construa fluxos
            inteligentes em minutos.
          </p>

          <motion.div
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<Zap size={28} />}
                    title="Automação instantânea"
                    description="Crie fluxos automáticos para tarefas repetitivas em poucos minutos."
                />
            </motion.div>
            
            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<Workflow size={28} />}
                    title="Fluxos visuais"
                    description="Construa automações complexas usando um editor visual simples."
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<Plug size={28} />}
                    title="Integrações ilimitadas"
                    description="Conecte suas ferramentas favoritas e automatize todo seu ecossistema."
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<Bot size={28} />}
                    title="Automação com IA"
                    description="Use inteligência artificial para decisões e processamento de dados."
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<BarChart size={28} />}
                    title="Monitoramento em tempo real"
                    description="Acompanhe cada automação com métricas e logs detalhados."
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <FeatureCard
                    icon={<Shield size={28} />}
                    title="Segurança empresarial"
                    description="Controle total com autenticação segura e criptografia."
                />
            </motion.div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}