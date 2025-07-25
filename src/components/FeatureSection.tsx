interface Feature {
  title: string;
  description: string;
  // any other fields
}

interface FeatureSectionProps {
  features: Feature[];
}

export default function FeatureSection({ features }: FeatureSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Course Features</h2>
      <ul className="list-disc list-inside space-y-2">
        {features.map((feature, index) => (
          <li key={index}>
            <h3 className="font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
