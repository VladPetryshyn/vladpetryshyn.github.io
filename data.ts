import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faBell, faLanguage, faNoteSticky } from "@fortawesome/free-solid-svg-icons"

export const projects = [
  {
    title: "Organised",
    description: "Uses .org files for storing data, so users can use their notes with any other app, that supports .org syntax",
    icon: faNoteSticky,
    link: "https://github.com/VladPetryshyn/organised"
  },
  {
    title: "org2json",
    description: "Parser for .org file written in Typescript. This parser converts .org files to .json format.",
    icon: faLanguage,
    link: "https://github.com/VladPetryshyn/org2json"
  },
  {
    title: "social-website",
    description: "Social website created using React, typescript, material ui and firebase serverless functions.",
    icon: faBell,
    link: "https://github.com/VladPetryshyn/socialApp"
  }
]

export type Project = typeof projects[0]

export const footer = {
  year: new Date(Date.now()).getFullYear(),
  links: [
    {
      icon: faGithub,
      link: "https://github.com/VladPetryshyn"
    },
    {
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/vlad-petryshyn-840614198"
    }
  ]
}
