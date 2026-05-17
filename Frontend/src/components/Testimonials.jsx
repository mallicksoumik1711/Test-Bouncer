const testimonials = [
  {
    quote:
      "The attention to detail and fabric quality immediately stands out. Every piece feels intentional.",
    author: "Editorial Review",
  },
  {
    quote:
      "Minimal, timeless, and exceptionally well crafted. A modern approach to everyday essentials.",
    author: "Design Journal",
  },
  {
    quote:
      "One of the few brands balancing comfort, sophistication, and understated luxury so naturally.",
    author: "Fashion Insight",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-5">
            Journal
          </p>

          <h2 className="text-4xl lg:text-5xl tracking-[-0.04em] font-semibold text-zinc-900 max-w-2xl leading-tight">
            Crafted with a focus on timeless design and refined simplicity.
          </h2>
        </div>

        {/* Quotes */}
        <div className="grid lg:grid-cols-3 gap-14">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border-t border-zinc-200 pt-8"
            >
              <p className="text-2xl leading-relaxed tracking-[-0.02em] text-zinc-900 mb-10">
                “{item.quote}”
              </p>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;