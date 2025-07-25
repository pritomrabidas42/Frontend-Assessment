interface ChecklistItem {
  text: string;
  icon?: string;
}

interface ChecklistSectionProps {
  checklist: ChecklistItem[];
}

export default function ChecklistSection({ checklist }: ChecklistSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Checklist</h2>
      <ul className="flex flex-wrap gap-4">
        {checklist.map((item) => (
          <li key={item.id} className="flex items-center space-x-2">
            {item.icon && <img src={item.icon} alt="" className="w-6 h-6" />}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
