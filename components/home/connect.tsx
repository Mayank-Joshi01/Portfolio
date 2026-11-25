
"use client";

import { useState , useEffect} from "react";
import { submitForm } from "postdrop";



export default function Connect() {


  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
  if (status === "success" || status === "error") {
    const timer = setTimeout(() => {
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [status]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await submitForm({
        publicKey: process.env.NEXT_PUBLIC_POSTDROP_PUBLIC_KEY!,
        formData,
      });

      if (res.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="font-mono text-sm leading-7 mt-5">
      <p className="text-purple-400">"connect": {"{"}</p>

      <form
        onSubmit={handleSubmit}
        className="pl-5 md:pl-10 space-y-4 flex flex-col items-center"
      >
        {/* Name */}
        <div className="flex items-center ">
          <label htmlFor="name" className="text-purple-400">
            "name":
          </label>

          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder='"Your name"'
            required
            maxLength={100}
            className="bg-transparent outline-none text-green-400 ml-2 placeholder:text-gray-600"
          />
        </div>

        {/* Email */}
        <div className="flex items-center flex-wrap">
          <label htmlFor="email" className="text-purple-400">
            "email":
          </label>

          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder='"Your email"'
            required
            maxLength={254}
            className="bg-transparent outline-none text-green-400 ml-2 placeholder:text-gray-600"
          />
        </div>

        {/* Message */}
        <div className="flex items-start flex-wrap ">
          <label htmlFor="message" className="text-purple-400">
            "message":
          </label>

          <textarea
            id="message"
            name="message"
            placeholder='"Your message"'
            required
            maxLength={100}
            rows={3}
            className="bg-transparent outline-none text-green-400 ml-2 placeholder:text-gray-600 resize-y min-w-0 flex-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-white bg-black px-3 rounded-md hover:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>

        {/* Submission Status */}
        {status === "success" && (
          <p className="text-green-400">
            // Message sent successfully! I'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400">
            // Something went wrong. Please try again.
          </p>
        )}
      </form>

      <p className="text-purple-400 pl-5">{"}"}</p>
      <p className="text-yellow-400">{"}"}</p>
    </section>
  );
}
