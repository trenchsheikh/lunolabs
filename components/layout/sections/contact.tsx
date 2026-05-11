"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, "Your name, please"),
  email: z.string().email("A real email, please"),
  phone: z.string().optional(),
  business: z.string().min(2, "Tell us what you do"),
  need: z.string().min(1, "Pick one"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      business: "",
      need: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone || "N/A");
      formData.append("business", values.business);
      formData.append("need", values.need);
      formData.append("message", values.message || "");
      formData.append("_subject", `New inquiry: ${values.need} — ${values.name}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/samitahir018@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setSubmittedName(values.name);
        reset();
      } else {
        alert("Something went wrong. Please email hello@lunolabs.com directly.");
      }
    } catch (e) {
      alert("Couldn't send. Please email hello@lunolabs.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="contact" className="bg-moss-2 text-cream py-24 md:py-36 pb-20">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_540px] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="font-serif text-cream leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]">
            Tell us
            <br />
            about the
            <br />
            <span className="italic text-sprout-soft">thing.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-cream/75 mt-7 max-w-[460px]">
            A 30-minute call, no pitch deck, no obligation. You talk, we listen,
            and at the end you&apos;ll know whether software actually solves
            your problem — or if it&apos;s something simpler.
          </p>
          <ul className="flex flex-col gap-4 mt-12">
            {[
              ["i.", "We", "listen", " first, build second."],
              ["ii.", "We", "ship fast", " — most projects in 2–6 weeks."],
              ["iii.", "We", "prioritize quality", " over scope."],
            ].map(([n, pre, em, post]) => (
              <li key={n as string} className="font-serif text-xl md:text-[22px] flex gap-3.5 items-baseline">
                <span className="italic text-sprout-soft text-lg">{n}</span>
                <span>
                  {pre} <em className="italic">{em}</em>
                  {post}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-cream/[0.05] backdrop-blur-md border border-cream/15 rounded-2xl p-8 md:p-10">
          {submittedName ? (
            <div className="text-center py-12">
              <div className="font-serif italic text-sprout-soft text-6xl mb-4">
                ✓
              </div>
              <h4 className="font-serif text-3xl text-cream mb-3">
                Thanks, {submittedName}.
              </h4>
              <p className="text-cream/70">
                We&apos;ll be in your inbox within the next business day.
                <br />
                If it&apos;s urgent: hello@lunolabs.com
              </p>
              <button
                onClick={() => setSubmittedName(null)}
                className="mt-8 text-cream/60 hover:text-sprout-soft text-sm underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Maya Okafor"
                  {...register("name")}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" error={errors.email?.message}>
                  <input
                    className="contact-input"
                    type="email"
                    placeholder="maya@cedar.com"
                    {...register("email")}
                  />
                </Field>
                <Field label="Phone (optional)">
                  <input
                    className="contact-input"
                    type="tel"
                    placeholder="+1 555 0149"
                    {...register("phone")}
                  />
                </Field>
              </div>

              <Field label="What do you do?" error={errors.business?.message}>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Salon, clinic, studio, side project…"
                  {...register("business")}
                />
              </Field>

              <Field label="What do you need built?" error={errors.need?.message}>
                <select className="contact-input" {...register("need")}>
                  <option value="">Choose one…</option>
                  <option value="A booking system">A booking system</option>
                  <option value="A website">A website</option>
                  <option value="AI automation / workflow tools">
                    AI automation / workflow tools
                  </option>
                  <option value="Something custom">Something custom</option>
                  <option value="Honestly, not sure yet">
                    Honestly, not sure yet
                  </option>
                </select>
              </Field>

              <Field label="Anything else?">
                <textarea
                  className="contact-input resize-y min-h-[80px]"
                  rows={3}
                  placeholder="Tell us a bit about the problem you're trying to solve…"
                  {...register("message")}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cream text-moss-2 py-4 rounded-full text-[15px] font-bold hover:bg-sprout-soft hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
              >
                {isSubmitting ? "Sending…" : "Send it"}
                <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.contact-input) {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid hsl(var(--cream) / 0.25);
          padding: 12px 0;
          color: hsl(var(--cream));
          font-family: inherit;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s;
        }
        :global(.contact-input:focus) {
          border-bottom-color: hsl(var(--sprout-soft));
        }
        :global(.contact-input::placeholder) {
          color: hsl(var(--cream) / 0.4);
          font-family: "Times New Roman", Times, serif;
          font-style: italic;
        }
        :global(.contact-input option) {
          background: hsl(var(--moss-2));
          color: hsl(var(--cream));
        }
      `}</style>
    </div>
  );
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] tracking-[0.15em] uppercase text-cream/70 mb-2.5">
        {label}
      </span>
      {children}
      {error && (
        <span className="block text-[12px] text-sprout-soft mt-1.5 italic font-serif">
          {error}
        </span>
      )}
    </label>
  );
}
