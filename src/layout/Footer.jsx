import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/darkwinTech", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/aleen-alqarni-b92bb7319", label: "LinkedIn" }
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-baseline gap-1">
  <span className="font-serif italic text-primary">Aleen AlQarni</span>
</a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Aleen AlQarni. 
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
  key={social.label}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={social.label}
  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
>
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};