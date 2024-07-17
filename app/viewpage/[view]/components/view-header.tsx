import { FC } from 'react'

interface viewHeaderProps {
  params:string
}

// const data = [
//   {
//     icon : "",
//     name : "858 Factors"
//   },
//   {
//     icon : "",
//     name : "178 regions"
//   },
//   {
//     icon : "",
//     name : "1 source"
//   }
// ]

const ViewHeader: FC<viewHeaderProps> = ({params}) => {

  return (
    <div className="mx-auto md:pt-10">
      <h3 className="text-[#1e293c] md:text-sm sm:text-[2vw] text-[2.6vw]">{params}</h3>
      <h1 className="text-xl sm:text-3xl md:text-3xl font-semibold text-gray-900 break-words">
  Electricity - high voltage (market for electricity - high voltage)
</h1>
      {/* <div className="flex flex-wrap gap-4 mt-6 w-full">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="md:text-[0.7vw] sm:text-[1.8vw]  text-[2.5vw] font-semibold p-1 pr-2 pl-2 bg-[#f3f4f6] rounded-xl text-black">
              {item.name}
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className='xl:mt-8 md:mt-5 sm:mt-6 mt-5 w-full text-end'>
        <button className="bg-[#0600f7] xl:w-[25%] font-medium lg:w-[32%] md:w-[35%] sm:w-[46%] text-[2vw] w-[45%] sm:text-[1.4vw] md:text-[1.4vw] lg:text-sm lg-w p-2 text-white hover:bg-[#0400f7e7]">
              Explore All Factors for this Activity
        </button>
      </div> */}
    </div>
  );
}

export default ViewHeader