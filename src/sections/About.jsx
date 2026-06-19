import { Code2, GraduationCap, Sparkles, Database } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Software Engineering student at KFUPM.",
  },
  {
    icon: Code2,
    title: "Languages",
    description: "Java, Python, HTML, CSS, JavaScript.",
  },
  {
    icon: Sparkles,
    title: "Focus",
    description: "Full-stack development and modern UI.",
  },
  {
    icon: Database,
    title: "Tools",
    description: "MySQL, React, Git, VS Code.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Building thoughtful digital experiences{" "}
                <span className="font-serif italic font-normal text-secondary-foreground">
                  with code and creativity.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This is Aleen, a Software Engineering student at KFUPM with a strong
                interest in full-stack development and building modern,
                efficient, and user-friendly applications.
              </p>
              <p>
                I enjoy turning ideas into clean, responsive interfaces and
                learning the tools that help me build better products. My
                current stack includes Java, Python, HTML, CSS, JavaScript,
                React, and MySQL.
              </p>
              <p>
                Outside of coding, I stay curious, keep learning, and look for
                ways to improve both my technical and design skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                “I want to build projects that are not only functional, but
                also polished, intuitive, and meaningful.”
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

            <div className="sm:col-span-2 glass-strong rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    What I care about
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear structure, smooth interactions, and designs that feel
                    personal. I like building projects that show both technical
                    ability and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};