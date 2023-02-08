import React from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="container  mx-auto flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              Atoms
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
