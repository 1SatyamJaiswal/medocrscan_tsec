import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import RightSide from './RightSide'
import { PaperAirplaneIcon, PlusIcon } from '@heroicons/react/outline'
import Toolbar from '@/components/Toolbar'
import Toolbar2 from '@/components/Toolbar2'

const RightMain = ({ tests }) => {
    console.log('tests', tests)
    return (
        <div className='flex flex-col w-full px-6 py-4 remove-scrollbar'>
            <div className='flex justify-between mb-2 w-full'>
                <Toolbar2 />

                <button className="ml-3 inline-flex items-center pr-4 pl-2 py-0 border border-transparent rounded-md shadow-sm text-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-h-12" ><PaperAirplaneIcon className="flex-shrink-0 h-5 w-5 text-white mx-2 rotate-90" aria-hidden="true" /> Mail</button>
            </div>
            <RightSide tests={tests} />
        </div>
    )
}

export default RightMain