import { v4 as uuidv4 } from "uuid";
import classes from "./Testimonials.module.css";
import TestimonialItem from "./TestimonialItem";
const TESTIMONIALS = [
  {
    profileImage:
      "https://static.vecteezy.com/system/resources/previews/000/403/516/original/modern-company-logo-design-vector.jpg",
    name: "Ibad",
    position: "Full Stack Deveoloper",
    testimonial:
      "I had the pleasure of working with Ibad as a Web Developer, and I must say, his skills are truly exceptional. Ibad's dedication abilities have significantly contributed to the success of our projects. I highly recommend him for any web development endeavors.",
  },
  {
    profileImage:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/05/86/61/0586618f-8209-cb9c-abea-0caff7660d89/source/512x512bb.jpg",
    name: "Jordan",
    position: "Software Engineer",
    testimonial:
      "Working alongside Jordan as a Software Engineer has been a rewarding experience. Jordan's commitment to delivering high-quality  tackle complex challenges development team. I confidently endorse Jordan for his exceptional skills and strong work ethic.",
  },
  {
    profileImage:
      "https://uzimedia.com/wp-content/uploads/2019/08/Logo-Design-for-High-Honey-Cannabis-Company-by-UziMedia.jpg",
    name: "Imran",
    position: "UX/UI Designer",
    testimonial:
      "Imran Biswas has been an invaluable member of our UX/UI Design team. and user-friendly interfaces. Imran's attention to detail and user-centric approach set him apart as a designer. It's been a pleasure working with him, and I highly recommend Imran for any design projects.",
  },
];

const Testimonials = () => {
  const headingStyle = {
    marginTop: "4rem",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#486284",
    textAlign: "center",
    marginBottom: "4rem",
  };

  return (
    <section id="tesi">
      <hr />
      <h2 style={headingStyle}>What Our Customers Say</h2>
      <div className={`flex-col ${classes.testimonials}`}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialItem
            key={uuidv4()}
            testimonialDetails={{ ...testimonial }}
          />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Testimonials;
