function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <p className="text-blue-500 uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;