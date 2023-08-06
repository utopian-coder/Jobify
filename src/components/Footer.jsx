import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.company}>
        <div className={classes.logo}>Jobify</div>
        <q>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          corporis deleniti molestiae commodi architecto est odit numquam
          laudantium quidem vel?
        </q>
      </div>
      <div className={classes["social-links"]}>
        <a href="#">
          <AiOutlineTwitter className={classes["social-link"]} />
        </a>
        <a href="#">
          <BiLogoFacebook className={classes["social-link"]} />
        </a>
        <a href="#">
          <BiLogoLinkedin className={classes["social-link"]} />
        </a>
      </div>
      <div className={classes.copyright}>
        <p>&copy;2022 Jobify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
