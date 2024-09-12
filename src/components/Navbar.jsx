import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import disableScroll from "disable-scroll";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (isExpanded) disableScroll.on();
    else disableScroll.off();
  }, [isExpanded]);

  function handleClickMenu() {
    setIsExpanded((current) => !current);
  }
  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <img className="nav__logo" src="/assets/shared/logo.svg" />
        <hr />
      </div>
      {isExpanded && (
        <div className="nav__expanded-menu">
          <ul className="nav__list-expanded">
            <li className="nav__list-item-expanded">
              <NavLink to="/" className="nav__list-item-link-expanded">
                <span>00</span> Home
              </NavLink>
            </li>
            <li className="nav__list-item-expanded">
              <NavLink
                to="/destination"
                className="nav__list-item-link-expanded"
              >
                <span>01</span> Destination
              </NavLink>
            </li>
            <li className="nav__list-item-expanded">
              <NavLink to="/crew" className="nav__list-item-link-expanded">
                <span>02</span> Crew
              </NavLink>
            </li>
            <li className="nav__list-item-expanded">
              <NavLink
                to="/technology"
                className="nav__list-item-link-expanded"
              >
                <span>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <ul className="nav__list">
        <li className="nav__list-item ">
          <NavLink to="/" className="nav__list-item-link">
            <span>00</span> Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/destination" className="nav__list-item-link">
            <span>01</span> Destination
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/crew" className="nav__list-item-link">
            <span>02</span> Crew
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/technology" className="nav__list-item-link">
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
      <div className="nav__mobile-menu" onClick={handleClickMenu}>
        <span
          className={`nav__mobile-menu-bar ${
            isExpanded && "nav__mobile-menu-bar--rotate"
          }`}
        ></span>
      </div>
    </nav>
  );
}

export default Navbar;
