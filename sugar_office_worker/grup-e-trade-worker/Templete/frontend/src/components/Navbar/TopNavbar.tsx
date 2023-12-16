import React from "react";

const TopNavbar = () => {
  return (
    <div>
      <>
        <nav className="top-navbar h-8 grid grid-cols-3 text-white bg-pink-200 all-header px-32 ">
          {/* Left dropdown menu */}
          <div className="flex items-center justify-start h-8 col-span-1 ">
            <div className="relative z-10">
              <button
                id="dropdownLeftButton"
                data-dropdown-toggle="dropdownLeft"
                data-dropdown-delay={500}
                data-dropdown-trigger="hover"
                className="language h-8 text-black hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-pink-300 border-none font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-pink-200 dark:hover:bg-pink-400 dark:focus:ring-pink-300"
                type="button"
              >
                {" "}
                <i className="fas fa-globe mr-2 ml-2 " /> Language
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownLeft"
                className="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLeftButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-language fa-2x text-pink-500 rotate-45" />{" "}
                      Turkey
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-language fa-2x text-pink-500 rotate-45" />{" "}
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-language fa-2x text-pink-500 rotate-45" />{" "}
                      Germany
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-language fa-2x text-pink-500 rotate-45" />{" "}
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <div className="phone mr-2 ml-2 h-8 text-black hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-pink-300 border-none font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-pink-200 dark:hover:bg-pink-400 dark:focus:ring-pink-300">
              <i className="fas fa-phone-alt mr-2 ml-2" /> +90555 555 5555
            </div>
          </div>
          {/* Right dropdown menu */}
          <div className="flex items-center justify-end col-span-1">
            <div className="relative z-20">
              <button
                id="dropdownRightButton"
                data-dropdown-toggle="dropdownRight"
                data-dropdown-delay={500}
                data-dropdown-trigger="hover"
                className="language h-8 text-black hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-pink-300 border-none font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-pink-200 dark:hover:bg-pink-400 dark:focus:ring-blue-300"
                type="button"
              >
                <i className="fas fa-money-bill-wave mr-2 ml-2" /> Currency
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownRight"
                className="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownRightButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-dollar-sign fa-lg text-green-500" />{" "}
                      Dolar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-euro-sign fa-lg text-blue-500" />{" "}
                      Euro
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <i className="fas fa-coins fa-lg text-yellow-500" /> Gold
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default TopNavbar;
