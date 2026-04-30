const produkcje = [
  {
    kategoria: "Wywiady",
    items: [
      {
        title: "BASS FROM SPACE: TBH • wywiad & DJ set • @ Śluza",
        url: "https://youtu.be/_OqjFwIZNeA",
      },
      {
        title: "CZY PATRYK JAKI TO POLSKI CHARLIE KIRK?",
        url: "https://youtu.be/A37f11EqX0U",
      },
      {
        title: "CZY POLSKA2050 SIĘ ROZPADNIE?",
        url: "https://youtu.be/r2Elphn0aqs",
      },
    ],
  },
  {
    kategoria: "Podcasty",
    items: [
      {
        title: "CZY NAWROCKIEMU PALI SIĘ GRUNT POD NOGAMI?",
        url: "https://youtu.be/PslVAVqu6Ls",
      },
      {
        title: "JAK ZAKOŃCZY SIĘ WOJNA W IRANIE?",
        url: "https://youtu.be/XtTnFB_y6xM",
      },
      {
        title: 'Świeży znaczy autentyczny. Wywiad z Kajzerem',
        url: "https://youtu.be/hkItDwz3vmA",
      },
    ],
  },
  {
    kategoria: "Rolki",
    items: [
      {
        title: "SZYBKIE STRZAŁY Z PATRYKIEM JAKIM",
        url: "https://youtube.com/shorts/qAo8s6VOFVI",
      },
      {
        title: "Rolka TikTok",
        url: "https://vm.tiktok.com/ZNRgmVTEd/",
      },
    ],
  },
  {
    kategoria: "Transmisje live",
    items: [
      {
        title: "Wieczór Wyborczy z ORB",
        url: "https://www.youtube.com/live/1Q_8zNhHg0k",
      },
      {
        title: "Meteor Campus Clash 2025 — Ćwierćfinały League of Legends. Dzień 1",
        url: "https://www.youtube.com/live/6PNoYNTPHCg",
      },
    ],
  },
];

export default function Produkcje() {
  return (
    <section className="py-24 px-6 md:px-16 border-b border-gray-100">
      <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-10">Moje produkcje</h2>
      <div className="flex flex-col gap-12">
        {produkcje.map((grupa) => (
          <div key={grupa.kategoria}>
            <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-4">
              {grupa.kategoria}
            </h3>
            <div className="divide-y divide-gray-100">
              {grupa.items.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-4 hover:text-gray-400 group"
                >
                  <span className="text-base font-light text-black group-hover:text-gray-400">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-300 ml-4 shrink-0">↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
