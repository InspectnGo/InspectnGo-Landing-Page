import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-card py-4">
      <div className="mx-auto flex max-w-[1184px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0 p-2 font-sans text-3xl font-bold tracking-tight text-ing-heading">
          InspectnGo
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/partners"
            className="font-manrope text-lg tracking-[-0.24px] text-ing-body hover:text-ing-heading transition-colors"
          >
            Partners
          </Link>
          <Link
            to="/about"
            className="font-manrope text-lg tracking-[-0.24px] text-ing-body hover:text-ing-heading transition-colors"
          >
            About
          </Link>
          <a
            href="#signup"
            className="inline-flex min-w-[120px] items-center justify-center rounded-full bg-ing-accent px-6 py-3 font-manrope text-lg font-bold tracking-[-0.24px] text-ing-body hover:brightness-90 transition"
          >
            Sign up
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ing-body"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-ing-border bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              to="/partners"
              className="font-manrope text-lg text-ing-body"
              onClick={() => setMobileOpen(false)}
            >
              Partners
            </Link>
            <Link
              to="/about"
              className="font-manrope text-lg text-ing-body"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-full bg-ing-accent px-6 py-3 font-manrope text-lg font-bold text-ing-body"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
