
export default function Connect() {
  return (
    <section className="font-mono text-sm leading-7 mt-5">
      <p className="text-purple-400">"connect": {"{"}</p>

      <form className="pl-10 space-y-3 flex flex-col justify-center ">

        <div className="flex items-center justify-center">
          <label htmlFor="name" className="text-purple-400">
            "name": 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder='"Your name"'
            className="bg-transparent outline-none text-green-400 ml-2"
          />
        </div>

        <div className="flex items-center justify-center">
          <label htmlFor="email" className="text-purple-400">
            "email":
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder='"Your email"'
            className="bg-transparent outline-none text-green-400 ml-2"
          />
        </div>

        <div className="flex items-center justify-center">
          <label htmlFor="message" className="text-purple-400">
            "message":
          </label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder='"Your message"'
            className="bg-transparent outline-none text-green-400 ml-2"
          />
        </div>

        <button
          type="submit"
          className="text-blue-400"
        >
          {"Submit"}
        </button>

      </form>

      <p className="text-purple-400 pl-5">{"}"}</p>
      <p className="text-yellow-400">{"}"}</p>
    </section>
  );
}
