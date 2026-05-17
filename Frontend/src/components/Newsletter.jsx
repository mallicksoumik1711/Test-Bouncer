const Newsletter = () => {
  return (
    <section className="bg-[#f5f1ea] py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mb-6">
          Private Journal
        </p>

        <h2 className="text-4xl lg:text-6xl tracking-[-0.05em] leading-[1] font-semibold text-zinc-900 mb-8">
          Receive updates on
          <br />
          new collections and
          <br />
          seasonal releases.
        </h2>

        <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mx-auto mb-14">
          Sign up for curated product drops, editorial stories, and early access
          to limited releases.
        </p>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <div className="border-b border-zinc-400 flex items-center justify-between gap-6 pb-4">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full outline-none text-zinc-900 placeholder:text-zinc-500 text-lg"
            />

            <button className="text-sm uppercase tracking-[0.18em] text-zinc-900 hover:opacity-60 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
