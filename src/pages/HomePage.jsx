import Testimonials from "../components/Testimonial/Testimonials";
import Jobs from "../components/Jobs/Jobs";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <main className={`container`}>
      <Hero />
      <Testimonials />
      <Jobs
      // demoJobs={demoJobs}
      />
    </main>
  );
};

export default HomePage;
