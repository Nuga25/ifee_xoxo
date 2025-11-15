import Image from "next/image";

const contactPage = () => {
  return (
    <section
      id="contact"
      className="space-y-16 mt-40 mb-20 px-5 sm:px-32 relative"
    >
      <Image
        src="/assets/dots-large.svg"
        alt="Background pattern"
        width={80}
        height={80}
        className="absolute top-[460px] md:top-96 -left-10 md:left-0 w-36 sm:w-60"
      />
      <Image
        src="/assets/pattern-big.svg"
        alt="Background pattern"
        width={80}
        height={80}
        className="absolute -top-14 -right-10 w-20 sm:w-32 opacity-40"
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="Background pattern"
        width={80}
        height={80}
        className="absolute -bottom-96 -right-52 w-[250px] sm:w-[640px]"
      />

      <div>
        <h2 className="font-semibold text-[24px] lg:text-[32px] flex items-center mb-6">
          <span className="text-my-primary">#</span>contact-me{" "}
          <span className="ml-6">
            <Image
              src="/assets/line.png"
              alt="line"
              width={32}
              height={1}
              className="w-32 sm:w-60 h-[0.5px]"
            />
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-20 mt-20">
          <form
            action="#"
            className="flex flex-col flex-1 gap-4 px-4 sm:px-8 py-8 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-[inset_1px_0.5px_2px_rgba(255,255,255,0.9)]"
          >
            <div className="flex flex-col w-[100%]">
              <label
                htmlFor="fullName"
                className="flex items-center gap-2 font-medium text-[14px] mb-2"
              >
                <span className="w-3 h-3 bg-my-primary inline-block"></span>
                Fullname:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="border border-my-primary/50 rounded-md focus:outline-1 focus:outline-my-primary/70 px-3 py-2 w-[100%] text-bg-dark font-normal h-8"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label
                htmlFor="email"
                className="flex items-center gap-2 font-medium text-[14px] mb-2"
              >
                <span className="w-3 h-3 bg-my-primary inline-block"></span>
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border border-my-primary/50 rounded-md focus:outline-1 focus:outline-my-primary/70 px-3 py-2 w-[100%] text-bg-dark font-normal h-8"
              />
            </div>

            <div className="flex flex-col w-[100%]">
              <label
                htmlFor="message"
                className="flex items-center gap-2 font-medium text-[14px] mb-2"
              >
                <span className="w-3 h-3 bg-my-primary inline-block"></span>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-my-primary/50 rounded-md focus:outline-1 focus:outline-my-primary/70 px-3 py-2 w-[100%] text-bg-dark font-normal h-24 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start mt-7 px-6 py-2 text-sm font-bold text-white
              bg-my-primary border border-white/20
              rounded-lg shadow-md transition-all
              hover:shadow-[0_0_10px_#C778DD,0_0_30px_#C778DD]
              focus:outline-none focus:ring-2 focus:ring-[#C778DD]/50 w-[100%]"
            >
              Send Message
            </button>
          </form>

          <div className="flex-1 flex flex-col items-center justify-between text-center text-[14px]">
            <Image
              src="/animations/miku.gif"
              alt="dancing gif"
              width={200}
              height={200}
              className="w-[240px] h-[350px]"
            />
            <p>Thank you for visiting my website!!!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPage;
