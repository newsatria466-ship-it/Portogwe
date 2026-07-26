import { personalInfo, contactInfo, navLinks } from "../../constants/data";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-cream pt-16 pb-8 px-6 relative border-t-4 border-coral">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black text-coral mb-4">{personalInfo.name.toUpperCase()}.</h2>
            <p className="text-cream/70 font-medium mb-6 max-w-sm">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-4">
              {contactInfo.socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-cream text-dark border-2 border-cream hover:bg-coral hover:border-coral transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-mono mb-6 text-yellow">QUICK LINKS</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/70 hover:text-coral font-medium transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top & Info */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-4 bg-coral text-dark border-2 border-coral hover:bg-yellow hover:border-yellow font-black flex items-center gap-2 transition-colors group"
            >
              BACK TO TOP
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-cream/50">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>
            Built with React, Tailwind v4 & Framer Motion. 
            <span className="text-coral ml-1 font-bold">Neo Brutalism Style.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
