import { MailIcon, PhoneIcon, BeakerIcon } from '@heroicons/react/outline'
// import { color } from 'framer-motion'
import React from 'react'

const colors = {
    'red': '#EF4444',
    'yellow': '#EAB308',
    'green': '#22C55E',
}
function evaluateValue(data) {
    const { value, Range } = data;

    if (!value || !Range) {
        // Handle missing value or range
        return "Invalid data";
    }

    let computedLowerBound, computedUpperBound;

    if (Range.includes("<")) {
        // Compute the range based on the provided number
        const number = parseFloat(Range.substring(1));
        if (!isNaN(number)) {
            computedLowerBound = 0;
            computedUpperBound = number;
        } else {
            return "Invalid range format";
        }
    } else if (Range.includes(">")) {
        // Compute the range based on the provided number
        const number = parseFloat(Range.substring(1));
        if (!isNaN(number)) {
            computedLowerBound = number;
            computedUpperBound = Number.POSITIVE_INFINITY;
        } else {
            return "Invalid range format";
        }
    } else {
        // Extract lower and upper bounds from the range string
        [computedLowerBound, computedUpperBound] = Range.split(" - ").map(parseFloat);
        if (isNaN(computedLowerBound) || isNaN(computedUpperBound)) {
            return "Invalid range format";
        }
    }

    // Check if the value is within the computed range
    if (value >= computedLowerBound && value <= computedUpperBound) {
        return "Within Range";
    } else {
        return "Outside Range";
    }
}


const RightSide = ({ tests }) => {


    return (
        <div className='w-full px-6 overflow-y-scroll remove-scrollbar py-4'>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-80">
                {tests?.map((test) => {
                    let result = evaluateValue(test);
                    return (
                        <li className={`col-span-1 bg-white shadow-md  border-t-[5px] border-solidshadow divide-y divide-gray-200`} style={{ borderColor: result == "Within Range" ? colors.green : colors.red }}>

                            <div className={`w-full flex  items-center justify-between p-6 space-x-6`}>
                                {/* <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" /> */}
                                <BeakerIcon className="w-12 h-12 bg-[#4338CA] p-2 text-white rounded-full flex-shrink-0" aria-hidden="true" />
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h1 className=" text-xl font-medium truncate" style={{ color: result == "Within Range" ? colors.green : colors.red }}>{test[`${Object.keys(test)[0]}`]}</h1>


                                        {/* <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                        {person.role}
                                    </span> */}
                                    </div>
                                    <div className='flex space-x-2 mt-2 items-baseline' style={{ color: result == "Within Range" ? colors.green : colors.red }}>
                                        <h1 className="text-gray-900  text-3xl font-medium truncate">{test.value}</h1>
                                        <span className='text-gray-800 text-xl font-medium'>
                                            {test.Units}
                                        </span>
                                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium  rounded-full" style={{ backgroundColor: result == "Within Range" ? colors.green : colors.red }}>
                                            {result}
                                        </span>
                                    </div>
                                    {/* 
                                "Range": "12.00 - 15.00",
                "Units": "g/dL",
                "value": 12.5
                                 */}
                                    <p className="mt-1 text-gray-500 text-md truncate">Range : {test.Range}</p>
                                    {/* <p className="mt-1 text-gray-500 text-sm truncate">Units</p> */}
                                    {/* <p className="mt-1 text-gray-500 text-md truncate">Value:</p> */}
                                </div>

                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RightSide