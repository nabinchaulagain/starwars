import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <ul className="nav ">
        <li className="nav-item">
          <Link className="nav-link active" to="/pages/starships">
            Starships
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pages/planets">
            Planets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pages/species">
            Species
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/pages/vehicles">
            Vehicles
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
