"use client"
import { FC, useState } from 'react'

interface viewBreadcrumbProps {
  
}

const ViewBreadcrumb: FC<viewBreadcrumbProps> = ({}) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  return (
    <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900">
        Electricity - high voltage (market for electricity - high voltage)
      </h3>
      <div className="flex mt-4 space-x-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 13a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V13a2 2 0 00-2-2H5zM15 13a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V13a2 2 0 00-2-2h-2z"
            />
          </svg>
          <span className="ml-2 text-gray-600">858 Factors</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-.707L16 11.586V8a6 6 0 00-6-6z"
            />
          </svg>
          <span className="ml-2 text-gray-600">178 Regions</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.707.707a2 2 0 01-2.828-2.828h.707V5.707L7.293 9.293a2 2 0 11-2.828-2.828l.707-.707a2 2 0 012.828 2.828V8.293l5.707 5.707a2 2 0 112.828-2.828l-.707-.707a2 2 0 01-2.828 2.828H10.293L13.586 3.586z"
            />
          </svg>
          <span className="ml-2 text-gray-600">1 Source</span>
        </div>
      </div>
      <button
        className={`absolute bottom-4 right-4 px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out rounded-md ${
          isHovering ? 'bg-blue-500 hover:bg-blue-700' : 'bg-blue-400 hover:bg-blue-600'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Explore All Factors for this Activity
      </button>
    </div>
  );
}

export default ViewBreadcrumb