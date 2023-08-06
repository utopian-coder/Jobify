import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage.jpg";
import classes from "./Hero.module.css";
const headingStyle = {
  fontSize: "3.2rem",
  fontWeight: "bold",
  color: "#486284",
};
const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div className={classes["intro"]}>
        <h1 style={headingStyle}>Jobify</h1>
        <p>
          Welcome to Jobify, your ultimate destination for connecting talented
          professionals with top-notch companies! Jobify is a cutting-edge job
          posting platform that offers a seamless and efficient experience for
          both job seekers and employers alike.
        </p>
        <div className={classes["intro-cta"]}>
          <a
            href="#jobs"
            style={{ backgroundColor: "#486284" }}
            className="btn btn-transparent One"
          >
            Apply for a Job
          </a>
          <Link to="/post-job" className="btn btn-primary">
            Post a Job
          </Link>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
