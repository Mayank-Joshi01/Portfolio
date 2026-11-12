
import { projectsList } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="font-mono text-sm leading-7 mt-5">
      <p className="text-purple-400">"projects": [</p>

      <div className="pl-10 space-y-4">
        {projectsList.map((project, index) => (
          <div key={project.id}>
            <p className="text-purple-400">
              {"{"}
            </p>

            <p className="pl-5 text-purple-400">
              "name": <span className="text-green-400">
                "{project.title}"
              </span>,
            </p>

            <p className="pl-5 text-purple-400">
              "description": <span className="text-green-400">
                "{project.description}"
              </span>,
            </p>

            <p className="pl-5 text-purple-400">
              "link": <Link
                href={project.url}
                className="text-blue-400 hover:underline"
              >
                "View Project"
              </Link>
            </p>

            <p className="text-purple-400">
              {"}"}{index !== projectsList.length - 1 ? "," : ""}
            </p>
          </div>
        ))}
      </div>

      <p className="text-purple-400">],</p>
    </section>
  );
}
