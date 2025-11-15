"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import FloatingRobot from "@/components/FloatingRobot";
import Image from "next/image";

const titles = [
  "<Software Engineer/>",
  "<Web Developer/>",
  "<Frontend Engineer/>",
  "<Web Designer/>",
];

export default function Home() {
  const [index, setIndex] = useState(0); // current title
  const [subIndex, setsubIndex] = useState(0); // current letter
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); //pause at end
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % titles.length); // next title
      }, 0);
      return;
    }

    const timeout = setTimeout(() => {
      setsubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

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
        className="absolute top-96 left-10 sm:left-1/4 w-20 sm:w-36 opacity-30"
        width={140}
        height={140}
      />
      <Image
        src="/assets/dots-small.svg"
        alt="Background pattern"
        className="absolute top-[650px] right-10 sm:right-44 w-10 sm:w-16"
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
          <nav className="z-20 fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between w-[90%] sm:w-[70%] md:w-[55%] h-14 sm:h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
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
          <section className="max-h-[100vh]" id="home">
            <div className="min-h-[73vh] md:min-h-[60vh] h-full flex flex-col justify-center mt-24">
              <div className="text-center pt-28 sm:pt-36">
                <h3 className="font-bold text-[20px] sm:text-[28px] md:text-[30px]">
                  Hi, i&apos;m{" "}
                  <span className="text-my-primary">Ifeoluwa Osinuga</span>
                </h3>
                <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px] mt-5">
                  {titles[index].substring(0, subIndex)}
                  <span className="inline-block w-[1ch]">
                    {blink ? "|" : "|"}
                  </span>
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
              <div className="sticky bottom-2 ">
                <a href="#about">
                  <Image
                    src="/assets/arrow.svg"
                    alt="arrow icon"
                    width={30}
                    height={30}
                    className="sm:w-[60px] animate-bounce cursor-pointer z-10"
                  />
                </a>
              </div>

              {/* Right: robot + button */}
              <div className="sm:mr-6">
                <FloatingRobot />
              </div>
            </div>
          </section>

          <section id="about" className="relative min-h-[100vh]">
            <Image
              src="/assets/line-horizontal.png"
              alt="line"
              width={0}
              height={0}
              className="w-96 h-[0.5px] sm:w-96 mx-auto mt-32 mb-36"
            />

            <div className="flex justify-between items-center px-32 w-full">
              <div className="flex-[1.2]">
                <h2 className="font-semibold text-[32px] flex items-center mb-6">
                  <span className="text-my-primary">#</span>about-me{" "}
                  <span className="ml-6">
                    <Image
                      src="/assets/line.png"
                      alt="line"
                      width={32}
                      height={1}
                      className="w-60 h-[0.5px]"
                    />
                  </span>
                </h2>
                <p>
                  I&apos;m a creative technologist and front-end developer who
                  loves transforming ideas into interactive digital experiences.
                  My work blends art and logic — crafting clean code wrapped in
                  thoughtful design.
                  <br /> <br /> I&apos;m passionate about building interfaces
                  that not only look beautiful but feel alive, combining sleek
                  aesthetics with smooth user interactions. <br /> <br />
                  Whether it&apos;s experimenting with motion, optimizing for
                  accessibility, or designing for the future web, I approach
                  every project with curiosity, precision, and a deep love for
                  technology as an art form.
                </p>
              </div>
              <div className="flex-1 justify-self-end">
                <Image
                  src="/images/my-picture-.png"
                  alt="my portrait"
                  width={300}
                  height={270}
                  className="ml-56 mt-6"
                />
              </div>
            </div>

            <div className="absolute top-[600px] left-1/2 transform -translate-x-1/2 mx-auto w-[70%] px-4 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm font-semibold shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
              <p className="text-[22px]">
                <span className="text-my-primary text-[26px]">/</span>skills
              </p>
              <div className="flex flex-wrap gap-3 text-[14px] font-light mt-5">
                <p className="px-2 sm:px-3 py-1 sm:py-2 flex items-center justify-between rounded-full bg-white/5 backdrop-blur-sm shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
                  React.js
                </p>
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
