"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { FaLocationArrow, FaXmark } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const ContactButton = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      toast.success("Message sent — I'll get back to you soon!");
      setName("");
      setEmail("");
      setMessage("");
      setOpen(false);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MagicButton
        title="Let's get in touch"
        icon={<FaLocationArrow />}
        position="right"
        handleClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[6000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-black-200 p-7 text-left shadow-2xl backdrop-blur-xl sm:p-10"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-white-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FaXmark className="h-4 w-4" />
              </button>

              <h3 className="text-xl font-bold text-white">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-white-100">
                Send me a message and it&apos;ll land straight in my inbox.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="ct-name"
                    className="mb-1.5 block text-xs font-medium text-white-200"
                  >
                    Name
                  </label>
                  <input
                    id="ct-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white-200/50 focus:border-purple/60 focus:outline-none focus:ring-1 focus:ring-purple/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ct-email"
                    className="mb-1.5 block text-xs font-medium text-white-200"
                  >
                    Email
                  </label>
                  <input
                    id="ct-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white-200/50 focus:border-purple/60 focus:outline-none focus:ring-1 focus:ring-purple/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="ct-message"
                    className="mb-1.5 block text-xs font-medium text-white-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="ct-message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi David, I'd love to talk about…"
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white-200/50 focus:border-purple/60 focus:outline-none focus:ring-1 focus:ring-purple/40"
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-purple/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton;
