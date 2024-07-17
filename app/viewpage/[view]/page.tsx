"use client"
import { FC, useEffect, useState } from 'react'
import CodeExamples from './components/code-examples'
import ViewCodeSnippet from './components/view-codeSnippet'
import ViewHeader from './components/view-header'
import ViewSummary from './components/view-summary'
import ViewBreadcrumb from './components/view-breadcrumb'
import { usePathname } from 'next/navigation'
import { showData } from '@/app/lib/data'
// import { Co2eEmissions, showData } from '../lib/data'
// import prisma from '../utils/prismaClient'

  export interface co2Emission {
    id: number
    Name: string
    sector: string
    category: string
    region: string
    co2e_unit: string
    year: number
    co2e: number
    userId: string
  }

const Page: FC<co2Emission> = ({}) => {

  const [data, setData] = useState<co2Emission | null>(null);

  const path = usePathname();

  const params = path.split('%20').join(' ').split('/')[2];

  // console.log(params)

  useEffect(() => {
    const d = async (params:string) => {
      const data = await showData(params);
      setData(data)
      return data;
    }
     const datas = d(params)
  },[])

  
  return (
    <div className="bg-white min-h-screen w-full xl:px-32 lg:px-28 md:px-24 sm:px-6 px-5 overflow-x-hidden scroll-smooth">
    <ViewBreadcrumb /> 
    <ViewHeader params={params} /> 
    <div className='md:flex md:flex-row lg: flex-col flex gap-20 sm:mt-20 mt-10'>
       <div className='md:w-[60%] w-full'>
           <ViewSummary datas={data} />
       </div>
       <div className='md:w-1/3 flex flex-col gap-3'>
          <ViewCodeSnippet />
          <hr className="border-1" />
          <CodeExamples />
       </div>
    </div>  
    <div className='h-16'></div>    
</div>
  )
}

export default Page