import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div className={classes["intro"]}>
        <h1>Jobify</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          facere a tenetur ad distinctio enim provident delectus soluta quod
          reiciendis temporibus, facilis similique dolores necessitatibus?
        </p>
        <div className={classes["intro-cta"]}>
          <a href='#jobs' className='btn btn-transparent'>
            Get a Job
          </a>
          <Link to='/post-job' className='btn btn-primary'>
            Post a Job
          </Link>
        </div>
      </div>
      <div>
        <img src={heroImage} alt='hero image' />
      </div>
    </section>
  );
};

export default Hero;
