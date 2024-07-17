"use client"
import { Check, CopyIcon } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { JsxElement } from 'typescript';

interface codeExamplesProps {
  
}

const CodeExamples: FC<codeExamplesProps> = ({}) => {
    const [activeTab, setActiveTab] = useState(1);

    const copy:any = useRef<string>("");
   const [copied, setCopied] = useState(false)

   useEffect(() => {
     copy.current = `curl --request POST \\
        --url https://api.climatiq.io/estimate \\
        --header "Authorization: Bearer $CLIMATIQ_API_KEY" \\
        --data '{
          "emission_factor": {
            "activity_id": "electricity-supply_grid-source_market_for_electricity_high_voltage",
            "data_version": "^0"
          },
          "parameters": {
            "energy": 1000,
            "energy_unit": "kWh"
          }
        }'`;
  }, []);

  const handleCopy = () => {
    if (copy.current) {
      navigator.clipboard.writeText(copy.current);
      setCopied(!copied)
    }
  };

    const tab1: () => JSX.Element =  () => {

      return (
        <div style={{ fontFamily: "monospace" }}>
        <pre
           className="
           text-white
           lg:p-4
           rounded-md
           whitespace-pre-wrap
           break-all
           overflow-x-auto
           text-xs
         "
        >
          {`curl --request POST \\
  --url https://api.climatiq.io/estimate \\
  --header "Authorization: Bearer $CLIMATIQ_API_KEY" \\
  --data '{
    "emission_factor": {
      "activity_id": "electricity-supply_grid-source_market_for_electricity_high_voltage",
      "data_version": "^0"
    },
    "parameters": {
      "energy": 1000,
      "energy_unit": "kWh"
    }
  }'`}
        </pre>
      </div>
      )
    };

  
  return (
    <div>
      <p className="font-medium mb-2 text-sm">Code Snippets</p>

      <div className="md:w-[27vw] mx-auto bg-[#212936] shadow-md rounded-lg ">
        <div className="flex justify-between text-white gap-3 h-10 bg-[#374151]">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab(1)}
              className={`w-1/2 py-2 px-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
                activeTab === 1 ? "border-b-2 border-blue-500" : ""
              }`}
            >
              REQUEST
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`w-1/2 py-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
                activeTab === 2 ? "border-b-2 border-blue-500" : ""
              }`}
            >
              RESPONSE
            </button>
          </div>
          {
            copied ? <button className='p-2' onClick={handleCopy} ><Check /></button> :<button className='p-2' onClick={handleCopy}><CopyIcon size={20} /></button>
          }
        </div>
        <div className='bg-[#212936]'>
          <div
            className={`tab-content ${
              activeTab === 1 ? "block bg-[#212936]" : "hidden"
            } p-4`}
          >
            {tab1()}
          </div>
          <div
            className={`tab-content ${
              activeTab === 2 ? "block bg-[#212936]" : "hidden"
            } p-4`}
          >
            {/* {tab1()} */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeExamples