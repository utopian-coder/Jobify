import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${classes["header-container"]} `}>
      <div className={classes["logo-container"]}>
        <Link to="/" style={{ color: "#7B95B7" }}>
          <img
            className="Jobify-logo"
            src="https://www.talentfinder.be/wp-content/uploads/2020/09/jobify-new-logo.png"
            alt="Jobify"
          />
        </Link>
      </div>
      <nav className={classes.cta}>
        <Link
          style={{ color: "#7B95B7" }}
          to="/"
          className="btn btn-transparent"
        >
          Home
        </Link>
        <Link
          to="/"
          className="btn btn-transparent"
          style={{ color: "#7B95B7" }}
        >
          About Us
        </Link>
        <Link
          to="/"
          className="btn btn-transparent"
          style={{ color: "#7B95B7" }}
        >
          Contact
        </Link>
        <Link
          to="post-job"
          style={{ backgroundColor: "#486284" }}
          className="btn btn-primary One"
        >
          Post a Job
        </Link>
      </nav>
    </header>
  );
};

export default Header;
