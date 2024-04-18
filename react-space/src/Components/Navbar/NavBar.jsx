/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
// Icons :
import { Menu, Close } from "../../Assets/Icons/index";
// Styles :
import "../../Styles/navbar.scss";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {
      name: "Settings",
      path: "/settings",
    },
  ];
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <a className="nav-logo" href="/">
        F<span>oo</span>dies
      </a>
      {/* Desktop settings */}
      <div className="nav-links">
        {links.map((link) => {
          return (
            <a
              className={location.pathname === link.path ? "active" : ""}
              href={link.path}
              key={link.name}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      {/* Mobile settings */}
      <div className="sidebar-icon" onClick={toggleSidebar}>
        {!sidebarOpen && <Menu />}
        {sidebarOpen && <Close />}
      </div>
      {sidebarOpen && (
        <div className="sidebar">
          {links.map((link) => {
            return (
              <a
                className={location.pathname === link.path ? "active" : ""}
                href={link.path}
                key={link.name}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavBar;
