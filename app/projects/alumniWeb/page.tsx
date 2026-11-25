
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Custom Authentication System",
    description:
      "Implemented database-backed authentication with secure session management, password-based login, and email verification using OTP during registration. The platform also restricts registration to personal email addresses.",
  },
  {
    name: "Alumni Profiles",
    description:
      "Allows alumni to create and manage professional profiles containing personal information, academic background, graduation details, skills, and other relevant information.",
  },
  {
    name: "Alumni Search and Discovery",
    description:
      "Provides a searchable alumni directory that helps users discover and connect with other alumni based on their available profile information.",
  },
  {
    name: "Social Feed and Posts",
    description:
      "Enables users to create posts and share updates with the alumni community, creating a centralized space for communication, knowledge sharing, and professional interaction.",
  },
  {
    name: "Infinite Scroll Feed",
    description:
      "Uses cursor-based pagination to retrieve feed posts incrementally, reducing unnecessary data fetching and improving the experience when browsing large collections of posts.",
  },
  {
    name: "Saved Posts and Favourites",
    description:
      "Allows users to bookmark posts and access their saved content later through a dedicated favourites section.",
  },
  {
    name: "Real-Time Communication Foundation",
    description:
      "Includes a chat module and supporting database structures to establish direct communication between alumni members.",
  },
  {
    name: "Profile Management",
    description:
      "Provides profile editing functionality and profile image management, allowing users to maintain and update their information.",
  },
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Next.js API Routes", "Server-side Logic"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "Prisma ORM", "Supabase"],
  },
  {
    category: "Authentication",
    technologies: ["Custom Authentication", "Database Sessions", "OTP Verification"],
  },
  {
    category: "Email Services",
    technologies: ["Resend"],
  },
];

