interface Props {
  title: string;
}

export default function ProductTitle({ title }: Props) {
  return <h1 className="text-4xl font-bold text-gray-900">{title}</h1>;
}
