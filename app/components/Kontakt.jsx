export default function Kontakt() {
  return (
    <section className="py-24 px-6 md:px-16">
      <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-10">Kontakt</h2>
      <a
        href="mailto:michal.kedzia@icloud.com"
        className="text-2xl md:text-4xl font-light text-black hover:text-gray-400"
      >
        michal.kedzia@icloud.com
      </a>
        <a
            href="tel:+48514198824"
            className="text-2xl md:text-4xl font-light text-black hover:text-gray-400"
        >
            +48 514 198 824
        </a>
    </section>
  );
}
