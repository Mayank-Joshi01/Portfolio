
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Social() {
  return (
    <section className="font-mono text-sm leading-7 mt-5">
      <p className="text-purple-400">"social": [</p>

      <div className="pl-10 flex items-center gap-6 py-3 justify-center">
        <a
          href="https://github.com/Mayank-Joshi01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group relative text-[#cbd5e1]"
        >
          <FiGithub className="text-2xl" />
          <span className="absolute left-1/2 -translate-x-1/2 top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all whitespace-nowrap">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/mayank-joshi-0123abc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group relative text-[#cbd5e1]"
        >
          <SlSocialLinkedin className="text-2xl" />
          <span className="absolute left-1/2 -translate-x-1/2 top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all whitespace-nowrap">
            LinkedIn
          </span>
        </a>

        <a
          href="mailto:mayankjoshi.in.123@gmail.com"
          aria-label="Email"
          className="group relative text-[#cbd5e1]"
        >
          <CiMail className="text-2xl" />
          <span className="absolute left-1/2 -translate-x-1/2 top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all whitespace-nowrap">
            Email
          </span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="group relative text-[#cbd5e1]"
        >
          <IoDocumentTextOutline className="text-2xl" />
          <span className="absolute left-1/2 -translate-x-1/2 top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all whitespace-nowrap">
            Resume
          </span>
        </a>
      </div>

      <p className="text-purple-400">],</p>
    </section>
  );
}
