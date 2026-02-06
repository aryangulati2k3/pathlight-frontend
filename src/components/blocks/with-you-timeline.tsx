"use client";

import {
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  HandHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/cn";

export type Step = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconKey: "calendar" | "clipboard" | "sparkles" | "shield" | "heart" | "file";
};

const iconMap = {
  calendar: CalendarCheck,
  clipboard: ClipboardList,
  sparkles: Sparkles,
  shield: ShieldCheck,
  heart: HandHeart,
  file: FileCheck2,
};

const themes = [
  {
    background: "bg-[#F6C7D2]",
    accent: "text-[#6B143E]",
    ring: "ring-[#E796AF]/50",
    blob: "bg-[#F2AFC2]",
  },
  {
    background: "bg-[#F9DEB9]",
    accent: "text-[#7A3E12]",
    ring: "ring-[#EDB77B]/50",
    blob: "bg-[#F2C28E]",
  },
  {
    background: "bg-[#CDEEE6]",
    accent: "text-[#155B4B]",
    ring: "ring-[#8FD6C7]/50",
    blob: "bg-[#9ADBCF]",
  },
  {
    background: "bg-[#DCD6FF]",
    accent: "text-[#332F82]",
    ring: "ring-[#B1A6FF]/50",
    blob: "bg-[#BBB3FF]",
  },
  {
    background: "bg-[#F9E7A8]",
    accent: "text-[#6B5400]",
    ring: "ring-[#E7C85C]/50",
    blob: "bg-[#F2D77D]",
  },
  {
    background: "bg-[#D8F2C4]",
    accent: "text-[#2E5A1A]",
    ring: "ring-[#A7D67A]/50",
    blob: "bg-[#BEE5A0]",
  },
];

const shapeClasses = [
  "rounded-full",
  "rounded-[30%]",
  "rounded-[12%] rotate-12",
  "rounded-[40%] -rotate-6",
];

function getPreview(text: string) {
  const parts = text.split(". ");
  if (parts.length <= 1) return text;
  return `${parts[0]}.`;
}

export function WithYouTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative space-y-6 md:space-y-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-4 w-px bg-border/60 md:left-1/2"
      />

      {steps.map((step, idx) => {
        const isRight = idx % 2 === 1;
        const theme = themes[idx % themes.length];
        const Icon = iconMap[step.iconKey];
        const preview = getPreview(step.description);
        const shape = shapeClasses[idx % shapeClasses.length];

        return (
          <div
            key={step.id}
            className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
          >
            <div className={cn("md:col-start-1", isRight && "md:col-start-3", "md:pr-8 md:pl-0")}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "group relative flex w-full flex-col gap-3 overflow-hidden rounded-2xl border border-border/60 p-5 text-left shadow-sm transition-all",
                      "hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                      "ring-1 ring-inset",
                      theme.background,
                      theme.ring,
                    )}
                  >
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute -right-8 -top-8 h-20 w-20 opacity-70",
                        theme.blob,
                        shape,
                      )}
                    />

                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-foreground shadow-sm">
                        <Icon className={cn("h-5 w-5", theme.accent)} aria-hidden />
                      </div>
                      <div className="space-y-1">
                        <p className={cn("text-overline uppercase tracking-wide", theme.accent)}>
                          Step {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-heading-4 text-foreground">{step.title}</h3>
                        <p className="text-body-sm text-foreground/70">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-body-sm text-foreground/80">{preview}</p>
                    <span className="text-caption text-foreground/70">
                      Click to read the full details
                    </span>
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{step.title}</DialogTitle>
                    <DialogDescription>{step.subtitle}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-3 text-body-sm text-foreground/80">
                    <p>{step.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="relative flex items-center md:col-start-2 md:justify-center">
              <div className="absolute left-4 h-5 w-5 -translate-x-1/2 rounded-full border border-border/70 bg-background shadow-sm md:left-1/2" />
              <div className="ml-8 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background shadow-sm md:ml-0">
                <Icon className={cn("h-4 w-4", theme.accent)} aria-hidden />
              </div>
            </div>

            <div className={cn("hidden md:block", isRight ? "md:col-start-1" : "md:col-start-3")} />
          </div>
        );
      })}
    </div>
  );
}
