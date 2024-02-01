"use client";
import React from "react";
import Toolbar from "@/components/Toolbar";
import Upload from "@/components/Upload";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reports = () => {
  const [transactions, setTransactions] = useState([]);
  const headers = {
    "ngrok-skip-browser-warning": "1231",
  };

  useEffect(() => {
    axios
      .get(
        "https://b0f1-2401-4900-5095-5a23-a966-e6f3-1760-1ebe.ngrok-free.app/upload/getPatients",
        {
          headers: headers,
        }
      )
      .then((res) => {
        setTransactions(res.data.arr);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between px-4 items-center">
        <Toolbar />
        <Upload />
      </div>
      <h2 className="px-6 mx-auto mt-8 text-lg leading-6 font-medium text-gray-900">
        Recent Reports
      </h2>
      
      {/* Activity table (small breakpoint and up) */}
      <div className="hidden sm:block">
        <div className="px-6 mx-auto">
          <div className="flex flex-col mt-2">
            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Test Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Gender
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction._id}
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
                          {transaction.test_name}{" "}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <span className="text-gray-900 font-medium">
                          {transaction.age}{" "}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time>{transaction.gender}</time>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <Link href={"reports/"+transaction.name} className="text-indigo-500">View</Link>
                      </td>
                      {/* <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                        <time>{transaction.time}</time>
                      </td> */}
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
