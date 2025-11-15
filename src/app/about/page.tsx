import React from "react";
import Image from "next/image";

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git & GitHub",
  "Figma",
  "Firebase",
];

const aboutPage = () => {
  return (
    <section id="about" className="relative my-20 space-y-16">
      <Image
        src="/assets/line-horizontal.png"
        alt="line"
        width={0}
        height={0}
        className="w-96 h-[0.5px] sm:w-96 mx-auto mt-32 mb-36"
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="bg"
        width={540}
        height={540}
        className="absolute top-[-200px] left-0 w-[200px] sm:w-[400px] opacity-20"
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="bg"
        width={540}
        height={540}
        className="absolute -bottom-40 -right-44 w-[200px] sm:w-[600px]"
      />
      <Image
        src="/assets/pattern-big.svg"
        alt="bg"
        width={540}
        height={540}
        className="absolute -bottom-40 -left-10 w-[50px] sm:w-[110px] opacity-30"
      />

      <div className="flex lg:flex-row flex-col gap-20 justify-between items-center px-5 sm:px-32 w-full">
        <div className="flex-[1.2]">
          <h2 className="font-semibold text-[24px] lg:text-[32px] flex items-center mb-6">
            <span className="text-my-primary">#</span>about-me{" "}
            <span className="ml-6">
              <Image
                src="/assets/line.png"
                alt="line"
                width={22}
                height={1}
                className="sm:60 w-32 h-[0.5px]"
              />
            </span>
          </h2>
          <p>
            I&apos;m a creative technologist and front-end developer who loves
            transforming ideas into interactive digital experiences. My work
            blends art and logic — crafting clean code wrapped in thoughtful
            design.
            <br /> <br /> I&apos;m passionate about building interfaces that not
            only look beautiful but feel alive, combining sleek aesthetics with
            smooth user interactions. <br /> <br />
            Whether it&apos;s experimenting with motion, optimizing for
            accessibility, or designing for the future web, I approach every
            project with curiosity, precision, and a deep love for technology as
            an art form.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/my-picture-.png"
            alt="my portrait"
            width={300}
            height={270}
            className=" sm:mt-6 mt-14"
          />
        </div>
      </div>

      <div className="mx-auto w-[95%] sm:w-[75%] px-4 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm font-semibold shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]">
        <p className="text-[22px]">
          <span className="text-my-primary text-[26px]">/</span>skills
        </p>

        <div className="flex flex-wrap gap-3 text-[14px] font-light mt-5">
          {skills.map((skill) => (
            <p
              key={skill}
              className="px-2 sm:px-3 py-1 sm:py-2 flex items-center justify-between rounded-full bg-white/5 backdrop-blur-sm shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)]"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default aboutPage;
