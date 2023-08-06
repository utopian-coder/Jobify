import Testimonials from "../components/Testimonial/Testimonials";
import Jobs from "../components/Jobs/Jobs";
import Hero from "../components/Hero/Hero";

// const demoJobs = [
//   {
//     id: 1,
//     logo: "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/05/86/61/0586618f-8209-cb9c-abea-0caff7660d89/source/512x512bb.jpg",
//     name: "HarmonyTech Solutions",
//     type: "Full-time",
//     description:
//       "Company 1 is seeking a skilled and motivated Software Engineer to join our dynamic team. As a Software Engineer, you will be responsible for designing, developing, and testing software solutions to meet customer needs. We value creativity and innovation and offer a collaborative work environment. If you are passionate about software development and want to contribute to cutting-edge projects, apply now!",
//     title: "Software Engineer",
//     location: "United States",
//     pay: "6000",
//     datePosted: new Date(),
//   },
//   {
//     id: 2,
//     logo: "https://static.vecteezy.com/system/resources/previews/000/403/516/original/modern-company-logo-design-vector.jpg",
//     name: "TeachQuest Innovations",
//     type: "Part-time",
//     description:
//       "Join Company 2 as a Graphic Designer and showcase your artistic talent! We are a creative-driven company that believes in the power of visual storytelling. As a Graphic Designer, you will work on various projects, from designing marketing materials to creating engaging website graphics. If you have an eye for detail and can bring ideas to life, don't miss this opportunity to be part of our team.",
//     title: " ",
//     location: "Canada",
//     pay: "4000",
//     datePosted: new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000),
//   },
//   {
//     id: 3,
//     logo: "https://uzimedia.com/wp-content/uploads/2019/08/Logo-Design-for-High-Honey-Cannabis-Company-by-UziMedia.jpg",
//     name: "AcademiaPro Learning",
//     type: "Full-time",
//     description:
//       "Are you a talented Data Analyst looking for an exciting opportunity? Join Company 3's data team and play a key role in analyzing and interpreting complex data sets. As a Data Analyst, you will collaborate with cross-functional teams to provide valuable insights and support data-driven decision-making processes. If you are passionate about data and enjoy solving challenging problems, apply now and be part of our ambitious journey!",
//     title: "Data Analyst",
//     location: "Pakistan",
//     pay: "5500",
//     datePosted: new Date(new Date().getTime() - 20 * 24 * 60 * 60 * 1000),
//   },
//   {
//     id: 4,
//     logo: "https://example.com/company3-logo.png",
//     name: "EnlightenMe Education",
//     type: "Full-time",
//     description:
//       "We are hiring a Data Analyst to join our team in India. Company 3 values analytical minds that can turn data into actionable insights. As a Data Analyst, you will work with large datasets, conduct statistical analyses, and develop data visualizations. If you are passionate about data-driven decision-making and want to contribute to meaningful projects, apply now and be part of our mission!",
//     title: "Data Analyst",
//     location: "India",
//     pay: "5500",
//     datePosted: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
//   },
//   {
//     id: 5,
//     logo: "https://example.com/company3-logo.png",
//     name: "Company 3",
//     type: "Full-time",
//     description:
//       "Company 3 is seeking a skilled Data Analyst to join our team in Behrian. As a Data Analyst, you will be responsible for data modeling, trend analysis, and report generation. We are looking for individuals who are enthusiastic about data and can communicate complex findings to stakeholders effectively. If you are excited about data-driven insights and want to be part of a diverse and inclusive work environment, apply now!",
//     title: "Data Analyst",
//     location: "Behrian",
//     pay: "5500",
//     datePosted: new Date(new Date().getTime() - 40 * 24 * 60 * 60 * 1000),
//   },
// ];
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
