import Header from "@/components/Header";

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
              <article className="rounded-lg border border-gray-200 p-6 shadow-sm">. 
                {/* I implemented this using articles before fully doing page to help when using postreSQL/supabase later */}
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Saturday 5 September 2026
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  M62 Charity Event
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Join The M62 Charity for an event supporting veterans andgit 
                  remembering those affected by the 1974 M62 coach bombing.
                </p>

                <a
                  href="/events"
                  className="mt-6 inline-block font-semibold text-gray-900 underline"
                >
                  Event details
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}