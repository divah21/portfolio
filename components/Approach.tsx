"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { education } from "@/data";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Education &amp; <span className="text-purple">Certifications</span>
      </h1>
      <div className="my-20 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
        {education.map((item) => (
          <Card key={item.id} title={item.title} des={item.des} period={item.period} subtitle={item.subtitle}>
            <CanvasRevealEffect
              animationSpeed={item.canvas.speed}
              containerClassName={`${item.canvas.bg} rounded-3xl overflow-hidden`}
              colors={item.canvas.colors}
              dotSize={item.canvas.dotSize}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  subtitle,
  children,
  des,
  period,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  des: string;
  period: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute -left-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-black opacity-30 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full w-full items-center justify-center px-6 text-center">
        {/* Resting state */}
        <div className="flex flex-col items-center transition duration-200 group-hover/canvas-card:opacity-0">
          <span className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple">
            {period}
          </span>
          <h2 className="mt-5 text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-white-200">{subtitle}</p>
        </div>

        {/* Hover state */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 opacity-0 transition duration-200 group-hover/canvas-card:opacity-100">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm font-medium" style={{ color: "#CBACF9" }}>
            {subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "#E4ECFF" }}>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
