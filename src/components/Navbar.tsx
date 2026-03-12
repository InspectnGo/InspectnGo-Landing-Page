import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-form py-3">
        <div className="mx-auto flex max-w-[1184px] items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 py-2 font-sans text-3xl font-bold tracking-tight text-ing-heading"
          >
            InspectnGO
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
      </nav>

      {/* Full-screen mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white w-[100vw] h-[100vh] md:hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-3 shadow-form">
            <Link
              to="/"
              className="shrink-0 py-2 font-sans text-3xl font-bold tracking-tight text-ing-heading"
              onClick={() => setMobileOpen(false)}
            >
              InspectnGO
            </Link>
            <button
              className="p-2 text-ing-body"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav items + CTA */}
          <div className="flex flex-1 flex-col px-6 py-16">
            <div className="flex flex-1 flex-col gap-6">
              <Link
                to="/partners"
                className="py-4 font-manrope text-2xl tracking-[-0.64px] text-ing-body"
                onClick={() => setMobileOpen(false)}
              >
                Partners
              </Link>
              <Link
                to="/about"
                className="py-4 font-manrope text-2xl tracking-[-0.64px] text-ing-body"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </div>

            <a
              href="#signup"
              className="inline-flex w-full items-center justify-center rounded-full bg-ing-accent px-6 py-3 font-manrope text-lg font-bold tracking-[-0.24px] text-ing-body hover:brightness-90 transition"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
