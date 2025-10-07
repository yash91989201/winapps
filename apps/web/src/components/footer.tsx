import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pb-4">
          {/* About */}
          <div className="space-y-4 md:w-2/5 lg:w-1/5">
            <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-white p-1 rounded">
                <img src="/logo.webp" alt="Logo" className="h-8" />
              </div>
              <span className="font-bold text-xl">Winapps</span>
            </Link>
            <p className="text-gray-400">
              Our moto is to "Materialize Concepts". Ideas are put into reality with a team of not only efficient dedicated persons but also of positive attitude professionals.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/pg/Winapps-PvtLtd-233477130147559/posts/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/winapps_software/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/winapps.co.in/posts/?feedView=all" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.006 1.806-2.006 1.806 0v8.396h4.98v-10.131c0-4.87-3.364-4.87-4.98-2.49v-3.379z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/5">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:sales@winapps.co.in" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  sales@winapps.co.in
                </a>
              </li>
              <li>
                <a href="skype:winapps.support?chat" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  contractor.winapps
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#technologies" className="text-gray-400 hover:text-white">Technologies</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center pt-4 mt-4">
          <p className="text-gray-500 text-sm">&copy; Since 2013-2025 Winapps. All rights reserved</p>
        </div>
      </div>
    </footer >
  );
}
