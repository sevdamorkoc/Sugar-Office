import React from "react";

const MenuNavbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white p-4 shadow-md px-32">
        {/* Hamburger menu */}
        <button
          className="block md:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          // onclick="toggleMenu()"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center justify-evenly bg-white p-2 w-full">
          <div className="flex  space-x-4 justify-start  ">
            <ul className="flex">
              <li className="flex text-center px-1">
                <a href="#" className="text-gray-700 font-bold">
                  CATEGORIES
                </a>
              </li>
              <li className="flex text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  MEGAMENU
                </a>
              </li>
              {/* !------- */}
              <li className="flex text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  {/* HTML kodu */}
                </a>
              </li>
              <li className="group inline-block">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                ></a>
                <button className="outline-none border-none h-auto focus:outline-none border px-1  bg-white rounded-sm flex min-w-32 text-gray-900 font-bold hover:text-pink-100">
                  <a
                    href="#"
                    className="text-gray-900 font-bold hover:text-blue-700"
                  ></a>
                  <li className="flex text-center px-1 z-30">
                    <a
                      href="#"
                      className="text-gray-900 font-bold hover:text-blue-700"
                    ></a>
                    <a
                      href="#"
                      className="text-gray-900 font-bold hover:text-blue-700 pr-1 font-semibold font-bold flex text-center px-1"
                    >
                      MULTILEVEL
                    </a>
                  </li>
                </button>
                <ul
                  className="bg-white w-auto border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 z-30"
                >
                  <li className="rounded-sm px-1 py-1 hover:bg-gray-100">
                    Programming
                  </li>
                  <li className="rounded-sm px-1 py-1 hover:bg-gray-100">
                    DevOps
                  </li>
                  <li className="rounded-sm relative px-1 py-1 hover:text-pink-300">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none ">
                      <span className="pr-1 flex-1">Langauges</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
      transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Javascript
                      </li>
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button className="w-full text-left flex items-center outline-none focus:outline-none">
                          <span className="pr-1 flex-1">Python</span>
                          <span className="mr-auto">
                            <svg
                              className="fill-current h-4 w-4
          transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          className="bg-white border rounded-sm absolute top-0 right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                        >
                          <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                          <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                        </ul>
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                      <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                    </ul>
                  </li>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Testing
                  </li>
                </ul>
              </li>
              <li className="flex text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  BRANDS
                </a>
              </li>
              <li className="flex text-center px-1">
                <a
                  href="#"
                  className="text-blue-900 font-bold hover:text-blue-700"
                >
                  SPECIALS
                </a>
              </li>
            </ul>
          </div>
          <div className="flex  space-x-4 justify-end ">
            <ul className="flex mx-20 justify-between">
              <li className="flex-1 text-center px-1">
                <a href="#" className="text-gray-700 font-bold">
                  ABOUT
                </a>
              </li>
              <li className="flex-1 text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  FAQ
                </a>
              </li>
              <li className="flex-1 text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  CONTACT
                </a>
              </li>
              <li className="flex-1 text-center px-1">
                <a
                  href="#"
                  className="text-gray-900 font-bold hover:text-blue-700"
                >
                  BLOCK
                </a>
              </li>
              <li className="flex-1 text-center px-1">
                <a
                  href="#"
                  className="text-blue-900 font-bold hover:text-blue-700"
                >
                  0
                </a>
              </li>
              <li className="flex-1 text-center ">
                <a
                  href="#"
                  className="text-blue-900 font-bold hover:text-blue-700"
                >
                  item(s)-
                </a>
              </li>
              <li className="flex-1 text-center px-0\.5">
                <a
                  href="#"
                  className="text-blue-900 font-bold hover:text-blue-700"
                >
                  $0,00
                </a>
              </li>
            </ul>
          </div>
          {/* Sepet alanı */}
          <div className="flex items-center justify-end bg-white p-1">
            <a href="#" className="text-gray-900 hover:text-blue-700">
              {/* <img src="assets/pictures/" alt=""> */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:hidden" id="menu">
          <ul className="flex flex-col p-4 space-y-4 bg-gray-50 border border-gray-100 rounded-lg">
            <li>
              <a href="#" className="text-blue-700 font-bold" />
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700">
                CATEGORIES
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700" />
              MEGAMENU
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700" />
              MULTILEVEL
            </li>
            <li>
              <a href="#" className="text-gray-900 hover:text-blue-700" />
              BRANDS
            </li>
            <li>
              <a
                href="#"
                className="text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                SPECIALS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuNavbar;
