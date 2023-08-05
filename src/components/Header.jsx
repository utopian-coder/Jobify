// import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <Link to="/">Logo</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post-job">Post a Job</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
