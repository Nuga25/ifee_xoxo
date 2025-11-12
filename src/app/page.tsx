"use client";

import Button from "@/components/Button";
import FloatingRobot from "@/components/FloatingRobot";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0F] overflow-hidden">
      {/* bg images */}
      <Image
        src="/assets/dots-small.svg"
        alt="Background pattern"
        className="absolute top-16 left-10 sm:left-40 md:left-80 w-10 sm:w-16"
        width={80}
        height={80}
      />
      <Image
        src="/assets/pattern-small.svg"
        alt="Background pattern"
        className="absolute top-64 right-0 w-10 sm:w-16"
        width={80}
        height={80}
      />
      <Image
        src="/assets/pattern-big.svg"
        alt="Background pattern"
        className="absolute top-96 left-10 sm:left-1/4 w-20 sm:w-36"
        width={140}
        height={140}
      />
      <Image
        src="/assets/dots-small.svg"
        alt="Background pattern"
        className="absolute top-[75%] right-10 sm:right-44 w-10 sm:w-16"
        width={80}
        height={80}
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="Background pattern"
        className="absolute top-[-150px] right-[-150px] w-[250px] sm:w-[540px]"
        width={540}
        height={540}
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="Background pattern"
        className="absolute top-[420px] left-[-120px] w-[250px] sm:w-[540px]"
        width={540}
        height={540}
      />

      <section className="relative z-10">
        <header>
          <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between w-[90%] sm:w-[70%] md:w-[55%] h-14 sm:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={35}
              height={35}
              className="sm:w-[50px]"
            />

            <div>
              <ul className="flex gap-4 sm:gap-6 md:gap-8 text-text-light font-bold text-[14px] sm:text-[18px] md:text-[22px]">
                <li>
                  <a href="">
                    <span className="text-my-primary text-[18px] sm:text-[25px]">
                      #
                    </span>
                    home
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="text-my-primary text-[18px] sm:text-[25px]">
                      #
                    </span>
                    about
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="text-my-primary text-[18px] sm:text-[25px]">
                      #
                    </span>
                    projects
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="text-my-primary text-[18px] sm:text-[25px]">
                      #
                    </span>
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="text-white min-h-screen px-4 sm:px-8">
          <section className="max-h-[100vh]">
            <div className="min-h-[73vh] md:min-h-[60vh] h-full flex flex-col justify-center mt-24">
              <div className="text-center pt-28 sm:pt-36">
                <h3 className="font-bold text-[20px] sm:text-[28px] md:text-[30px]">
                  Hi, i&apos;m{" "}
                  <span className="text-my-primary">Ifeoluwa Osinuga</span>
                </h3>
                <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px] mt-5">
                  &lt;Software Engineer/&gt;
                </h1>
              </div>
            </div>

            <div className="flex justify-between items-end relative gap-2 sm:gap-0">
              {/* Left: buttons */}
              <div className="flex flex-col gap-3 sm:ml-6">
                <Button>Download CV</Button>
                <Button>View Projects</Button>
              </div>

              {/* Center: arrow */}
              <div className="mb-3 sm:mb-4 md:block hidden">
                <Image
                  src="/assets/arrow.svg"
                  alt="arrow icon"
                  width={30}
                  height={30}
                  className="sm:w-[60px]"
                />
              </div>

              {/* Right: robot + button */}
              <div className="sm:mr-6">
                <FloatingRobot />
              </div>
            </div>
          </section>
        </main>

        {/* social links */}
        <div className="fixed top-0 left-3 sm:left-6 z-20">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/line-vertical.png"
              alt="line"
              width={2}
              height={0}
              className="h-52"
            />
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 mt-6 sm:mt-10">
            <a href="https://github.com/Nuga25" target="_blank">
              <Image
                src="/assets/github-icon.svg"
                alt="GitHub"
                width={35}
                height={35}
                className="sm:w-[50px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/osinugaifeoluwa/"
              target="_blank"
            >
              <Image
                src="/assets/linkedin-icon.svg"
                alt="LinkedIn"
                width={35}
                height={35}
                className="sm:w-[50px]"
              />
            </a>
            <a href="mailto:osinugaifeoluwa1@gmail.com" target="_blank">
              <Image
                src="/assets/gmail-icon.svg"
                alt="Gmail"
                width={35}
                height={35}
                className="sm:w-[50px]"
              />
            </a>
            <a href="https://wa.me/+2349160591907" target="_blank">
              <Image
                src="/assets/whatsapp-icon.svg"
                alt="WhatsApp"
                width={35}
                height={35}
                className="sm:w-[50px]"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
