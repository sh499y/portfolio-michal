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
      { title: "BASS FROM SPACE: TBH \u2022 wywiad & DJ set \u2022 @ \u015aluza", url: "https://youtu.be/_OqjFwIZNeA" },
      { title: "CZY PATRYK JAKI TO POLSKI CHARLIE KIRK?", url: "https://youtu.be/A37f11EqX0U" },
      { title: "CZY POLSKA2050 SI\u0118 ROZPADNIE?", url: "https://youtu.be/r2Elphn0aqs" },
    ],
  },
  {
    kategoria: "Podcasty",
    items: [
      { title: "CZY NAWROCKIEMU PALI SI\u0118 GRUNT POD NOGAMI?", url: "https://youtu.be/PslVAVqu6Ls" },
      { title: "JAK ZAKO\u0143CZY SI\u0118 WOJNA W IRANIE?", url: "https://youtu.be/XtTnFB_y6xM" },
      { title: "\u015awie\u017cy znaczy autentyczny. Wywiad z Kajzerem", url: "https://youtu.be/hkItDwz3vmA" },
    ],
  },
  {
    kategoria: "Rolki",
    items: [
      { title: "SZYBKIE STRZA\u0141Y Z PATRYKIEM JAKIM", url: "https://youtube.com/shorts/qAo8s6VOFVI" },
      { title: "Rolka TikTok", url: "https://vm.tiktok.com/ZNRgmVTEd/", thumbnail: "/thumbnails/tiktok-rolka.jpg" },
    ],
  },
  {
    kategoria: "Transmisje live",
    items: [
      { title: "Wiecz\u00f3r Wyborczy z ORB", url: "https://www.youtube.com/live/1Q_8zNhHg0k" },
      { title: "Meteor Campus Clash 2025 \u2014 \u0106wier\u0107fina\u0142y League of Legends. Dzie\u0144 1", url: "https://www.youtube.com/live/6PNoYNTPHCg" },
    ],
  },
];

export default function Produkcje() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10">
      <h1 className="text-2xl sm:text-3xl font-light text-gray-900 text-center mb-1">
        Moja dzia\u0142alno\u015b\u0107
      </h1>
      <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-10 text-center">
        Moje produkcje
      </h2>
      <div className="flex flex-col gap-10">
        {produkcje.map((grupa) => (
          <div key={grupa.kategoria}>
            <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-4">
              {grupa.kategoria}
            </h3>
            <div className="divide-y divide-gray-200/50">
              {grupa.items.map((item) => {
                const thumb = item.thumbnail || getYoutubeThumbnail(item.url);
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 group rounded-xl px-3 -mx-3 hover:bg-white/40"
                  >
                    {thumb && (
                      <div className="relative w-32 h-18 shrink-0 rounded-xl overflow-hidden bg-gray-100/50">
                        <img
                          src={thumb}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 rounded-xl">
                          <svg className="w-8 h-8 text-white opacity-80 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <span className="flex-1 text-base font-light text-gray-800 group-hover:text-gray-500">
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
