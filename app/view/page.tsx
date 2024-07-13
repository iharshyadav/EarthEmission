import { FC } from 'react'
import CodeExamples from './components/code-examples'
import ViewCodeSnippet from './components/view-codeSnippet'
import ViewHeader from './components/view-header'
import ViewSummary from './components/view-summary'
import ViewBreadcrumb from './components/view-breadcrumb'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-white min-h-screen w-full xl:px-32 lg:px-28 md:px-24 sm:px-6 px-5 overflow-x-hidden scroll-smooth">
    <ViewBreadcrumb /> 
    <ViewHeader /> 
    <div className='md:flex md:flex-row lg: flex-col flex gap-20 sm:mt-20 mt-10'>
       <div className='md:w-[60%] w-full'>
           <ViewSummary />
       </div>
       <div className='md:w-1/3 flex flex-col gap-3'>
          <ViewCodeSnippet />
          <hr className="border-1" />
          <CodeExamples />
       </div>
    </div>      
</div>
  )
}

export default page