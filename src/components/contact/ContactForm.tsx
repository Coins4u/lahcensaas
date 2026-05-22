"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SITE } from "@/lib/site";

const TOPICS = [
  { value: "general", label: "General question" },
  { value: "access", label: "Access & billing" },
  { value: "tools", label: "Toolbox feedback" },
  { value: "other", label: "Something else" },
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0].value);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      setName("");
      setEmail("");
      setTopic(TOPICS[0].value);
      setMessage("");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="card-surface py-10 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
        <h2 className="mt-4 text-xl font-bold text-white">Message sent</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Thanks for reaching out. I&apos;ll reply to your email as soon as I can — usually
          within one or two business days.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4">
      <Input
        label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={2}
        autoComplete="name"
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <div className="space-y-1.5">
        <label htmlFor="contact-topic" className="tool-label mb-0">
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-xl border border-[var(--border)] bg-[#0a0c10] px-3.5 py-2.5 text-sm text-slate-100 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25"
        >
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <Textarea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        minLength={10}
        rows={6}
        placeholder="How can I help?"
      />
      {error && (
        <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">{error}</p>
      )}
      <p className="text-xs text-slate-500">
        Your message goes straight to my inbox. Prefer email?{" "}
        <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:underline">
          {SITE.email}
        </a>
      </p>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
