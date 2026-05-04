const skills = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Sound Processing",
  "Podcast Production",
  "Map Animation",
  "Instagram Reels",
  "TikTok Editing",
  "YouTube Publishing",
  "SEO",
];

export default function Skills() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">

        <h1 className="text-4xl font-semibold text-white text-center uppercase tracking-widest mb-8 ">
            Skills
        </h1>
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="backdrop-blur-sm bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-xl text-white font-medium cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
