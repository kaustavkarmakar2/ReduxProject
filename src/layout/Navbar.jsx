import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = props => {
  // console.log(auth);

  return (
    <nav>
      <div className="nav-wrapper blueberry">
        <Link
          to="/"
          className="brand-logo"
          style={{ position: "relative", left: -300 }}
        >
          <img src="assets/img" width="100" height="auto" />
          <span className="white-text"style={{top: -50, position: 'relative'}}>
            hrapplication
          </span>
        </Link>

        <ul
          className="right hide-on-med-and-down"
          style={{ position: "relative", left: -700 }}
        >
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/connect">Connect</NavLink>
          </li>
        </ul>
        <ul
          className="right hide-on-med-and-down"
          style={{ position: "relative", left: 300 }}
        >
          <li>
            <NavLink to="/messages">
              <i className="material-icons">email</i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              <img src={props.profilePicUrl} width="50"></img>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* {links} */}
    </nav>
  );
};

export default Navbar;
