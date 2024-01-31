import React from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import ReportCard from "@/components/ReportCard";

const people = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    handle: "emilyselman",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristin Watson",
    handle: "kristinwatson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Page = () => {
  return (
    <div className="px-4">
      <div className="bg-white px-4 py-5 border border-gray-200 sm:px-6 rounded-xl">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Tom Cook
                </h3>
                <p className="text-sm text-gray-500">
                  <a href="#">@tom_cook</a>
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-4 flex-shrink-0 flex">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PhoneIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Phone</span>
            </button>
            <button
              type="button"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <MailIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>Email</span>
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <p className="text-md text-gray-700">Gender: Male</p>
          <p className="text-md text-gray-700">Age: 30</p>
          <p className="text-md text-gray-700">Address: 123 Street, City</p>
        </div>
      </div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {people.map((person) => <ReportCard person={person} />)}
        </ul>
      </div>
    </div>
  );
};

export default Page;
