import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-16 border-b border-gray-100">
      <div>
        <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Video Editor & Producent</p>
        <h1 className="text-6xl md:text-8xl font-light text-black leading-none tracking-tight">
          Michał<br />Kędzia
        </h1>
      </div>
      <div className="hidden md:block">
        <Image
          src="/michaleek.png"
          alt="Michał Kędzia"
          width={400}
          height={400}
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
