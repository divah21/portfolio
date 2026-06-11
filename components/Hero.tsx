"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { heroStats, socialMedia } from "@/data";
import CvDownloadButton from "@/components/CvDownloadButton";

const techStack = [
  "Node.js",
  "Java · Spring Boot",
  "React / Next.js",
  "TypeScript",
  "PostgreSQL",
  "Docker / K8s",
  "AWS · OCI",
];

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-24"
    >
      {/* Faint grid that fades out smoothly toward the edges */}
      <div className="absolute inset-0 -z-20 bg-black-100 bg-grid-white/[0.025]">
        <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,transparent_10%,black_90%)]" />
      </div>

      {/* Soft, edgeless ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-purple/20 blur-[130px]" />
        <div className="absolute -right-20 top-10 h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-white-200 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work · Harare / Remote
          </span>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-purple">
            Full-Stack Software Engineer
          </p>

          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build{" "}
            <span className="bg-gradient-to-r from-purple via-fuchsia-400 to-sky-300 bg-clip-text text-transparent">
              scalable, secure
            </span>{" "}
            software that ships.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white-100">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-white">David Smart</span>, a
            full-stack engineer with 3+ years building enterprise-grade systems
            in Node.js, Java and Spring Boot. I work across REST and SOAP APIs,
            microservices, AI integrations and cloud-native delivery on AWS and
            OCI.
          </p>

          {/* Tech stack chips */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-purple to-indigo-500 px-7 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-purple/40"
            >
              View my work
              <FaLocationArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <CvDownloadButton />
            {socialMedia.map((info) => (
              <Link
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-purple/50"
              >
                <img
                  src={info.img}
                  alt="social icon"
                  className="h-[18px] w-[18px]"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[20rem]"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-purple/30 via-fuchsia-500/15 to-sky-500/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl backdrop-blur-md">
            <Image
              src="/dee_view.png"
              alt="David Smart"
              width={500}
              height={620}
              priority
              className="h-[27rem] w-full rounded-[1.4rem] object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-x-2 bottom-2 h-28 rounded-b-[1.4rem] bg-gradient-to-t from-black-100/90 to-transparent" />
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black-100/80 px-4 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md">
              <span className="text-purple">★</span> 2× Oracle OCI Certified ·
              2025
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats marquee — scrolls right to left */}
      <div className="relative z-10 mx-auto mt-12 w-full max-w-5xl border-t border-white/5 pt-8">
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {[0, 1].map((track) => (
            <div
              key={track}
              aria-hidden={track === 1}
              className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex shrink-0 items-center gap-10 pr-10"
                >
                  <p className="whitespace-nowrap">
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>{" "}
                    <span className="text-sm text-white-200">{stat.label}</span>
                  </p>
                  <span className="h-8 w-px bg-white/10" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
