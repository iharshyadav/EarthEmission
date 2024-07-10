"use client"
import { Check, Clipboard } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react'

interface viewCodeSnippetProps {
  
}

const ViewCodeSnippet: FC<viewCodeSnippetProps> = ({}) => {

   const copy:any = useRef<string>("");
   const [copied, setCopied] = useState(false)

   useEffect(() => {
    copy.current = "elictricity-supply_grid-source_market_for_electricity_high_voltage"; 
  }, []);

  const handleCopy = () => {
    if (copy.current) {
      navigator.clipboard.writeText(copy.current);
      setCopied(!copied)
    }
  };

   
  return (
    <div className="">
      <h1 className="text-[#2b3f56] font-semibold mb-2">API REFERENCE</h1>
      <hr className="border-1" />
      <div className="mt-10">
        <p className=" font-medium mb-2 text-sm">Activity ID</p>
        <div className='flex'>
          <p>
            elictricity-supply_grid-source_market_for_electricity_high_voltage
          </p>
          {
            copied ? <button onClick={handleCopy} ><Check /></button> :<button onClick={handleCopy}><Clipboard /></button>
          }
          
         
        </div>
      </div>
    </div>
  );
}

export default ViewCodeSnippet