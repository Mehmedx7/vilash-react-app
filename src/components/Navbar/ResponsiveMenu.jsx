import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          {/* <FaUserCircle size={50} /> */}
          <div>
            {/* <h1>Travella</h1> */}
            {/* <h1 className="text-sm text-slate-500">Premium user</h1> */}
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative lg:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-auto p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gradient-to-r from-primary to-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search..."
              />
            </div> 
      </div>
      <div className="footer">
      <h1>
        Made with ❤ by <a href="https://example.com" role="button">Archana</a>{" "}
      </h1>
    </div>
    </div>
  );
};

export default ResponsiveMenu;
