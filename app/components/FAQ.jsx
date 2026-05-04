const faqs = [
  {
    question: "Kim jest Michał Kędzia?",
    answer:
      "Producent wideo i montażysta z Polski z doświadczeniem w dziennikarstwie radiowym. Specjalizuję się w wywiadach, podcastach, formach dokumentalnych, transmisjach live i rolkach na Instagram i TikTok.",
  },
  {
    question: "Jakie usługi oferuję?",
    answer:
      "Montaż wideo, produkcja podcastów, realizacja transmisji live, tworzenie rolek na Instagram i TikTok, color grading, motion graphics oraz sound design. Pracuję w Adobe Premiere Pro i After Effects.",
  },
  {
    question: "Czy pracujesz zdalnie?",
    answer:
      "Tak, większość projektów montażowych realizuję zdalnie. Transmisje live wymagają obecności na miejscu.",
  },
  {
    question: "W jakim formacie dostarczane są materiały?",
    answer:
      "Standardowo MP4 (H.264/H.265), rozdzielczość do 4K. Format dostosowuję do platformy docelowej — YouTube, Instagram, TikTok.",
  },
];

export default function FAQ() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10">
      <h2 className="text-4xl font-semibold text-white text-center mb-10 uppercase">
        FAQ
      </h2>
      <dl className="max-w-2xl mx-auto flex flex-col gap-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </dt>
            <dd className="text-base font-normal text-white/80 leading-relaxed">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
