"use client";

import { useState } from "react";

import { contactSchema } from "@/lib/validation/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Clear messages when the user starts editing again
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      setError(result.error.issues[0].message);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
            <h2 className="text-3xl font-bold text-gray-300">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              If you would like to find out more about The M62 Charity,
              support our work or ask about an upcoming event, please get in
              touch.
            </p>

            <p className="mt-6 text-gray-400">
              Contact details will be added here once confirmed by the
              charity.
            </p>
          </div>

          <div className="rounded-lg bg-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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

              {error && (
                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-sm font-medium text-green-600">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}