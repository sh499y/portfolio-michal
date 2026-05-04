import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">
      <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">
        Video Editor & Producent
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-gray-900 leading-none tracking-tight">
        Michał Kędzia
      </h1>
      <div className="mt-8 flex justify-center">
        <Image
          src="/michaleek.png"
          alt="Michał Kędzia"
          width={280}
          height={280}
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
