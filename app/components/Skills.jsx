const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  // dodaj więcej
];

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-16 border-b border-gray-100">
      <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-10">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-2 border border-gray-200 text-sm text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
