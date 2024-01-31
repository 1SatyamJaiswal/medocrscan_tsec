"use client";
import { useState, React } from "react";

const Toolbar = () => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate.getDate() - 30);
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState("");
  const handleDateSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    console.log(endDate);
  };
  const handleNameSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="w-full flex justify-between">
      <div className="p-4 flex">
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm mx-4 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 sm:text-sm">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 border-transparent focus:ring-0 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleNameSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className="p-4 flex">
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm mx-4 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 sm:text-sm">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="block w-full border-0 p-0 text-gray-900 border-transparent placeholder-gray-500 focus:ring-0 sm:text-sm"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </div>
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm mx-4 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 sm:text-sm">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="block w-full border-0 p-0 text-gray-900 border-transparent placeholder-gray-500 focus:ring-0 sm:text-sm"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleDateSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
