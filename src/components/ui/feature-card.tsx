"use client";
import { ReactNode, useRef } from "react";


type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function FeatureCard({
    icon,
    title,
    description,
}: FeatureCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
    
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
    
      cardRef.current?.style.setProperty("--x", `${x}px`);
      cardRef.current?.style.setProperty("--y", `${y}px`);
    };
  return (
    <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative group h-full"
    >
        <div
            className="
                pointer-events-none
                absolute -inset-1
                rounded-2xl
                opacity-0 group-hover:opacity-100
                transition duration-300
            "
            style={{
                background: `
                radial-gradient(
                    300px circle at var(--x) var(--y),
                    rgba(37, 99, 235, 0.25),
                    transparent 60%
                )
                `,
            }}
        />

        <div
        className="
            relative
            h-full
            p-6
            rounded-2xl
            border border-black/10 dark:border-white/10
            bg-white dark:bg-neutral-900
            transition
            hover:scale-[1.02]
            hover:shadow-lg
            flex flex-col
        "
        >
            <div className="mb-4 text-brand">
                {icon}
            </div>

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-sm text-foreground/70 flex-grow">
                {description}
            </p>
        </div>

    </div>
    );
}