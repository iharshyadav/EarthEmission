"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react'

interface viewBreadcrumbProps {
  
}

const ViewBreadcrumb: FC<viewBreadcrumbProps> = ({}) => {

  const [isHovering, setIsHovering] = useState(false);

  const path : string = usePathname()

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className=" py-8 dark:border-slate-700 rounded-sm">
        <div className="text-start">
          {/* Start */}
          <ul className="inline-flex flex-wrap lg:text-[0.9vw] md:text-[1.3vw] sm:text-[1.6vw] text-[3vw] font-medium">
            <li className="flex items-center">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500"
                href="#0"
              >
                Data Explorer
              </a>
              <svg
                className="h-4 w-2 sm:w-4 fill-current text-slate-400 dark:text-slate-600 sm:mx-3 mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500"
                href="#0"
              >
                Energy
              </a>
              <svg
                className="h-4 w-2 sm:w-4 fill-current text-slate-400 dark:text-slate-600 sm:mx-3 mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500"
                href="#0"
              >
                Electricity
              </a>
              <svg
                className="h-4 w-2 sm:w-4 fill-current text-slate-400 dark:text-slate-600 sm:mx-3 mx-1"
                viewBox="0 0 16 16"
              >
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                className={`text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500`}
                href="/view"
              >
                <p className={` ${path === '/view' ? 'text-indigo-500': ''}`}>
                  Electricity - high voltage market ....
                </p>
              </Link>
            </li>
          </ul>
          {/* End */}
        </div>
      </div>
    </div>
  );
}

export default ViewBreadcrumb