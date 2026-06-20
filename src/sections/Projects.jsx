// import { ArrowUpRight } from "lucide-react";
// import { GitHubIcon } from "@/components/SocialIcons";
// import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// const projects = [
//   {
//     title: "Fintech Dashboard",
//     description:
//       "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
//     tags: ["React", "Typescript", "NodeJS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//     tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "AI Writing Assistant",
//     description:
//       "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
//     tags: ["React", "OpenAI", "Python", "FastAPI"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Project Management Tool",
//     description:
//       "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
//     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
//     tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
//     link: "#",
//     github: "#",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-32 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//   <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-glow-drift opacity-70" />
//   <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-highlight/15 blur-3xl animate-glow-drift animation-delay-300 opacity-60" />
//   <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-secondary/20 blur-3xl animate-glow-drift animation-delay-600 opacity-50" />

//   <div
//     className="absolute inset-0 opacity-[0.08]"
//     style={{
//       backgroundImage:
//         "linear-gradient(rgba(232,60,145,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(232,60,145,0.35) 1px, transparent 1px)",
//       backgroundSize: "80px 80px",
//     }}
//   />

//   {[...Array(18)].map((_, i) => (
//     <div
//       key={i}
//       className="absolute w-1.5 h-1.5 rounded-full bg-primary/70 animate-float"
//       style={{
//         left: `${Math.random() * 100}%`,
//         top: `${Math.random() * 100}%`,
//         animationDelay: `${Math.random() * 4}s`,
//         animationDuration: `${10 + Math.random() * 10}s`,
//       }}
//     />
//   ))}
// </div>
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               make an impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovative tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 
//                 bg-gradient-to-t from-card via-card/50
//                  to-transparent opacity-60"
//                 />
//                 {/* Overlay Links */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <GitHubIcon className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight
//                     className="w-5 h-5 
//                   text-muted-foreground group-hover:text-primary
//                    group-hover:translate-x-1 
//                    group-hover:-translate-y-1 transition-all"
//                   />
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12 animate-fade-in animation-delay-500">
//           <AnimatedBorderButton>
//             View All Projects
//             <ArrowUpRight className="w-5 h-5" />
//           </AnimatedBorderButton>
//         </div>
//       </div>
//     </section>
//   );
// };
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Assignment 4 — Portfolio & Contact Form",
    description:
      "A polished portfolio build with animated sections, responsive layout, and a contact form that stores submissions in localStorage.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    tags: ["React", "Vite", "CSS", "LocalStorage"],
    link: "https://darkwintech.github.io/assignement-4/",
    github: "https://github.com/darkwinTech/assignement-4",
  },
  {
    title: "Learn Hub",
    description:
      "A university peer-tutoring platform for finding tutors, booking sessions, saving favorites, and supporting admin workflows.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://github.com/darkwinTech/SWE363ProjectLearnHub",
    github: "https://github.com/darkwinTech/SWE363ProjectLearnHub",
  },
  {
    title: "Assignment 3 — Interactive Portfolio",
    description:
      "An upgraded portfolio with GitHub API integration, project filtering and sorting, randomized accent color, and validated contact form handling.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    tags: ["JavaScript", "APIs", "localStorage", "UI/UX"],
    link: "https://github.com/darkwinTech/assignment-3",
    github: "https://github.com/darkwinTech/assignment-3",
  },
  {
    title: "Assignment 2 — Dynamic Portfolio",
    description:
      "A more interactive portfolio featuring personalized greetings, section switching, project sorting, and a cat API with loading and error states.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    tags: ["JavaScript", "API", "localStorage", "Interaction"],
    link: "https://github.com/darkwinTech/assignment-2",
    github: "https://github.com/darkwinTech/assignment-2",
  },
  {
    title: "Assignment 1 — Responsive Portfolio",
    description:
      "Your first portfolio foundation, built with a sticky navigation bar, smooth scrolling, an about section, and an initial projects showcase.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    link: "https://github.com/darkwinTech/assignement-1",
    github: "https://github.com/darkwinTech/assignement-1",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow-drift opacity-70" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-highlight/15 blur-3xl animate-glow-drift animation-delay-300 opacity-60" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-3xl animate-glow-drift animation-delay-600 opacity-50" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,60,145,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(232,60,145,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="mt-4 mb-6 text-4xl font-bold text-secondary-foreground md:text-5xl animate-fade-in animation-delay-100">
            Projects that
            <span className="font-serif font-normal italic text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of your actual portfolio and university projects, from
            the early responsive version to the more advanced API-driven and
            full-stack builds.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass overflow-hidden rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-3 glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-3 glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <GitHubIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <p className="text-sm text-muted-foreground leading-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/50 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/darkwinTech?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};