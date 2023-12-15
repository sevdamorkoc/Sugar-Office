import React from "react";
import TopNavbar from "./TopNavbar";
import SearchNavbar from "./SearchNavbar";
import MenuNavbar from "./MenuNavbar";

const Navbar = () => {
  return (
    <header className="bg-pink-100 shadow-lg ">
      <TopNavbar />
      <SearchNavbar />
      <MenuNavbar />
    </header>
  );
};

export default Navbar;
