interface Props {
  youtubeUrl: string;
}

export default function TrailerSection({ youtubeUrl }: Props) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Course Trailer</h2>
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={youtubeUrl.replace("watch?v=", "embed/")}
          title="Course Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
