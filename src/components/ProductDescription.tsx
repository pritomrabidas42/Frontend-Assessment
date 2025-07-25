interface Props {
  description?: string;
}

export default function ProductDescription({ description = "" }: Props) {
  return (
    <section
      className="prose max-w-none text-gray-700"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
