const accentMap = {
  teal: "bg-teal",
  blue: "bg-blue",
  coral: "bg-coral",
  lavender: "bg-lavender",
  pink: "bg-pink",
  yellow: "bg-yellow",
};

const SectionTitle = ({ title, subtitle, accent = "coral" }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
        {title}
        <span className="text-coral">.</span>
      </h2>
      {subtitle && (
        <p className="text-dark/50 mt-3 text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 mx-auto w-16 h-1.5 ${
          accentMap[accent] || "bg-coral"
        } border border-dark rounded-sm`}
      />
    </div>
  );
};

export default SectionTitle;
