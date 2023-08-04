import classes from "./TestimonialItem.module.css";

const TestimonialItem = ({ testimonialDetails }) => {
  const { profileImage, name, position, testimonial } = testimonialDetails;

  return (
    <article className={`flex-col ${classes["testimonial-item"]}`}>
      <img
        src={profileImage}
        alt='Users profile image.'
        className={classes.image}
      />

      <div className={`flex-col ${classes["user-details"]}`}>
        <span className={classes.name}>{name}</span>
        <span className={classes.position}>{position}</span>
      </div>
      <p>{testimonial}</p>
    </article>
  );
};

export default TestimonialItem;
