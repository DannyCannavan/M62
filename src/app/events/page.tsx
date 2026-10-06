import EventCard from "@/components/events/EventCard";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Events() {
  const supabase = createSupabaseServerClient();

  const { data: events, error } = await supabase
  .from("events")
  .select("id, title, slug, date, description")
  .gte("date", new Date().toISOString())
  .order("date", { ascending: true });

  if (error) {
    console.error("Failed to fetch events:", error);
  }

  return (
    <>
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
          <h2 className="text-3xl font-bold text-gray-300">
            Upcoming Events
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {events?.map((event) => (
              <EventCard
                key={event.id}
                date={new Date(event.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                title={event.title}
                description={event.description}
                slug={event.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}