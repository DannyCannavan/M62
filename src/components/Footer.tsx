export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-gray-900">M62 Charity</p>

          <p className="mt-1 text-sm text-gray-600">
            Remembering the twelve. Supporting veterans and families.
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900"
          >
            About
          </a>

          <a
            href="/events"
            className="text-gray-600 hover:text-gray-900"
          >
            Events
          </a>

          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}