const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
];

export default function Skills() {
  return (
    <section className="my-16 sm:my-24 glass-card rounded-3xl py-12 sm:py-16 px-6 sm:px-10 text-center">
      <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-8">
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="backdrop-blur-sm bg-white/50 border border-white/60 px-4 py-2 rounded-xl text-sm text-gray-700 cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
