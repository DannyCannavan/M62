import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gray-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About The M62 Charity
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Remembering the twelve people who lost their lives in the 1974
              M62 coach bombing and supporting veterans and families affected
              by terrorism.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white">
                Our Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                The M62 Charity was established in October 2025, following
                several years of charity events supporting veterans and
                families in honour and memory of the twelve people killed in
                the M62 coach bombing in 1974.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                The bombing took the lives of twelve innocent soldiers and
                civilians, including two young children who had been home on
                weekend leave and were travelling back to Catterick.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                The tragedy devastated many lives and continues to affect
                families today. The charity was created to ensure that the
                twelve people who lost their lives are remembered.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-gray-100 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900">
              What We Do
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900">
                  Supporting Veterans
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  The M62 Charity supports veterans in the Middleton, Oldham,
                  Royton and surrounding areas. When a referral is received,
                  the charity provides practical support based on the
                  individual's needs.
                </p>
              </div>

              <div className="rounded-lg bg-white p-8">
                <h3 className="text-xl font-bold text-gray-900">
                  Outreach & Advocacy
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  The charity carries out outreach work and acts as an
                  advocate for veterans and family members. Support can
                  include food parcels, help with forms or benefits, and
                  checking in with veterans who may be struggling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Twelve */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              The Twelve
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Written in memory of those who lost their lives, &quot;The
              Twelve&quot; is a poem written by the charity's founder as a
              tribute to their memory.
            </p>

            <div className="mt-10">
                <img
                    src="/poem.jpg"
                    alt="The Twelve, a poem written in memory of the twelve people who lost their lives in the 1974 M62 coach bombing"
                    className="mx-auto w-full max-w-2xl rounded-lg shadow-md"
                />
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-gray-900 px-6 py-20 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">
              Get Involved
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Find out about upcoming events and discover how you can support
              The M62 Charity.
            </p>

            <a
              href="/events"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              View Upcoming Events
            </a>
          </div>
        </section>
      </main>
    </>
  );
}