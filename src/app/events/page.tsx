import Header from "@/components/Header";
import EventCard from "@/components/events/EventCard";

const events = [
  {
    id: 1,
    date: "Saturday 5 September 2026",
    title: "M62 Charity Event",
    description:
      "Join The M62 Charity for an event supporting veterans and remembering those affected by the 1974 M62 coach bombing.",
  },
  {
    id: 2,
    date: "Future Event",
    title: "M62 Charity Fundraising Event",
    description:
      "More information about this event will be announced by The M62 Charity.",
  },
];

export default function Events() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gray-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Events
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Find out about upcoming events organised by The M62 Charity.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}