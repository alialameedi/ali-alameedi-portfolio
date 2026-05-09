import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { FocusAreas } from '../components/sections/FocusAreas';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FocusAreas />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
