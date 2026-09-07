export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-gray-900">
          M62 Charity
        </a>

        <div className="flex gap-6">
          <a
            href="/"
            className="text-gray-700 transition hover:text-black"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-gray-700 transition hover:text-black"
          >
            About
          </a>

          <a
            href="/events"
            className="text-gray-700 transition hover:text-black"
          >
            Events
          </a>

          <a
            href="/contact"
            className="text-gray-700 transition hover:text-black"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}