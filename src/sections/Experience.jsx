const experiences = [
  {
    period: "05/2026",
    role: "Software Testing Engineer",
    company: "Fuzzing Project",
    description:
      "Conducted automated software testing using AFL++ and AddressSanitizer to identify crashes and security vulnerabilities in bzip2. Performed coverage-guided fuzzing, analyzed software behavior, and documented findings to improve software reliability and robustness.",
    technologies: ["AFL++", "AddressSanitizer", "Software Testing", "Linux"],
    current: true,
  },
  {
    period: "01/2025",
    role: "Database Developer",
    company: "Horse Management System",
    description:
      "Designed and implemented a relational database system to manage horse information, training records, and operational data. Developed SQL queries and applied database design principles to ensure scalability and data integrity.",
    technologies: ["SQL", "MySQL", "Database Design"],
    current: false,
  },
  {
    period: "11/2024",
    role: "Frontend Developer",
    company: "Personal Portfolio Website",
    description:
      "Developed and deployed a responsive personal portfolio website to showcase technical projects and skills. Implemented modern web development practices and maintained content using frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    current: false,
  },
  {
    period: "07/2024",
    role: "Full-Stack Developer",
    company: "Learn Hub",
    description:
      "Designed and developed a full-stack educational platform to support student engagement and educational services. Created UI/UX designs using Figma and integrated frontend components with backend services and databases.",
    technologies: ["React", "JavaScript", "Figma", "MySQL"],
    current: false,
  },
  {
    period: "06/2023",
    role: "Software Engineering Team Member",
    company: "KFUPM Student Impact Hub",
    description:
      "Collaborated within a multidisciplinary team to develop a community service platform connecting students and organizations. Contributed to requirements gathering, system analysis, UI design, and software development activities.",
    technologies: ["Requirements Engineering", "UI Design", "Teamwork"],
    current: false,
  },
  {
    period: "08/2022",
    role: "Machine Learning Developer",
    company: "Car Classification System",
    description:
      "Developed a machine learning model to classify used vehicles in Saudi Arabia. Performed data preprocessing, feature engineering, model training, and evaluation to improve prediction accuracy.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Projects I worked on during my academic journey, showcasing my skills and passion for software development and engineering. 
            Each experience reflects my commitment to learning and growth in the field.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};