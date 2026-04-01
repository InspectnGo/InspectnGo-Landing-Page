import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ing-brand">
      <div className="mx-auto flex max-w-[1184px] flex-col gap-8 px-6 py-8 md:px-8">
        {/* Top */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Brand */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="p-2">
              <img src="/inspectnGO-logo-white.svg" alt="InspectnGO" className="h-20 w-auto" />
            </div>
            <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white">
              Affordable and fast vehicle inspections done right.
            </p>
            <a
              href="/#signup"
              className="inline-flex w-fit items-center justify-center rounded-full bg-ing-accent px-6 py-3 font-manrope text-lg font-bold leading-[24px] tracking-[-0.24px] text-ing-body hover:brightness-90 transition"
            >
              Sign up now
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="font-heading font-bold text-[32px] leading-none tracking-[-0.64px] text-white">
              About us
            </h3>
            <Link
              to="/network"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Network
            </Link>
            <Link
              to="/about"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              About
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-1 flex-col gap-3">
            <h3 className="font-heading font-bold text-[32px] leading-none tracking-[-0.64px] text-white">
              Resources
            </h3>
            <Link
              to="/pre-purchase-car-inspection-vancouver"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Vancouver Inspections
            </Link>
            <Link
              to="/pre-purchase-car-inspection-burnaby"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Burnaby Inspections
            </Link>
            <Link
              to="/pre-purchase-car-inspection-surrey"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Surrey Inspections
            </Link>
            <Link
              to="/blog/pre-purchase-inspection-cost-bc"
              className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white hover:underline"
            >
              Inspection Costs in BC
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-manrope text-base leading-[22px] tracking-[-0.24px] text-white">
            © {new Date().getFullYear()} InspectnGO Automotive Services Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="font-manrope text-sm text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-manrope text-sm text-white hover:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
