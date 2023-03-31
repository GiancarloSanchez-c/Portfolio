import { useState } from "react";
import { NavLink } from "react-router-dom";
import open from "../assets/svg/open.svg";
import close from "../assets/svg/close.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className="Header-button" onClick={openMenu}>
        {menuOpen ? (
          <img src={close} className="Header-close" alt="Close" loading="lazy" />
        ) : (
          <img src={open} className="Header-open" alt="Open" loading="lazy" />
        )}
      </button>
      <nav className={`Header-nav ${menuOpen ? 'open' : 'closed'}`}>
        <NavLink className='Header-a' to='/' onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink className='Header-a' to='/about' onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink className='Header-a' to='/portfolio' onClick={() => setMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink className='Header-a' to='/contact' onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};
