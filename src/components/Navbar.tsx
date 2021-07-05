import { useState } from "react";

const links = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
];

export function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  const mobileMenu = () => {
    setHamburger(!hamburger);
    setNavbarMenu(!navbarMenu);
  };

  const printLinks = links.map((link) => (
    <li className="navbar__list-item" key={link.name}>
      <a href={link.path}>{link.name}</a>
    </li>
  ));

  return (
    <header className="header">
      <nav className="navbar">
        <span className="navbar__brand-name">Julio Contreras</span>
        <ul className={`navbar__list ${navbarMenu && "active"}`}>
          {printLinks}
        </ul>
        <div
          className={`hamburger ${hamburger && "active"}`}
          onClick={mobileMenu}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </div>
      </nav>
    </header>
  );
}
