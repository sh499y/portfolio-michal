function getYoutubeThumbnail(url) {
  let id = null;
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) {
        id = u.pathname.split("/shorts/")[1];
      } else if (u.pathname.startsWith("/live/")) {
        id = u.pathname.split("/live/")[1];
      } else {
        id = u.searchParams.get("v");
      }
    }
  } catch {
    return null;
  }
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

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
        thumbnail: "/thumbnails/tiktok-rolka.jpg",
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
              {grupa.items.map((item) => {
                const thumb = item.thumbnail || getYoutubeThumbnail(item.url);
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 hover:text-gray-400 group"
                  >
                    {thumb && (
                      <div className="relative w-32 h-18 shrink-0 rounded overflow-hidden bg-gray-100">
                        <img
                          src={thumb}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                          <svg
                            className="w-8 h-8 text-white opacity-80 drop-shadow"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <span className="flex-1 text-base font-light text-black group-hover:text-gray-400">
                      {item.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
