import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">
        <div className="mt-8 flex justify-center pb-6">
            <Image
                src="/michaleek.png"
                alt="Michał Kędzia"
                width={280}
                height={280}
                className="object-cover rounded-2xl"
                priority
            />
        </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-none tracking-tight">
        Michał Kędzia
      </h1>
        <h2 className="text-2xl text-white/75 uppercase tracking-widest mb-10 text-center font-medium">
            Video Editor & Producent
        </h2>

    </section>
  );
}
