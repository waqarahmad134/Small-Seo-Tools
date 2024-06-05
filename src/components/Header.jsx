import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-gray-300 border-gray-200 dark:bg-gray-900">
        <div className="w-11/12 md:w-4/5 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              
            </span>
          </Link>
          <button className="block sm:hidden">
            <IoMenu size={32} />
          </button>
          <nav className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  target="_blank"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  E-Commerce
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
