import React, { useState } from "react";
import { Link } from "react-router-dom";
import resources from "../resources";
import { capitalizeWord, findResourceInPathName } from "../helpers";
import history from "../history";
const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(
    findResourceInPathName(resources, history.location.pathname)
  );
  history.listen(location => {
    setCurrentPage(findResourceInPathName(resources, location.pathname));
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <ul className="nav ">
        {resources.map(resource => {
          return (
            <li className="nav-item" key={resource}>
              <Link
                to={`/pages/${resource}`}
                className={`nav-link ${
                  currentPage === resource ? "text-info" : "text-light"
                } `}
              >
                {capitalizeWord(resource)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
