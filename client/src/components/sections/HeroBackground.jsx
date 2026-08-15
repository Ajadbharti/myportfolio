function HeroBackground() {
  return (
    <>
      {/* Royal Blue Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[150px]" />

      {/* Royal Violet Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-[15%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.08] blur-[160px]" />

      {/* Soft Cyan Accent */}
      <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
    </>
  );
}

export default HeroBackground;