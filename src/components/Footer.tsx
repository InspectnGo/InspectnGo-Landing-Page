import { Link } from "react-router-dom";

const logoWhiteSrc =
  "https://www.figma.com/api/mcp/asset/56cfa45d-ca64-4069-900b-ba5c5c5b65db";

const Footer = () => {
  return (
    <footer className="bg-ing-brand">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 py-8 md:px-8">
        {/* Top */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Brand */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="p-2">
              <img
                src={logoWhiteSrc}
                alt="InspectnGo"
                className="h-[26px] w-auto"
              />
            </div>
            <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white">
              Affordable and fast vehicle inspections done right.
            </p>
            <a
              href="#signup"
              className="inline-flex w-fit items-center justify-center rounded-full bg-ing-accent px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-body hover:brightness-90 transition"
            >
              Sign up now
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="font-space text-[32px] leading-none tracking-[-0.64px] text-white">
              About us
            </h3>
            <Link
              to="/partners"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Partners
            </Link>
            <Link
              to="/about"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              About
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white">
            © {new Date().getFullYear()} InspectnGo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="font-manrope text-sm text-white hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-manrope text-sm text-white hover:underline"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
