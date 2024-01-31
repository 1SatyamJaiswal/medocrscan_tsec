import React from "react";
import { ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from "@heroicons/react/solid";

const Navbar = ({ dictionary, current }) => {
  return (
    <div className="px-6 py-4">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Home
                </a>
              </div>
            </li>
            {dictionary.map((item) => (
              <li key={item}>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <a
                    href={item.href}
                    aria-current="page"
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {current}
          </h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
