interface EventCardProps {
  date: string;
  title: string;
  description: string;
}

export default function EventCard({
  date,
  title,
  description,
}: EventCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {date}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-gray-300">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <a
        href="/events"
        className="mt-6 inline-block font-semibold text-gray-300 underline"
      >
        Event details
      </a>
    </article>
  );
}