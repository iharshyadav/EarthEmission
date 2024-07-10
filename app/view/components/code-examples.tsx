"use client"
import { FC, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface codeExamplesProps {
  
}

const CodeExamples: FC<codeExamplesProps> = ({}) => {
    const [activeTab, setActiveTab] = useState(1);

  
  return (
    <div>
      <p className=" font-medium mb-2 text-sm">Code Snippets</p>

      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg ">
      <div className="flex border-b text-white gap-3 h-8 bg-[#374151]">
        <button
          onClick={() => setActiveTab(1)}
          className={`w-1/2 py-2 text-center text-white border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 focus:outline-none ${activeTab === 1 ? 'text-blue-500 border-blue-500' : ''}`}
        >
          
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`w-1/2 py-2 text-center text-white border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500 focus:outline-none ${activeTab === 2 ? 'text-blue-500 border-blue-500' : ''}`}
        >
          Tab 2
        </button>
      </div>
      <div className={`tab-content ${activeTab === 1 ? 'block' : 'hidden'} p-4`}>
        <p>This is the content for Tab 1.</p>
      </div>
      <div className={`tab-content ${activeTab === 2 ? 'block' : 'hidden'} p-4`}>
        <p>This is the content for Tab 2.</p>
      </div>
    </div>
      {/* <Tabs>
    <TabList className='flex gap-3 h-8 bg-[#374151]'>
      <Tab className='border-none cursor-pointer p-0'>Title 1</Tab>
      <Tab className='border-none cursor-pointer'>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs> */}
    </div>
  );
}

export default CodeExamples