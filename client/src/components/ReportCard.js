"use client";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

const ReportCard = ({ person }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <li key={person.handle} className="py-4 px-6">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {person.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {"@" + person.handle}
          </p>
        </div>
        <div>
          <a
            href="#"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View
          </a>
          <button
            type="button"
            className="mx-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            Summary
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="py-2">
          <p>{person.summary}</p>
        </div>
      )}
    </li>
  );
};

export default ReportCard;
