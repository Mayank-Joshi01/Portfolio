
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "problem",
    content:
      "Building a backend just to handle contact forms is unnecessary overhead for many developers. It requires setting up API routes, configuring SMTP services, managing email delivery, handling spam, and maintaining server-side infrastructure.",
  },
  {
    title: "solution",
    content:
      "PostDrop provides a lightweight, headless form backend that handles form submissions and delivers them directly to your inbox. Developers can connect their existing HTML forms without building or maintaining their own form-processing APIs.",
  },
];

const features = [
  {
    name: "Zero Backend Setup",
    description:
      "Connect your existing forms using a simple endpoint or JavaScript integration. No need to create API routes, configure SMTP, or maintain additional backend infrastructure.",
  },
  {
    name: "Multiple Integration Methods",
    description:
      "Supports standard HTML forms, JavaScript Fetch API, CDN-based integration, an npm package, and dedicated React and Next.js workflows.",
  },
  {
    name: "AJAX Form Submissions",
    description:
      "Submit forms asynchronously using JavaScript without forcing a page reload, allowing developers to build smoother form experiences.",
  },
  {
    name: "Spam Protection",
    description:
      "Includes honeypot-based spam protection to help identify and filter automated bot submissions.",
  },
  {
    name: "Allowed Domains",
    description:
      "Restrict form submissions to configured domains, helping prevent unauthorized websites from using your public form endpoint.",
  },
  {
    name: "Email Notifications",
    description:
      "Receive form submissions directly in your inbox without having to build and maintain your own email delivery workflow.",
  },
  {
    name: "Static Website Support",
    description:
      "Works with static websites and frontend-only applications, making it useful for portfolios, landing pages, documentation sites, and small business websites.",
  },
  {
    name: "Lightweight Integration",
    description:
      "Designed to keep integration simple, with minimal setup and no unnecessary dependencies in the client-side workflow.",
  },
];

const integrations = [
  "HTML Forms",
  "JavaScript Fetch API",
  "CDN Script",
  "NPM Package",
  "React",
  "Next.js",
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    technologies: ["MongoDB"],
  },
  {
    category: "Storage",
    technologies: ["Cloudflare R2"],
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
            href="https://postdrop.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Project ↗
          </a>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Github Repo ↗
          </a>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {/* Project Header */}
        <section className="space-y-4">
          <p className="text-yellow-400">{"{"}</p>

          <p className="pl-5 text-purple-400">
            "name": <span className="text-green-400">"PostDrop"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "type": <span className="text-green-400">"SaaS / Developer Tool"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "category": <span className="text-green-400">"Headless Form Backend"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "website": <span className="text-green-400">"https://postdrop.online"</span>,
          </p>

          <div className="flex justify-center py-5">
            <Image
              src="/images/Postdrop.webp"
              alt="PostDrop dashboard and interface"
              width={1200}
              height={600}
              className="rounded-2xl w-full max-w-4xl h-auto"
              loading="eager"
            />
          </div>

          <p className="pl-5 text-purple-400">"overview": {"{"}</p>

          <div className="pl-10 space-y-3">
            <p className="text-purple-400">"description":</p>
            <p className="pl-5 text-green-400 leading-7">
              "PostDrop is a lightweight, headless form backend that enables
              developers to receive website form submissions directly in
              their inbox without building backend APIs or configuring
              SMTP infrastructure. It provides a simple integration layer
              between frontend forms and email delivery, allowing developers
              to focus on building their applications instead of managing
              form-processing infrastructure."
            </p>

            <p className="text-purple-400">"mission":</p>
            <p className="pl-5 text-green-400 leading-7">
              "Make form handling simple, accessible, and hassle-free for
              every developer, especially those building static websites
              and frontend-focused applications."
            </p>
          </div>

          <p className="pl-5 text-purple-400">{"},"}</p>
        </section>

        {/* Problem and Solution */}
        <section className="space-y-4">
          <p className="text-purple-400">"problem_and_solution": {"{"}</p>

          {sections.map((section) => (
            <div key={section.title} className="pl-10 space-y-2">
              <p className="text-purple-400">"{section.title}":</p>
              <p className="pl-5 text-green-400 leading-7">
                "{section.content}"
              </p>
            </div>
          ))}

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* How It Works */}
        <section className="space-y-4">
          <p className="text-purple-400">"how_it_works": {"{"}</p>

          <div className="pl-10 space-y-4">
            {[
              [
                "01",
                "Form Integration",
                "The developer connects an existing website form to PostDrop using the provided endpoint, CDN script, or npm package.",
              ],
              [
                "02",
                "Form Submission",
                "When a visitor submits the form, the frontend sends the submitted data to the PostDrop backend.",
              ],
              [
                "03",
                "Validation and Protection",
                "The backend processes the incoming submission and applies configured domain restrictions and spam protection.",
              ],
              [
                "04",
                "Email Delivery",
                "The validated submission is processed for email delivery, allowing the website owner to receive the information directly in their inbox.",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="space-y-1">
                <p className="text-yellow-400">{`// Step ${number}`}</p>
                <p className="text-purple-400">"{title}":</p>
                <p className="pl-5 text-green-400 leading-7">
                  "{description}"
                </p>
              </div>
            ))}
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Features */}
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

        {/* Integrations */}
        <section className="space-y-3">
          <p className="text-purple-400">"integration_methods": [</p>

          <div className="pl-10 text-green-400 space-y-2">
            {integrations.map((item, index) => (
              <p key={item}>
                "{item}"{index !== integrations.length - 1 ? "," : ""}
              </p>
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
                <div className="pl-5 text-yellow-400">
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

        {/* Product Vision */}
        <section className="space-y-3">
          <p className="text-purple-400">"future_vision":</p>

          <p className="pl-10 text-green-400 leading-7">
            "The long-term vision of PostDrop is to evolve into a reliable
            form management platform for developers, offering a simple
            integration experience while gradually expanding its capabilities
            around submission management, analytics, integrations, and
            developer-friendly workflows."
          </p>
        </section>

        {/* Footer */}
        <section className="space-y-3 pt-5">
          <p className="text-yellow-400">{"}"}</p>

          <div className="border-t border-gray-700 pt-5 mt-8 flex flex-wrap justify-between gap-3">
            <p className="text-gray-500">
              // Built to simplify form handling.
            </p>
            <a
              href="https://postdrop.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Explore PostDrop ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
