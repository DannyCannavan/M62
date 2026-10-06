import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const supabase = createSupabaseServerClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("id, title, date, description")
    .eq("slug", slug)
    .single();

  if (error || !event) {
    notFound();
  }

  return (
    <>
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            {new Date(event.date).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-gray-400">
            {event.description}
          </p>
        </div>
      </section>
    </>
  );
}