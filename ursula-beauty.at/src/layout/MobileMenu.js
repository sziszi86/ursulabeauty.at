import { Fragment, useState } from "react";
import {
  About,
  Blog,
  Contact,
  Home,
  Pages,
  Portfolio,
  Services,
  Shop,
} from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <ul className="navigation clearfix d-block d-lg-none">
        <li className="dropdown">
          <a href="#">Home</a>
          <ul style={activeLi("home")}>
            <Home />
          </ul>
          <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">pages</a>
          <ul style={activeLi("pages")}>
            <About />
            <Services />
            <Pages />
          </ul>
          <div onClick={() => activeMenuSet("pages")} className="dropdown-btn">
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">portfolio</a>
          <ul style={activeLi("portfolio")}>
            <Portfolio />
          </ul>
          <div
            onClick={() => activeMenuSet("portfolio")}
            className="dropdown-btn"
          >
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">blog</a>
          <ul style={activeLi("blog")}>
            <Blog />
          </ul>
          <div onClick={() => activeMenuSet("blog")} className="dropdown-btn">
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <li className="dropdown">
          <a href="#">shop</a>
          <ul style={activeLi("shop")}>
            <Shop />
          </ul>
          <div onClick={() => activeMenuSet("shop")} className="dropdown-btn">
            <span className="fas fa-chevron-down" />
          </div>
        </li>
        <Contact />
      </ul>
    </Fragment>
  );
};
export default MobileMenu;
