import { motion, useScroll, useTransform } from "framer-motion"
import { LogoIcon } from './icons/logo';


export const Header = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 0.8])
  const radius = useTransform(scrollY, [0, 400], [0, 24])
  const padding = useTransform(scrollY, [0, 400], [25, 15])
  return <motion.header
    className="dark:bg-dark-bg2 sticky top-0 flex justify-center w-full py-5 md:py-12 bg-light-bg2/80 rounded-b-3xl z-50 backdrop-blur-md"
    style={{ scale, borderTopRightRadius: radius, borderTopLeftRadius: radius, paddingTop: padding, paddingBottom: padding }}
  >
    <a aria-label="Go to the top of the page" href="#"><LogoIcon /></a>
  </motion.header>
}
