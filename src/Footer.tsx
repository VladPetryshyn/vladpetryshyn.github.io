import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { footer } from "../data"

export const FooterSection = () => {
  return <footer className="dark:bg-dark-bg2 w-full py-3 bg-light-bg2 flex flex-col align-center justify-center rounded-t-3xl ">
    <div className="flex justify-center mb-4">
      {footer.links.map(({ icon, link }) => <a href={link} key={link}>
        <FontAwesomeIcon icon={icon} className="dark:text-dark-txt text-light-txt text-5xl mr-6" />
      </a>)}
    </div>
    <h4 className="dark:text-dark-txt text-xl text-center text-light-txt ">Vlad Petryshyn © 2021 - {footer.year}</h4>
  </footer>
}
