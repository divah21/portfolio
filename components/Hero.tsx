import { Spotlight } from "./ui/Spotlight";
import { AnimatedBanners } from "./ui/AnimatedBanners";

const Hero = () => {
  const infor = [
    {
      quote:
        "With a passion for crafting innovative solutions, I specialize in building scalable and intuitive applications.",
      src: "/dee_view.png",
    },
    {
      quote:
        " With expertise in front-end and back-end technologies, I build seamless digital experiences that drive engagement and efficiency",
      src: "/ds-portfolio.webp",
    },
  ];
  return (
    <div className="pb-0 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen/1.5 w-full dark:bg-white-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <AnimatedBanners testimonials={infor} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
