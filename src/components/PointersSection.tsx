interface Pointer {
  title: string;
  description: string;
}

interface Props {
  pointers: Pointer[];
}

export default function PointersSection({ pointers }: Props) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-6">What You Will Learn</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-800">
        {pointers.map((pointer, idx) => (
          <li key={idx}>
            <strong>{pointer.title}:</strong> {pointer.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
