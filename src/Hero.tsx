import { useScroll, useTransform } from "framer-motion";
import { ProjectsIcon } from './icons/projects';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const rotateZ = useTransform(scrollY, [0, 1000], [0, 200])
  return <div className="flex flex-col lg:flex-row align-center justify-center min-h-screen">
    <div className="md:flex-1 flex flex-col mt-32 md:mt-44 2xl:mt-24">
      <h1 className="dark:text-dark-txt text-center lg:text-left lg:w-2 text-light-txt text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-3 2xl:mb-9 font-semibold">Vlad Petryshyn</h1>
      <h3 className="dark:text-dark-txt text-center lg:text-left text-light-txt text-3xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-semibold whitespace-nowrap">Front-end developer</h3>
    </div >
    <div className="justify-center align-center flex relative flex-1">
      <ProjectsIcon rotateZ={rotateZ} />
    </div>
  </div >
}
