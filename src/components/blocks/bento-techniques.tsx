"use client";

import {
  BookOpen,
  Brain,
  ClipboardCheck,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Target,
  ThumbsUp,
  Users,
  Wand2,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/cn";

type TechniqueItem = {
  technique: string;
  purpose: string;
  helps: string;
  iconKey:
    | "dtt"
    | "net"
    | "prt"
    | "fct"
    | "task_analysis"
    | "modeling"
    | "reinforcement"
    | "visual_supports"
    | "self_management"
    | "parent_coaching";
};
const iconMap = {
  dtt: ClipboardCheck,
  net: Wand2,
  prt: Target,
  fct: MessageCircle,
  task_analysis: ClipboardList,
  modeling: Users,
  reinforcement: ThumbsUp,
  visual_supports: BookOpen,
  self_management: Brain,
  parent_coaching: Sparkles,
};

const cardThemes = [
  {
    background: "bg-[#F7C4D6]",
    accent: "text-[#6B143E]",
    ring: "ring-[#E58AAE]/60",
    shape: "bg-[#F0AFC7]",
  },
  {
    background: "bg-[#FAD9B7]",
    accent: "text-[#7A3E12]",
    ring: "ring-[#F0B879]/60",
    shape: "bg-[#F7C49B]",
  },
  {
    background: "bg-[#BFE7E0]",
    accent: "text-[#155B4B]",
    ring: "ring-[#79CDBE]/60",
    shape: "bg-[#93D6CA]",
  },
  {
    background: "bg-[#D8D4FF]",
    accent: "text-[#332F82]",
    ring: "ring-[#A79DFF]/60",
    shape: "bg-[#B9B3FF]",
  },
  {
    background: "bg-[#F9E7A8]",
    accent: "text-[#6B5400]",
    ring: "ring-[#E7C85C]/60",
    shape: "bg-[#F2D77D]",
  },
  {
    background: "bg-[#FFD3C1]",
    accent: "text-[#7C3A1A]",
    ring: "ring-[#F4A98B]/60",
    shape: "bg-[#F7BFA8]",
  },
  {
    background: "bg-[#CDE0FF]",
    accent: "text-[#1F3B78]",
    ring: "ring-[#8DB1FF]/60",
    shape: "bg-[#B3CDFC]",
  },
  {
    background: "bg-[#C6E6B2]",
    accent: "text-[#245717]",
    ring: "ring-[#8EC46A]/60",
    shape: "bg-[#A8D68A]",
  },
  {
    background: "bg-[#F6C7A7]",
    accent: "text-[#6B2F14]",
    ring: "ring-[#EFA878]/60",
    shape: "bg-[#F0B188]",
  },
  {
    background: "bg-[#D8F2C4]",
    accent: "text-[#2E5A1A]",
    ring: "ring-[#A7D67A]/60",
    shape: "bg-[#BEE5A0]",
  },
];

export function BentoTechniques({ techniques }: { techniques: TechniqueItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute right-6 top-0 h-28 w-28 rounded-[32%] bg-accent/25 blur-2xl" />
        <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-[40%] bg-muted/40 blur-2xl" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techniques.map((item, idx) => (
          <CreativeCard
            key={item.technique}
            item={item}
            index={idx}
            isActive={activeIndex === idx}
            onToggle={() => setActiveIndex((current) => (current === idx ? null : idx))}
          />
        ))}
      </div>
    </div>
  );
}

function CreativeCard({
  item,
  index,
  isActive,
  onToggle,
}: {
  item: TechniqueItem;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[item.iconKey];

  const theme = cardThemes[index % cardThemes.length];
  const shapeVariant = index % 4;

  return (
    <button
      type="button"
      aria-expanded={isActive}
      onClick={onToggle}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 text-left shadow-sm transition-all duration-300 md:p-6",
        "border border-border/60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
        "hover:shadow-md hover:ring-2 hover:ring-primary/20",
        theme.background,
        theme.ring,
        "ring-1 ring-inset",
        isActive && "lg:col-span-2",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-20 w-20 opacity-70",
          theme.shape,
          shapeVariant === 0 && "rounded-full",
          shapeVariant === 1 && "rounded-[28%]",
          shapeVariant === 2 && "rounded-[6%] rotate-12",
          shapeVariant === 3 && "rounded-[40%] -rotate-6",
        )}
      />

      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-foreground shadow-sm">
          <Icon className={cn("h-5 w-5", theme.accent)} aria-hidden />
        </div>

        <div className="space-y-1">
          <p className={cn("text-overline uppercase tracking-wide", theme.accent)}>Technique</p>
          <h3 className="text-heading-4 text-foreground">{item.technique}</h3>
          <p className="text-caption text-foreground/70">{item.purpose}</p>
        </div>
      </div>

      <div className="mt-4 flex-1">
        {isActive ? (
          <p className="mt-2 text-body-sm text-foreground/80">{item.helps}</p>
        ) : (
          <p className="mt-2 text-body-sm text-foreground/70"></p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between text-caption text-foreground/70">
        <span>{isActive ? "Click to collapse" : "Click to expand"}</span>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
          {isActive ? "Expanded" : "Explore"}
        </span>
      </div>
    </button>
  );
}
