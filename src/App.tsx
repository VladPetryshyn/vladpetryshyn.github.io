import { HeroSection } from "./Hero"
import { Header } from "./Header";
import { ProjectsSection } from "./Projects";
import { FooterSection } from "./Footer";

function App() {
  return (
    <div className="dark:bg-dark-bg bg-light-bg w-screen px-5 md:px-12 xl:px-16 2xl:px-24 relative min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <FooterSection />
    </div >
  )
}

export default App
