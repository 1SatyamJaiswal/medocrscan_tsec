"use client";
import React from 'react';
import RightMain from './components/RightMain';
import MailModal from './components/MailModal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';

const Page = () => {
  const [transactions, setTransactions] = useState([]);
  const headers = {
    "ngrok-skip-browser-warning": "1231",
  };
  const pname = usePathname();
  const decoded = decodeURIComponent(pname);
  const decoded_split = decoded.split("/");
  const pname1 = decoded_split[decoded_split.length - 1];
  const pname2 = decoded_split[decoded_split.length - 2];

  useEffect(() => {
    axios
      .get(
        "https://b0f1-2401-4900-5095-5a23-a966-e6f3-1760-1ebe.ngrok-free.app/upload/tests/"+pname2+"/"+pname1,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setTransactions(res.data.test);
        console.log(transactions)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className='flex'>
      {/* <LeftRender /> */}
      {/* <RightSide tests={tests} /> */}
      <RightMain tests={transactions} />
      <MailModal /> 
    </div>
  )
}

export default Page