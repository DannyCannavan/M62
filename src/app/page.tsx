import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-gray-900 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
              Remembering the past.
              <br />
              Supporting the future.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              The M62 Charity was established in memory of the 12 people who
              lost their lives in the 1974 M62 coach bombing, supporting
              veterans and families affected by terrorism.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/events"
                className="rounded-md bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                Upcoming Events
              </a>

              <a
                href="/about"
                className="rounded-md border border-gray-500 px-5 py-3 font-semibold text-white hover:bg-gray-800"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white">
              Our Story
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              The M62 Charity was established to remember those who lost their
              lives in the 1974 M62 coach bombing and to support veterans and
              families who have suffered loss through terrorism.
            </p>
          </div>
        </section>

        <section className="bg-gray-100 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Find out about upcoming M62 Charity events and how you can get
              involved.
            </p>

            <a
              href="/events"
              className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700"
            >
              View Events
            </a>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Support Us
            </h2>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you attend an event, support our fundraising or simply
              help spread the word, your support makes a difference.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}