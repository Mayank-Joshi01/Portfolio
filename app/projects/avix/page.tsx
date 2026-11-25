
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "AI Desktop Assistant",
    description:
      "An open-source desktop assistant concept designed to bring AI-powered interaction and productivity tools into a single native desktop application.",
  },
  {
    name: "Image Processing Utilities",
    description:
      "Includes image compression workflows designed to reduce image file sizes while maintaining visual quality.",
  },
  {
    name: "PDF Operations",
    description:
      "Provides document-processing workflows for performing common PDF operations directly from the desktop application.",
  },
  {
    name: "Native Desktop Integration",
    description:
      "Explores operating-system-level integration through Windows context menus, allowing users to launch file operations directly from File Explorer.",
  },
  {
    name: "AI-Powered Workflow Automation",
    description:
      "The broader vision includes using AI to execute commands, automate repetitive workflows, and simplify interactions with the desktop environment.",
  },
  {
    name: "File Management and System Interaction",
    description:
      "Designed with the goal of enabling users to interact with local files and system utilities through a unified desktop assistant.",
  },
];

const techStack = [
  {
    category: "Desktop Framework",
    technologies: ["Tauri"],
  },
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend and System Layer",
    technologies: ["Rust"],
  },
  {
    category: "Website",
    technologies: ["Next.js", "TypeScript"],
  },
];

const engineeringHighlights = [
  {
    title: "Native Desktop Architecture",
    description:
      "Explored Tauri's architecture to combine a web-based frontend with a native Rust backend, enabling desktop functionality without relying on a traditional browser-only application.",
  },
  {
    title: "Rust-Based System Operations",
    description:
      "Used Rust as the foundation for desktop-side operations, including file processing and communication between the frontend and native application.",
  },
  {
    title: "Operating System Integration",
    description:
      "Explored Windows Explorer context-menu integration to make application workflows accessible directly from the operating system.",
  },
  {
    title: "Modular Workflow Architecture",
    description:
      "Worked toward organizing individual utilities as separate workflows, making it easier to extend the application with additional file-processing operations.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#111827] text-sm font-mono p-6 md:p-10 text-gray-300">

      {/* Navigation */}
      <div className="flex justify-between items-center mb-5 gap-4 flex-wrap">
        <Link href="/" className="text-blue-400 hover:underline">
          {"<--"} Back
        </Link>

        <div className="flex gap-5 flex-wrap">
          <a
            href="https://avixai.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Project Website ↗
          </a>

          <a
            href="https://github.com/Mayank-joshi123/AVIX_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Github Repo ↗
          </a>
        </div>
      </div>

      <div className="mt-10 space-y-8">

        {/* Project Overview */}
        <section className="space-y-4">

          <p className="text-yellow-400">{"{"}</p>

          <p className="pl-5 text-purple-400">
            "name": <span className="text-green-400">"AVIX"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "type": <span className="text-green-400">"Open-Source Desktop Application"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "category": <span className="text-green-400">"AI Assistant / Productivity Tool"</span>,
          </p>

          <p className="pl-5 text-purple-400">
            "status": <span className="text-yellow-400">"Paused / Experimental"</span>,
          </p>

          <div className="flex justify-center mt-5 mb-3">
            <Image
              src="/images/Avix.webp"
              alt="AVIX AI Desktop Assistant"
              width={600}
              height={600}
              className="rounded-4xl w-full max-w-sm h-auto"
              loading="eager"
            />
          </div>

          <p className="pl-5 text-purple-400">
            "description": <span className="text-green-400">
              "AVIX is an open-source AI desktop assistant designed to bring
              intelligent interactions, system utilities, and workflow
              automation into a unified desktop application. Built around
              Tauri, React, and Rust, the project explores combining modern
              AI capabilities with native desktop functionality."
            </span>,
          </p>

          <p className="pl-5 text-purple-400">
            "vision": <span className="text-green-400">
              "Create a lightweight desktop companion that goes beyond
              conventional chat interfaces by helping users interact with
              their systems, manage files, execute tasks, and automate
              everyday workflows."
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
              "Most AI assistants operate primarily through isolated chat
              interfaces, while everyday desktop tasks still require users
              to switch between multiple applications and manually perform
              repetitive operations."
            </p>

            <p className="text-purple-400">"solution":</p>

            <p className="pl-5 text-green-400 leading-7">
              "AVIX explores the idea of a unified desktop assistant that
              combines AI interaction with native system utilities,
              providing a common interface for intelligent assistance
              and everyday productivity tasks."
            </p>
          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Features */}
        <section className="space-y-4">

          <p className="text-purple-400">"features_and_capabilities": [</p>

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

        {/* Technical Architecture */}
        <section className="space-y-3">

          <p className="text-purple-400">
            "technical_architecture": {"{"}
          </p>

          <div className="pl-10 space-y-3">

            <div>
              <p className="text-purple-400">"frontend":</p>
              <p className="pl-5 text-green-400">
                "React + TypeScript"
              </p>
            </div>

            <div>
              <p className="text-purple-400">"desktop_runtime":</p>
              <p className="pl-5 text-green-400">
                "Tauri"
              </p>
            </div>

            <div>
              <p className="text-purple-400">"native_backend":</p>
              <p className="pl-5 text-green-400">
                "Rust"
              </p>
            </div>

            <div>
              <p className="text-purple-400">"architecture_approach":</p>
              <p className="pl-5 text-green-400 leading-7">
                "A hybrid desktop architecture combining a web-based
                user interface with native system-level capabilities
                through the Rust backend."
              </p>
            </div>

          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Engineering Highlights */}
        <section className="space-y-4">

          <p className="text-purple-400">
            "engineering_highlights": [
          </p>

          <div className="pl-10 space-y-5">
            {engineeringHighlights.map((item, index) => (
              <div key={item.title} className="space-y-1">
                <p className="text-yellow-400">
                  {"{"} "concept": "{item.title}",
                </p>

                <p className="pl-5 text-green-400 leading-7">
                  "details": "{item.description}"
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

        {/* Project Status */}
        <section className="space-y-3">

          <p className="text-purple-400">
            "development_status": {"{"}
          </p>

          <div className="pl-10 space-y-2">

            <p className="text-purple-400">"current_status":</p>

            <p className="pl-5 text-yellow-400">
              "Paused / Not Actively Maintained"
            </p>

            <p className="text-purple-400">"development_note":</p>

            <p className="pl-5 text-green-400 leading-7">
              "AVIX was an experimental project exploring the intersection
              of AI, desktop applications, and native system integration.
              Development is currently paused, but the project provided
              valuable experience in desktop application architecture,
              Rust integration, and system-level workflows."
            </p>

            <p className="text-purple-400">"public_release":</p>

            <p className="pl-5 text-yellow-400">false</p>

          </div>

          <p className="text-purple-400">{"},"}</p>
        </section>

        {/* Closing */}
        <section className="space-y-3 pt-5">

          <p className="text-yellow-400">{"}"}</p>

          <div className="border-t border-gray-700 pt-5 mt-8 flex flex-wrap justify-between gap-3">

            <p className="text-gray-500">
              // Exploring AI beyond the browser.
            </p>

            <a
              href="https://github.com/Mayank-joshi123/AVIX_AI"
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
