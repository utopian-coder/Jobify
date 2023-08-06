import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${classes["header-container"]} `}>
      <div className={classes["logo-container"]}>
        <Link to='/'>Jobify</Link>
      </div>
      <nav className={classes.cta}>
        <Link to='/' className='btn btn-transparent'>
          Home
        </Link>
        <Link to='post-job' className='btn btn-primary'>
          Post a Job
        </Link>
      </nav>
    </header>
  );
};

export default Header;
