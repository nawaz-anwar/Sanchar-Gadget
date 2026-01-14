export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center gap-4 opacity-0 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
        This Domain Is Available
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground">
        sanchargadget.com is open for acquisition
      </p>
      <p className="max-w-2xl text-base text-muted-foreground">
        If you are interested in acquiring this domain for your business or
        brand, please get in touch with the owner.
      </p>
    </section>
  );
}
