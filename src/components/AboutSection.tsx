"use client";

interface About {
  title: string;
  description: string;
}

export default function AboutSection({ abouts }: { abouts: About[] }) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-6">Course Details</h2>

      {abouts?.length ? (
        abouts.map((about, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{about.title}</h3>
            <p className="text-gray-700">{about.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No course details available.</p>
      )}
    </section>
  );
}
