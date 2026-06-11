"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaDownload, FaXmark, FaCircleCheck } from "react-icons/fa6";

const CvDownloadButton = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const reset = () => {
    setLoading(false);
    setDone(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setDone(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          reset();
          setOpen(true);
        }}
        className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border border-white/20 bg-white/[0.02] px-6 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-purple/60 hover:bg-purple/10 hover:text-purple"
      >
        <FaDownload className="h-3.5 w-3.5" />
        Get my CV
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black-200 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-white-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaXmark className="h-4 w-4" />
              </button>

              {done ? (
                <div className="flex flex-col items-center py-4 text-center">
                  <FaCircleCheck className="h-12 w-12 text-emerald-400" />
                  <h3 className="mt-4 text-lg font-bold text-white">
                    Check your inbox
                  </h3>
                  <p className="mt-2 text-sm text-white-100">
                    Thanks, {name.split(" ")[0]}. My CV is on its way to{" "}
                    <span className="font-medium text-white">{email}</span>.
                    Give it a minute, and do check your spam folder.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex h-11 items-center rounded-xl bg-gradient-to-r from-purple to-indigo-500 px-6 text-sm font-semibold text-white"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white">
                    Get my CV by email
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white-100">
                    Just pop in your name and email and I&apos;ll send my CV
                    straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="cv-name"
                        className="mb-1.5 block text-xs font-medium text-white-200"
                      >
                        Name
                      </label>
                      <input
                        id="cv-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Recruiter"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white-200/50 focus:border-purple/60 focus:outline-none focus:ring-1 focus:ring-purple/40"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cv-email"
                        className="mb-1.5 block text-xs font-medium text-white-200"
                      >
                        Email
                      </label>
                      <input
                        id="cv-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white-200/50 focus:border-purple/60 focus:outline-none focus:ring-1 focus:ring-purple/40"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-purple/40 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        "Sending…"
                      ) : (
                        <>
                          <FaDownload className="h-3.5 w-3.5" />
                          Email me the CV
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-white-200/70">
                      Your details stay private and are only used to send you
                      the CV and say hello.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CvDownloadButton;
