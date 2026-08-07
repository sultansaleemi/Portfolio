import Hero from "../Components/hero";
import WhatIDoBubbles from "../Components/WhatIDoBubbles";
import ProjectsSection from "../Components/ProjectsSection";
import Contact from "../Components/Contact";
import Hire from "../Components/Whyhireme";

const Home = () => {
  return (
    <>
      <Hero />
      <Hire />
      <WhatIDoBubbles />
      <ProjectsSection />
      <Contact />
     
      {/* Next sections come here */}
    </>
  );
};

export default Home;
