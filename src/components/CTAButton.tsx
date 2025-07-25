interface Props {
  text: string;
}

export default function CTAButton({ text }: Props) {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
      {text}
    </button>
  );
}
