
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#111827] text-sm font-mono p-6 md:p-10">

<div className="flex justify-between items-center mb-5">
      <Link href="/" className="text-blue-400 hover:underline">
        {"<--"} Back
      </Link>
      <div className="flex gap-5">
      <Link href="/" className="text-blue-400 hover:underline">
         Live Project↗
      </Link>
      <Link href="/" className="text-blue-400 hover:underline">
         Github Repo↗
      </Link>
      </div>
    </div>
      <div className="mt-10 space-y-3">

        <p className="text-yellow-400">{"{"}</p>

        <p className="pl-5 text-purple-400">
          "name": <span className="text-green-400">"Avix"</span>,
        </p>

        <p className="pl-5 text-purple-400">
          "type": <span className="text-green-400">"SaaS / Developer Tool"</span>,
        </p>
        <div className="flex justify-center mt-5 mb-3">
        <Image src={"/images/Avix.webp"} alt="Avix" width={400} height={400} className="rounded-4xl" />
        </div>
        <p className="pl-5 text-purple-400">
          "description": <span className="text-green-400">
            "A lightweight form backend that allows developers to receive
            form submissions directly in their inbox without building backend APIs."
          </span>,
        </p>

        <p className="pl-5 text-purple-400">"features": [</p>

        <div className="pl-10 text-green-400 space-y-1">
          <p>"No backend setup required",</p>
          <p>"AJAX form submissions",</p>
          <p>"Spam protection",</p>
          <p>"Allowed domains",</p>
          <p>"React and Next.js integration"</p>
        </div>

        <p className="pl-5 text-purple-400">],</p>

        <p className="pl-5 text-purple-400">"tech_stack": [</p>

        <div className="pl-10 text-yellow-400 space-y-1">
          <p>"Next.js",</p>
          <p>"Node.js / Express",</p>
          <p>"MongoDB",</p>
          <p>"Cloudflare R2"</p>
        </div>

        <p className="pl-5 text-purple-400">],</p>

        <p className="text-yellow-400">{"}"}</p>

      </div>
    </main>
  );
}
