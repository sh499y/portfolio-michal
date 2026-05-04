const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
];

export default function Skills() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">
      <h2 className="text-sm text-white/50 uppercase tracking-widest mb-8 font-medium">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="backdrop-blur-sm bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm text-white font-medium cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
