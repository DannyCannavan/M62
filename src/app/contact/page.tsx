"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",// added states for what is sent in the form
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target; //changes the state when the user is typing 

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <main>
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Get in touch with The M62 Charity to find out more about our work,
            events and how you can get involved.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              If you would like to find out more about The M62 Charity,
              support our work or ask about an upcoming event, please get in
              touch.
            </p>

            <p className="mt-6 text-gray-600">
              Contact details will be added here once confirmed by the
              charity.
            </p>
          </div>

          <div className="rounded-lg bg-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900"
                />
              </div>

              <button type="submit"
                className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}