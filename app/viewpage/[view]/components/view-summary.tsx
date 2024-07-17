import { FC } from 'react'
import { co2Emission } from '../page';

interface viewSummaryProps {
  datas : co2Emission | null
}



const ViewSummary: FC<viewSummaryProps> = ({datas}) => {

  const data = [
    {
        name:"Name",
        value:datas?.Name,
        colorCheck : false
    },
    {
        name:"Sector",
        value:datas?.sector,
        colorCheck : true
    },
    {
        name:"Category",
        value:datas?.category,
        colorCheck : false
    },
    {
        name:"Source",
        value:"ecoinvent",
        colorCheck : false
    },
    {
        name:"Region",
        value:datas?.region,
        colorCheck : true
    },
    {
        name:"Unit Type",
        value:datas?.co2e_unit,
        colorCheck : true
    },
    {
        name:"Year",
        value:datas?.year,
        colorCheck : false
    },
    {
        name:"LCA Activity",
        value:datas?.co2e,
        colorCheck : false
    },
]

  console.log(datas)
  
  return (
    <div className="">
      <h1 className="text-[#2b3f56] font-semibold mb-2">ACTIVITY SUMMARY</h1>
      <hr className="border-1" />
      <div className="mt-10">
        {data.map((item, index) => (
          <>
            <table className="mt-3 sm:w-full w-full text-sm font-medium">
              <tbody>
                <tr className="flex xl:gap-72 w-full gap-20">
                  <td className='w-12'>{item.name}</td>
                  <td className={`w-92 text-start ${item.colorCheck ? 'text-[#1e293c]' : 'text-black'}`}>{item.value}</td>
                </tr>
              </tbody>
            </table>
            <hr className="mt-4 border-1" />
          </>
        ))}
      </div>
    </div>
  );
}

export default ViewSummary