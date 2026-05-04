export default function Kontakt() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">
        <h1 className="text-4xl font-semibold text-white text-center mb-10">
            Kontakt
        </h1>
      <div className="flex flex-col gap-4">
        <a
          href="mailto:michal.kedzia@icloud.com"
          className="text-2xl sm:text-3xl font-semibold text-white hover:text-white/60"
        >
          michal.kedzia@icloud.com
        </a>
        <a
          href="tel:+48514198824"
          className="text-2xl sm:text-3xl font-semibold text-white hover:text-white/60"
        >
          +48 514 198 824
        </a>
      </div>
    </section>
  );
}
