"use client";


type Swatch = { name: string; hex: string };

export default function OtherDetailsSection() {
  const swatches: Swatch[] = [
    { name: "Ivory", hex: "#f3efe6" },
    { name: "Sage", hex: "#a8b59a" },
    { name: "Olive", hex: "#7b8a5a" },
    { name: "Marigold", hex: "#d6b35a" },
    { name: "Ruby", hex: "#b54b3d" },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-[#f3e7df] px-6 py-14">

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[560px] flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(40px,6vw,58px)] text-[#f3e7df]">
          Other Details
        </h1>

        {/* Section: Dress Code */}
        <div className="mt-10">
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#d7bfb5]">
            Dress Code
          </div>

          <p className="mt-4 text-sm leading-7 text-[#f3e7df]/80">
            We kindly request{" "}
            <span className="text-[#f3e7df]">formal attire</span>. Think elegant,
            timeless, and comfortable for an evening celebration.
          </p>
        </div>

        {/* Color palette */}
        <div className="mt-10">
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#d7bfb5]">
            Colors
          </div>

          <div className="mt-5 flex items-end justify-center gap-4">
            {swatches.map((s) => (
                <div key={s.name} className="flex flex-col items-center gap-2">
                <div
                    className="h-12 w-10 shadow-[0_10px_25px_rgba(0,0,0,0.35)] ring-1 ring-white/15"
                    style={{
                    backgroundColor: s.hex,
                    borderTopLeftRadius: "999px",
                    borderTopRightRadius: "999px",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                    }}
                    aria-label={s.name}
                    title={s.name}
                />
                </div>
            ))}
            </div>

        </div>

        {/* Section: Gifts */}
        <div className="mt-10">
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#d7bfb5]">
            Gifts
          </div>

          <p className="mt-4 text-sm leading-7 text-[#f3e7df]/80">
            Your presence is the greatest gift. If you’d like to honor us with
            something extra, a small contribution toward our future is warmly
            appreciated.
          </p>
        </div>

      </div>
    </main>
  );
}
