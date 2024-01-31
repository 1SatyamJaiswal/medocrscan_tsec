"use client";
import React from "react";
import Toolbar from "@/components/Toolbar";
import Upload from "@/components/Upload";
import Link from "next/link";
import { redirect } from "next/navigation";

const transactions = [
  {
    id: 1,
    name: "Potato",
    href: "#",
    quantity: "10",
    amount: "1000",
    currency: "INR",
    status: "sold",
    date: "2020-07-11",
    time: "10:45 PM",
  },
];

const statusStyles = {
  sold: "bg-green-100 text-green-800",
  restock: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reports = () => {
  return (
    <div>
      <div className="flex justify-between px-4 items-center">
        <Toolbar />
        <Upload />
      </div>
      <h2 className="px-6 mx-auto mt-8 text-lg leading-6 font-medium text-gray-900">
        Recent Reports
      </h2>
      {/* Activity list (smallest breakpoint only) */}
      <div className="shadow sm:hidden">
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <div className="block py-4 bg-white hover:bg-gray-50">
                <span className="flex items-center space-x-4">
                  <span className="flex-1 flex space-x-2 truncate">
                    <span className="flex flex-col text-gray-500 text-sm truncate">
                      <span className="truncate">{transaction.name}</span>
                      <span>
                        Quantity: {transaction.quantity} Amount:{" "}
                        <span className="text-gray-900 font-medium">
                          {transaction.amount}
                        </span>{" "}
                        {transaction.currency}
                      </span>
                      <time>
                        {transaction.time}, {transaction.date}
                      </time>
                    </span>
                  </span>
                  <span
                    className={classNames(
                      statusStyles[transaction.status],
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                    )}
                  >
                    {transaction.status}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="px-6 mx-auto">
          <div className="flex flex-col mt-2">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="bg-white hover:bg-indigo-100 hover:text-white"
                      onClick={() => console.log("clicked")}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="text-gray-900 font-medium">
                          {transaction.name}{" "}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="text-gray-900 font-medium">
                          {transaction.quantity}{" "}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <span className="text-gray-900 font-medium">
                          {transaction.amount}{" "}
                        </span>
                        {transaction.currency}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time>{transaction.date}</time>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time>{transaction.time}</time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
