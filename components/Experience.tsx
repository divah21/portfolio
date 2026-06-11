import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaGooglePlay,
  FaApple,
  FaLock,
} from "react-icons/fa6";
import { workExperience } from "@/data";
import { cn } from "@/lib/utils";

type ProjectLink = { label: string; url: string };
type Project = {
  name: string;
  des: string;
  stack: string[];
  image?: string;
  kind?: string;
  status?: string;
  gradient?: string;
  links?: ProjectLink[];
};
type Metric = { value: string; label: string };

const linkIcon = (label: string) => {
  if (/play/i.test(label)) return <FaGooglePlay className="h-3 w-3" />;
  if (/app\s*store|ios|apple/i.test(label)) return <FaApple className="h-3.5 w-3.5" />;
  return <FaArrowUpRightFromSquare className="h-3 w-3" />;
};

const StatusBadge = ({ status }: { status?: string }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur",
      status === "Live"
        ? "bg-emerald-500/20 text-emerald-300"
        : "bg-black/40 text-white-200"
    )}
  >
    {status === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
    {status}
  </span>
);

const TechChips = ({ stack }: { stack: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {stack.slice(0, 6).map((tech) => (
      <span
        key={tech}
        className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white-200"
      >
        {tech}
      </span>
    ))}
  </div>
);

/** Live link buttons, or a locked "Private" pill for projects without public access. */
const ProjectActions = ({ project }: { project: Project }) => {
  if (project.links && project.links.length > 0) {
    return (
      <div className="flex flex-wrap gap-2">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-purple/30 bg-purple/10 px-3 py-1.5 text-xs font-medium text-purple transition-colors hover:bg-purple/20"
          >
            {linkIcon(link.label)}
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  if (project.status === "Private") {
    return (
      <span
        title="Private. Access available on request"
        className="inline-flex w-fit cursor-not-allowed items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white-200"
      >
        <FaLock className="h-3 w-3" />
        Private · access on request
      </span>
    );
  }

  return null;
};

/** Standard web project card (screenshot on top, details below). */
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group/proj flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black-100 transition-all duration-300 hover:border-purple/40">
    <div
      className={cn(
        "relative aspect-video overflow-hidden",
        project.image
          ? "bg-black-100"
          : `bg-gradient-to-br ${project.gradient ?? "from-violet-600 to-fuchsia-600"}`
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/proj:scale-[1.03]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
          <span className="absolute bottom-3 left-4 text-2xl font-extrabold tracking-tight text-white drop-shadow">
            {project.name}
          </span>
        </>
      )}
      <span className="absolute right-2.5 top-2.5">
        <StatusBadge status={project.status} />
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-3 p-4">
      <div>
        <h4 className="text-base font-bold text-white">{project.name}</h4>
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white-100">
          {project.des}
        </p>
      </div>
      <TechChips stack={project.stack} />
      <ProjectActions project={project} />
    </div>
  </div>
);

/** Mobile project — screenshot inside a phone frame, side-by-side with details. */
const MobileProjectCard = ({ project }: { project: Project }) => (
  <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-black-200 p-6 backdrop-blur-md sm:flex-row sm:items-center">
    {/* Phone frame */}
    <div className="relative shrink-0">
      <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/25 to-blue-600/25 blur-2xl" />
      <div className="relative h-[330px] w-[160px] overflow-hidden rounded-[2rem] border-[6px] border-neutral-800 bg-black shadow-2xl ring-1 ring-white/10">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-neutral-700" />
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-1 flex-col justify-center gap-3 text-center sm:text-left">
      <div className="flex items-center justify-center gap-3 sm:justify-start">
        <h4 className="text-xl font-bold text-white">{project.name}</h4>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-sm leading-relaxed text-white-100">{project.des}</p>
      <div className="flex justify-center sm:justify-start">
        <TechChips stack={project.stack} />
      </div>
      <div className="mt-1 flex justify-center sm:justify-start">
        <ProjectActions project={project} />
      </div>
    </div>
  </div>
);

/** Impact panel for roles without portfolio projects. */
const ImpactPanel = ({
  metrics,
  stack,
  note,
}: {
  metrics: Metric[];
  stack: string[];
  note?: string;
}) => (
  <div className="self-center rounded-2xl border border-white/10 bg-black-200 p-6 backdrop-blur-md">
    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white-200">
      Impact &amp; Highlights
    </p>
    <div className="flex flex-wrap gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="min-w-[120px] flex-1 rounded-xl border border-white/10 bg-black-100 p-4 text-center"
        >
          <p className="bg-gradient-to-r from-purple to-blue-100 bg-clip-text text-3xl font-bold text-transparent">
            {m.value}
          </p>
          <p className="mt-1 text-xs text-white-200">{m.label}</p>
        </div>
      ))}
    </div>
    {note && (
      <p className="mt-4 text-sm leading-relaxed text-white-100">{note}</p>
    )}
    <div className="mt-4 flex flex-wrap gap-1.5">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white-200"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20">
      <h1 className="heading text-white">
        Experience &amp; <span className="text-purple">Selected Work</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white-200 sm:text-base">
        Where I&apos;ve worked and what I shipped there, from enterprise SaaS
        to production mobile apps.
      </p>

      <div className="relative mx-auto mt-16 max-w-7xl px-4">
        {/* Continuous timeline rail */}
        <div className="absolute bottom-8 left-[27px] top-4 w-px bg-gradient-to-b from-purple via-purple/40 to-transparent sm:left-7" />

        <div className="flex flex-col gap-12">
          {workExperience.map((item) => {
            const it = item as any;
            const projects = it.projects as Project[] | undefined;
            const metrics = it.metrics as Metric[] | undefined;
            const isMobileRow =
              projects?.length === 1 && projects[0].kind === "mobile";
            return (
              <div key={item.id} className="relative flex gap-5 sm:gap-7">
                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black-100 shadow-lg">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.company}
                        className={cn(
                          "h-full w-full",
                          it.logoBg ?? "bg-white",
                          it.logoFit ?? "object-cover object-left"
                        )}
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.gradient} text-sm font-bold text-white`}
                      >
                        {item.initials}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content: experience card + projects/impact */}
                <div className="grid flex-1 items-start gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.3fr)]">
                  {/* Experience card */}
                  <div className="rounded-2xl border border-white/10 bg-black-200 p-5 backdrop-blur-md sm:p-6">
                    <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-white sm:text-xl">
                          {item.role}
                        </h2>
                        <p className="mt-0.5 text-sm font-semibold text-purple">
                          {item.company}
                        </p>
                        <p className="mt-0.5 text-xs text-white-200">
                          {item.location}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "inline-flex shrink-0 items-center gap-1.5 self-start whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium",
                          item.current
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/5 text-white-200"
                        )}
                      >
                        {item.current && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        )}
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white-100">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right column */}
                  {isMobileRow ? (
                    <MobileProjectCard project={projects![0]} />
                  ) : projects && projects.length > 0 ? (
                    <div
                      className={cn(
                        "grid gap-4",
                        projects.length > 1
                          ? "sm:grid-cols-2"
                          : "grid-cols-1 sm:max-w-md"
                      )}
                    >
                      {projects.map((p) => (
                        <ProjectCard key={p.name} project={p} />
                      ))}
                    </div>
                  ) : metrics ? (
                    <ImpactPanel
                      metrics={metrics}
                      stack={it.stack ?? []}
                      note={it.note}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
