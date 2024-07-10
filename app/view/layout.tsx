import CodeExamples from './components/code-examples'
import ViewCodeSnippet from './components/view-codeSnippet'
import ViewHeader from './components/view-header'
import ViewSummary from './components/view-summary'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <div className="bg-white min-h-screen w-full xl:px-32 lg:px-28 md:px-24 sm:px-32 px-10">

        <ViewHeader /> 
        <div className='flex gap-20 mt-20'>
           <div className='w-[60%]'>
               <ViewSummary />
           </div>
           <div className='w-1/3 flex flex-col gap-3'>
              <ViewCodeSnippet />
              <hr className="border-1" />
              <CodeExamples />
           </div>
        </div>
        <main className="">
          {children}
        </main>        


    </div>
  )
}
