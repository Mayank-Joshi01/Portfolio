
import Image from "next/image";

export default function Hero() {
  return (
    <section className="font-mono text-sm leading-7">
      <p className="text-yellow-400">{"{"}</p>

      <p className="pl-5 text-purple-400">
        "name": <span className="text-green-400">"Mayank Joshi"</span>,
      </p>

      <p className="pl-5 text-purple-400">
        "role": <span className="text-green-400">"Software Engineer"</span>,
      </p>

      <div className="flex items-center justify-center mb-5 mt-5">
        <Image
          src="/images/hero.webp"
          alt="Mayank Joshi"
          width={800}
          height={400}
          priority
          className="w-48 h-auto rounded-2xl"
        />
      </div>
    </section>
  );
}
