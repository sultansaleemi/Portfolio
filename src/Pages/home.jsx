import Hero from "../Components/hero";
import WhatIDoBubbles from "../Components/WhatIDoBubbles";
import ProjectsSection from "../Components/ProjectsSection";
import Contact from "../Components/Contact"

const Home = () => {
  return (
    <>
      <Hero />
      <WhatIDoBubbles />
      <ProjectsSection />
      <Contact />
      {/* Next sections come here */}
    </>
  );
};

export default Home;
