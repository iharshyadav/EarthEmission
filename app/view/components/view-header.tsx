import { FC } from 'react'

interface viewHeaderProps {
  
}

const data = [
  {
    icon : "",
    name : "858 Factors"
  },
  {
    icon : "",
    name : "178 regions"
  },
  {
    icon : "",
    name : "1 source"
  }
]

const ViewHeader: FC<viewHeaderProps> = ({}) => {
  return (
    <div className="mx-auto pt-20">
      <h3 className="text-[#6762ee] text-sm">ACTIVITY</h3>
      <h1 className="text-3xl font-semibold text-gray-900">
        Electricity - high voltage (market for electricity - high voltage)
      </h1>
      <div className="flex flex-wrap gap-4 mt-6 w-full">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="text-[0.7vw] font-semibold p-1 md:pr-2 md:pl-2 bg-[#f3f4f6] rounded-xl text-black">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className='xl:mt-8 md:mt-5 sm:mt-6 mt-5 w-full text-end'>
        <button className="bg-[#0600f7] xl:w-[25%] font-medium lg:w-[32%] md:text-sm lg:text-sm lg-w p-2 text-white hover:bg-[#0400f7e7]">
              Explore All Factors for this Activity
        </button>
      </div>
    </div>
  );
}

export default ViewHeader