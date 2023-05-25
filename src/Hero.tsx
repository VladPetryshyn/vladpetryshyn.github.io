import { useScroll, useTransform } from "framer-motion";
import { ProjectsIcon } from './icons/projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const rotateZ = useTransform(scrollY, [0, 1000], [0, 200])
  return <div className="flex flex-col align-between justify-between min-h-screen">
    <div className="flex flex-col mt-32 md:mt-44 2xl:mt-24">
      <h1 className="dark:text-dark-txt text-center lg:text-left lg:w-2 text-light-txt text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-3 2xl:mb-9 font-semibold">Vlad Petryshyn</h1>
      <h3 className="dark:text-dark-txt text-center lg:text-left text-light-txt text-3xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-semibold whitespace-nowrap">Front-end developer</h3>
    </div >
    <div className="items-start justify-center lg:justify-end flex relative -translate-y-32 md:-translate-y-44 lg:-translate-y-32 xl:-translate-y-44">
      <FontAwesomeIcon icon={faArrowDown} className="dark:text-dark-txt text-light-txt text-3xl absolute translate-y-20 md:text-6xl md:translate-y-32 lg:text-4xl lg:translate-y-24 lg:-translate-x-24 xl:text-5xl xl:-translate-x-28 xl:translate-y-24 2xl:text-5xl 2xl:translate-y-28 2xl:-translate-x-32" />
      <ProjectsIcon rotateZ={rotateZ} />
    </div>
  </div >
}
