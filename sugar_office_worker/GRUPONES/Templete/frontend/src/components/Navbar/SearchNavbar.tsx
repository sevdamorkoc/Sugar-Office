import React from "react";

const SearchNavbar = () => {
  return (
    <div>
      <nav className="bg-white border-t-2 border-b-2 border-pink-300 shadow-lg px-32">
        <div className="container mx-auto flex items-center justify-between h-20">
          <img
            src="./assets/pictures/sugar-logo.png"
            className="h-12 w-auto mr-4"
            alt="Salamon logo"
          />
          <div className="flex items-center flex-grow">
            <div className="relative">
              <div className="nav-search flex items-center flex-grow rad">
                <input
                  type="text"
                  className="border-2 border-gray-200 hover\:to-white rounded-3xl w-full px-4 py-2 mr-4 pr-64 hover:bg-pink-200 "
                  placeholder="Search"
                />
              </div>
              <i className="fas fa-search absolute top-3 right-8 flex items-center text-gray-400" />
            </div>
          </div>
          <div className="flex items-center" style={{ alignItems: "center" }}>
            <i
              className="fas fa-user text-gray-500"
              style={{ fontSize: "2.5rem", margin: "0.5rem", color: "#87CEEB" }}
            />
            <div className="flex flex-col mt-1">
              <a href="/account" className="text-black-500 underline px-2">
                Account
              </a>
              <div className="flex flex-row">
                <a
                  href="/login"
                  className="text-gray-500 text-sm"
                  style={{ fontSize: "0.6rem", margin: "0.25rem" }}
                >
                  Login
                </a>
                <a href="/" className="text-gray-500">
                  /
                </a>
                <a
                  href="/register"
                  className="text-gray-500 text-sm"
                  style={{ fontSize: "0.6rem", margin: "0.25rem" }}
                >
                  Register
                </a>
              </div>
            </div>
            <i
              className="fas fa-heart text-gray-500"
              style={{ fontSize: "2.5rem", margin: "0.5rem", color: "#87CEEB" }}
            />
            <div className="flex flex-col mt-1">
              <a href="/wishlist" className="text-black-500 underline px-2">
                Wishlist
              </a>
              <div className="flex flex-row">
                <a
                  href="/edit-wishlist"
                  className="text-gray-500 text-sm"
                  style={{ fontSize: "0.6rem", margin: "0.25rem" }}
                >
                  Edit Your Wishlist
                </a>
              </div>
            </div>
            <i
              className="fas fa-list text-gray-500"
              style={{ fontSize: "2.5rem", margin: "0.5rem", color: "#87CEEB" }}
            />
            <div className="flex flex-col mt-1">
              <a href="/compare" className="text-black-500 underline px-2">
                Compare
              </a>
              <div className="flex flex-row">
                <a
                  href="/edit-wishlist"
                  className="text-gray-500 text-sm"
                  style={{ fontSize: "0.6rem", margin: "0.25rem" }}
                >
                  Edit Your Wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchNavbar;
