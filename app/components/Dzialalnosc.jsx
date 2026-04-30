const items = [
  { title: "Nazwa działalności", description: "Krótki opis" },
  // dodaj więcej
];

export default function Dzialalnosc() {
  return (
    <section className="py-24 px-6 md:px-16 border-b border-gray-100">
      <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-10">Moja działalność</h2>
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.title} className="py-6">
            <h3 className="text-lg font-light text-black">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
