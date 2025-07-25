interface Instructor {
  title: string;
  description: string;
  // add more fields if needed
}

interface Props {
  instructors: Instructor[];
}

export default function InstructorSection({ instructors }: Props) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-6">Course Instructors</h2>
      <div className="space-y-6">
        {instructors.map((inst, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">{inst.title}</h3>
            <p className="text-gray-700">{inst.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
