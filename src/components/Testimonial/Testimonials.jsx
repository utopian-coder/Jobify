import { v4 as uuidv4 } from "uuid";
import classes from "./Testimonials.module.css";
import UserImage from "../../assets/user.png";
import TestimonialItem from "./TestimonialItem";

const TESTIMONIALS = [
  {
    profileImage: UserImage,
    name: "Imran Biswas",
    position: "Fullstack Development",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nihil architecto iure accusamus non commodi eveniet, illum repudiandae odio?",
  },
  {
    profileImage: UserImage,
    name: "Imran Biswas",
    position: "Fullstack Development",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nihil architecto iure accusamus non commodi eveniet, illum repudiandae odio?",
  },
  {
    profileImage: UserImage,
    name: "Imran Biswas",
    position: "Fullstack Development",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nihil architecto iure accusamus non commodi eveniet, illum repudiandae odio?",
  },
  {
    profileImage: UserImage,
    name: "Imran Biswas",
    position: "Fullstack Development",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error nihil architecto iure accusamus non commodi eveniet, illum repudiandae odio?",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h2>What Our Customers Say</h2>
      <div className={`flex-col ${classes.testimonials}`}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialItem
            key={uuidv4()}
            testimonialDetails={{ ...testimonial }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
