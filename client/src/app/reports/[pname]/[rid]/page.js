"use client";
import React from 'react'
import { testsData } from '../../../utils/data'
import LeftRender from './components/LeftRender';
import RightSide from './components/RightSide';
import RightMain from './components/RightMain';
const Page = () => {
  let tests = testsData[0].table_1
  tests = tests.filter(obj => Object.keys(obj).length > 1);

  console.log('sadasd', tests)
  return (
    <div className='flex'>
      {/* <LeftRender /> */}
      {/* <RightSide tests={tests} /> */}
      <RightMain tests={tests} />
    </div>
  )
}

export default Page