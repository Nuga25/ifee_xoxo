import Button from "@/components/Button";
import Image from "next/image";

const projectsPage = () => {
  return (
    <section className="space-y-16 my-40 px-32 relative">
      <Image
        src="/assets/dots-small.svg"
        alt="Background pattern"
        width={80}
        height={80}
        className="absolute top-16 right-60 w-10 sm:w-16"
      />
      <Image
        src="/assets/ellipse-large.png"
        alt="Background pattern"
        width={80}
        height={80}
        className="absolute top-56 -left-40 w-[250px] sm:w-[500px]"
      />

      <div>
        <h2 className="font-semibold text-[32px] flex items-center mb-6">
          <span className="text-my-primary">#</span>projects/achievements{" "}
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

        <div className="flex justify-between w-[70%] mx-auto my-16">
          <Button>Projects</Button>
          <Button>Achievements</Button>
        </div>

        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div className="h-[260px] w-[220px] bg-my-primary"></div>
          <div className="h-[260px] w-[220px] bg-my-primary"></div>
          <div className="h-[260px] w-[220px] bg-my-primary"></div>
        </div>
        <p className="flex justify-end my-10 mr-10">
          view all{" "}
          <Image
            src="/assets/view-all-arrow.svg"
            alt="arrow icon"
            width={20}
            height={20}
            className="inline-block ml-2"
          />
        </p>
      </div>
    </section>
  );
};

export default projectsPage;
