import { Linkedin, Twitter, Github, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">InspectnGo</span>
            <p className="footer-tagline">
               Affordable and fast vehicle inspections done right.
            </p>
          </div>

          <div className="footer-links">
            <Link to="/partners" className="footer-link">Partners</Link>
            <Link to="/about" className="footer-link">About</Link>
            <a href="#" className="footer-link">Contact Us</a>
          </div>

          <div className="footer-socials">
            <a href="#" className="footer-social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="footer-social-icon" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="footer-social-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="#" className="footer-social-icon" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="mailto:contact@inspectngo.com" className="footer-social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} InspectnGo. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
