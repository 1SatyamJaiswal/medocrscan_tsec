import React from "react";

const ReportCard = ({person}) => {
  return (
    <li key={person.handle} className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-8 w-8 rounded-full" src={person.imageUrl ?? ""} alt="" />
        </div>
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
            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
          >
            View
          </a>
        </div>
      </div>
    </li>
  );
};

export default ReportCard;