const engineeringHighlights = [
  {
    title: "Database Architecture",
    description:
      "Designed a relational database structure using PostgreSQL and Prisma, with interconnected entities for users, profiles, posts, favourites, and chat functionality.",
  },
  {
    title: "Cursor-Based Pagination",
    description:
      "Implemented an API-driven feed using cursor-based pagination, fetching posts in batches instead of loading the entire dataset at once.",
  },
  {
    title: "Authentication and Sessions",
    description:
      "Developed a custom authentication workflow with database-backed sessions, email verification, and password-based returning-user login.",
  },
  {
    title: "API and Data Management",
    description:
      "Structured backend endpoints and database operations to support profile management, post creation, feed retrieval, and user interactions.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#111827] text-sm font-mono text-gray-300 p-6 md:p-10">

      {/* Navigation */}
      <div className="flex justify-between items-center mb-5 gap-4 flex-wrap">
        <Link href="/" className="text-blue-400 hover:underline">
          {"<--"} Back
        </Link>

        <div className="flex gap-5 flex-wrap">
          <a
            href="https://github.com/Mayank-joshi123/alumini_web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Github Repo ↗
          </a>
        </div>
      </div>

      <div className="mt-10 space-y-8">

        {/* Project Information */}
        <section className="space-y-4">

          <p className="text-yellow-400">{"{"}</p>

          <p className="pl-5 text-purple-400">
            "name": <span className="text-green-400">"Alumni Web"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "type": <span className="text-green-400">"Full-Stack Web Application"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "category": <span className="text-green-400">"Alumni Networking Platform"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "status": <span className="text-yellow-400">"In Development"</span>,
          </p>

          <div className="flex justify-center mt-5 mb-3">
            <Image
              src="/images/AlumniWeb.webp"
              alt="Alumni Web Platform"
              width={1200}
              height={600}
              className="rounded-2xl w-full max-w-4xl h-auto"
              loading="eager"
            />
          </div>

          <p className="pl-5 text-purple-400">
            "description": <span className="text-green-400">
              "A full-stack alumni networking platform designed to connect
              graduates, build an active community, and facilitate professional
              networking through user profiles, searchable alumni directories,
              social feeds, and communication features."
            </span>,
          </p>

          <p className="pl-5 text-purple-400">
            "objective": <span className="text-green-400">
              "Build a centralized digital ecosystem where alumni can stay
              connected, share professional experiences, discover opportunities,
              and maintain long-term connections with their institution."
            </span>,
          </p>

          <p className="text-yellow-400">{"},"}</p>
        </section>

        {/* Problem and Solution */}
        <section className="space-y-4">

          <p className="text-purple-400">
            "problem_and_solution": {"{"}
          </p>

          <div className="pl-10 space-y-2">
            <p className="text-purple-400">"problem":</p>

            <p className="pl-5 text-green-400 leading-7">
              "Alumni communities often lack a centralized platform for
              maintaining connections after graduation. Professional
              information, contact details, achievements, and community
              interactions remain scattered across different platforms,
              making it difficult for institutions and graduates to
              maintain meaningful long-term relationships."
            </p>

            <p className="text-purple-400">"solution":</p>

            <p className="pl-5 text-green-400 leading-7">
              "Alumni Web aims to solve this problem by providing a dedicated
              platform where verified alumni can create profiles, discover
              other graduates, share updates, save useful posts, and
              communicate within a centralized community."
            </p>
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Core Features */}
        <section className="space-y-4">

          <p className="text-purple-400">"core_features": [</p>

          <div className="pl-10 space-y-5">
            {features.map((feature, index) => (
              <div key={feature.name} className="space-y-1">
                <p className="text-yellow-400">
                  {"{"} "feature": "{feature.name}",
                </p>

                <p className="pl-5 text-green-400 leading-7">
                  "description": "{feature.description}"
                </p>

                <p className="text-yellow-400">
                  {"}"}{index !== features.length - 1 ? "," : ""}
                </p>
              </div>
            ))}
          </div>

          <p className="text-purple-400">],</p>
        </section>

        {/* Authentication */}
        <section className="space-y-3">

          <p className="text-purple-400">
            "authentication_system": {"{"}
          </p>

          <div className="pl-10 space-y-2">
            <p className="text-purple-400">"approach":</p>

            <p className="pl-5 text-green-400 leading-7">
              "Custom database-backed authentication instead of relying on
              third-party authentication providers."
            </p>

            <p className="text-purple-400">"capabilities": [</p>

            <div className="pl-5 text-green-400 space-y-1">
              <p>"Email-based registration",</p>
              <p>"OTP-based email verification",</p>
              <p>"Personal email validation",</p>
              <p>"Password-based login",</p>
              <p>"Database-backed user sessions"</p>
            </div>

            <p className="text-purple-400">],</p>

            <p className="text-purple-400">"email_service":</p>
            <p className="pl-5 text-yellow-400">"Resend"</p>
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Backend Engineering */}
        <section className="space-y-4">

          <p className="text-purple-400">
            "backend_engineering": [
          </p>

          <div className="pl-10 space-y-5">
            {engineeringHighlights.map((item, index) => (
              <div key={item.title} className="space-y-1">
                <p className="text-yellow-400">
                  {"{"} "concept": "{item.title}",
                </p>

                <p className="pl-5 text-green-400 leading-7">
                  "implementation": "{item.description}"
                </p>

                <p className="text-yellow-400">
                  {"}"}{index !== engineeringHighlights.length - 1 ? "," : ""}
                </p>
              </div>
            ))}
          </div>

          <p className="text-purple-400">],</p>
        </section>

        {/* Tech Stack */}
        <section className="space-y-3">

          <p className="text-purple-400">"tech_stack": {"{"}</p>

          <div className="pl-10 space-y-4">
            {techStack.map((item) => (
              <div key={item.category}>
                <p className="text-purple-400">
                  "{item.category.toLowerCase()}":
                </p>

                <div className="pl-5 text-yellow-400 leading-7">
                  {item.technologies.map((technology, index) => (
                    <span key={technology}>
                      "{technology}"
                      {index !== item.technologies.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Development Status */}
        <section className="space-y-3">

          <p className="text-purple-400">
            "development_status": {"{"}
          </p>

          <div className="pl-10 space-y-2">
            <p className="text-purple-400">"phase":</p>

            <p className="pl-5 text-yellow-400">
              "Active Development / Pre-Production"
            </p>

            <p className="text-purple-400">"current_focus":</p>

            <p className="pl-5 text-green-400 leading-7">
              "Refining core application functionality, improving backend
              workflows, validating database operations, and preparing
              the platform for production deployment."
            </p>

            <p className="text-purple-400">"public_demo":</p>

            <p className="pl-5 text-yellow-400">false</p>
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Future Scope */}
        <section className="space-y-3">

          <p className="text-purple-400">"future_scope": [</p>

          <div className="pl-10 text-green-400 space-y-2">
            <p>"Advanced alumni discovery and filtering",</p>
            <p>"Improved networking and communication tools",</p>
            <p>"Job and internship opportunity sharing",</p>
            <p>"Community engagement and notifications",</p>
            <p>"Scalable infrastructure for a growing alumni network"</p>
          </div>

          <p className="text-purple-400">],</p>
        </section>

        {/* Closing */}
        <section className="space-y-3 pt-5">

          <p className="text-yellow-400">{"}"}</p>

          <div className="border-t border-gray-700 pt-5 mt-8 flex flex-wrap justify-between gap-3">
            <p className="text-gray-500">
              // Building stronger connections through technology.
            </p>

            <a
              href="https://github.com/Mayank-joshi123/alumini_web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Source Code ↗
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}
