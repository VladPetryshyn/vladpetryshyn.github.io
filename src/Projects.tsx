import { FC, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { projects, Project } from "../data.ts"

export const ProjectsSection = () => {
  return <main className="flex flex-col align-center pb-12 md:pb-36 xl2:pb-60">
    {projects.map((project) => <Item {...project} key={project.link} />)}
  </main>
}

const isBiggerThanLg = window.innerWidth >= 1024

const Item: FC<Project> = ({ icon, link, description, title }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const marginSpring = useSpring(useTransform(scrollYProgress, [0, 0.2], isBiggerThanLg ? [0, 50] : [110, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const translateX = useTransform(marginSpring, (value) => `${value}%`)
  const translateX2 = useTransform(translateX, (value) => `-${value}`)
  const radius = isBiggerThanLg ? useTransform(scrollYProgress, [0, 0.2], [24, 0]) : 24

  return <div className="flex justify-center relative pb-6" ref={ref}>
    <motion.div
      className="dark:bg-dark-txt bg-light-txt p-14 rounded-l-3xl h-60 2xl:h-80 box-border lg:w-6/12 lg:absolute flex flex-col align-center justify-center"
      style={{ translateX: translateX2, borderTopRightRadius: radius, borderBottomRightRadius: radius }}
    >
      <h2 className="dark:text-dark-bg text-light-bg text-3xl mb-4 md:text-4xl xl:text-4xl 2xl:text-6xl lg:mb-6 2xl:mb-10">
        <a href={link}>{title}</a>
      </h2>
      <p className="dark:text-dark-bg text-light-bg text-lg md:text-xl xl:text-2xl 2xl:text-4xl">
        {description}
      </p>
    </motion.div>
    {isBiggerThanLg && <motion.div
      className="dark:bg-dark-bg2 hidden bg-light-bg2 lg:flex rounded-r-3xl z-10 items-center justify-center h-60 2xl:h-80 w-6/12"
      style={{ translateX, borderTopLeftRadius: radius, borderBottomLeftRadius: radius }}
    >
      <a href={link}>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="dark:text-dark-txt lg:text-4xl xl:text-6xl 2xl:text-7xl text-light-txt" />
          <h2 className="dark:text-dark-txt text-light-txt lg:text-4xl xl:text-6xl 2xl:text-7xl ml-24">{title}</h2>
        </div>
      </a>
    </motion.div>
    }
  </div>
}
