"use client";
import {React, useState, useEffect} from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import ReportCard from "@/components/ReportCard";
import axios from "axios";
import { usePathname } from "next/navigation";

const Page = () => {
  const [transactions, setTransactions] = useState([]);
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    age: "",
    gender: "",
    test_name: "",
  });
  const headers = {
    "ngrok-skip-browser-warning": "1231",
  };

  const pname = usePathname();
  const decoded = decodeURIComponent(pname);
  const decoded_split = decoded.split("/");
  const pname1 = decoded_split[decoded_split.length - 1];
  useEffect(() => {
    console.log(pname);
    axios
      .get(
        "https://b0f1-2401-4900-5095-5a23-a966-e6f3-1760-1ebe.ngrok-free.app/upload/getPatients/"+pname1,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setTransactions(res.data.data[0].tests);
        const { name, age, gender, test_name } = res.data.data[0];
        setPatientInfo({
          name,
          age,
          gender,
          test_name
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
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
                  {patientInfo.name}
                </h3>
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
          <p className="text-md text-gray-700">Gender: {patientInfo.gender}</p>
          <p className="text-md text-gray-700">Age: {patientInfo.age}</p>
          <p className="text-md text-gray-700">Plan: {patientInfo.test_name}</p>
        </div>
      </div>
      <div className="flow-root mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tests</h2>
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {transactions.map((person) => <ReportCard person={person} name={pname}/>)}
        </ul>
      </div>
    </div>
  );
};

export default Page;
