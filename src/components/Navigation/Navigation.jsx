import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink to="/movies" className={getNavLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
