import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministry Expressions" },
  // { to: '/podcast', label: 'Podcast' },
  { to: "/books", label: "Books" },
  { to: "/merch", label: "Merch" },
  { to: "/media", label: "Media" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "bg-navy/95 backdrop-blur-sm py-4 shadow-lg shadow-black/20"
            : scrolled
            ? "bg-navy/95 backdrop-blur-sm py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-accent text-gold text-xs tracking-widest2 uppercase mb-0.5">
              Esther Adetoun
            </span>
            <span className="font-display text-white text-xl font-light tracking-wider">
              Adeyeye
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-gold active"
                      : "text-white/80 hover:text-gold"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/pray-with-adetoun"
            className="hidden lg:inline-flex items-center gap-2 border border-gold/60 text-gold font-body text-xs tracking-widest uppercase px-6 py-2.5 hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Join Prayer
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {createPortal(
        <div
          style={{ backgroundColor: "#0d1f3c" }}
          className={`lg:hidden fixed inset-0 z-[99999] transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-8 pt-24 pb-12">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-3xl font-light transition-colors ${
                      isActive ? "text-gold" : "text-white hover:text-gold"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                to="/pray-with-adetoun"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Join Prayer
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}