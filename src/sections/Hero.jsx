import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import profileImage from "@/assets/AleenPic.png";

const skills = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MySQL",
  "Git",
  "GitHub",
  "Responsive Design",
  "Full-Stack",
  "Problem Solving",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Accent Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineering Student • Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">clean</span>
                <br />
                digital experiences
                <br />
                <span className="font-serif italic font-normal text-white">
                  with purpose.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I&apos;m Aleen — a Software Engineering student at KFUPM
                who is passionate about full-stack development and building
                modern, efficient, and user-friendly applications.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
              <p>
                I enjoy turning ideas into practical web experiences and
                continuously learning new technologies that help me grow as a
                developer.
              </p>
              <p>
                My current toolkit includes Java, Python, HTML, CSS,
                JavaScript, React, and MySQL.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: GitHubIcon, href: "#", label: "GitHub" },
                { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
                { icon: XIcon, href: "#", label: "X" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profileImage}
                  alt="Aleen AlQarni"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-highlight rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                    Open for GDP
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">KFUPM</div>
                  <div className="text-xs text-muted-foreground">
                    Software Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};