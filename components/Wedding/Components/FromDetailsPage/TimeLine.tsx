"use client";

import Link from "next/link";

type TimelineItem = {
  time: string;
  label: string;
  icon: React.ReactNode; // inline SVG
};

export default function TimelineSection() {
  const left: TimelineItem[] = [
    { time: "4:00 PM", label: "Ceremony", icon: <IconTemple /> },
    { time: "4:30 PM", label: "Cocktail Hour", icon: <IconCocktail /> },
    { time: "5:00 PM", label: "Canapés", icon: <IconCake /> },
    { time: "6:00 PM", label: "Dinner", icon: <IconCutlery /> },
  ];

  const right: TimelineItem[] = [
    { time: "4:10 PM", label: "In the Garden", icon: <IconLeaf /> },
    { time: "4:40 PM", label: "Photo Time", icon: <IconCamera /> },
    { time: "7:30 PM", label: "Dancing", icon: <IconMusic /> },
    { time: "8:00 PM", label: "Send Off", icon: <IconFirework /> },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-[#f3e7df] px-6 py-14">

      <div className="relative mx-auto max-w-[680px] text-center">
        <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(40px,6vw,58px)] text-[#f3e7df]">
          Our Timeline
        </h1>

        {/* grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-10">
          <TimelineColumn items={left} />
          <TimelineColumn items={right} />
        </div>

       
      </div>
    </main>
  );
}

function TimelineColumn({ items }: { items: TimelineItem[] }) {
  return (
    <div className="flex flex-col items-center gap-12">
      {items.map((it, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="h-10 w-10 opacity-90">{it.icon}</div>

          <div className="mt-3 text-[10px] tracking-[0.35em] uppercase text-[#d7bfb5]">
            {it.time}
          </div>

          <div className="mt-2 text-sm text-[#f3e7df]/90">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Tiny inline SVG icons (simple ornamental style) ---------- */

function strokeProps() {
  return { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
}

function IconTemple() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M8 20l16-10 16 10" />
      <path {...strokeProps()} d="M12 20v18M20 20v18M28 20v18M36 20v18" />
      <path {...strokeProps()} d="M10 38h28" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M34 14c-10 0-20 8-20 18 10 0 20-8 20-18Z" />
      <path {...strokeProps()} d="M14 32c6-6 12-10 20-14" />
    </svg>
  );
}

function IconCocktail() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M14 12h20l-10 12-10-12Z" />
      <path {...strokeProps()} d="M24 24v12" />
      <path {...strokeProps()} d="M18 40h12" />
      <path {...strokeProps()} d="M30 10l6-4" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M14 16h6l2-3h4l2 3h6a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" />
      <circle cx="24" cy="26" r="6" {...strokeProps()} />
    </svg>
  );
}

function IconCake() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M18 18h12v6H18v-6Z" />
      <path {...strokeProps()} d="M14 24h20v14H14V24Z" />
      <path {...strokeProps()} d="M20 14c0-2 2-3 2-5M26 14c0-2 2-3 2-5" />
    </svg>
  );
}

function IconMusic() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M30 12v18a4 4 0 1 1-2-3.46V14l12-2v14a4 4 0 1 1-2-3.46V10l-10 2Z" />
    </svg>
  );
}

function IconCutlery() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M16 10v14M12 10v14M20 10v14" />
      <path {...strokeProps()} d="M14 24v14" />
      <path {...strokeProps()} d="M30 10v28" />
      <path {...strokeProps()} d="M34 10c0 6-4 8-4 8s-4-2-4-8" />
    </svg>
  );
}

function IconFirework() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path {...strokeProps()} d="M24 10v10" />
      <path {...strokeProps()} d="M14 14l7 7" />
      <path {...strokeProps()} d="M34 14l-7 7" />
      <path {...strokeProps()} d="M10 24h10" />
      <path {...strokeProps()} d="M28 24h10" />
      <path {...strokeProps()} d="M16 34l5-5" />
      <path {...strokeProps()} d="M32 34l-5-5" />
      <path {...strokeProps()} d="M24 38v-8" />
    </svg>
  );
}
