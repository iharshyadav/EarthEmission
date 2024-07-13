import { FC } from 'react'

interface viewSummaryProps {
  
}

const data = [
    {
        name:"Name",
        value:"Electricity - high voltage (market for electricity - high voltage)",
        colorCheck : false
    },
    {
        name:"Sector",
        value:"Energy",
        colorCheck : true
    },
    {
        name:"Category",
        value:"Electricity",
        colorCheck : false
    },
    {
        name:"Source",
        value:"ecoinvent",
        colorCheck : false
    },
    {
        name:"Region",
        value:"United Arab Emirates (AE) Albania (AL)Armenia (AM)Angola (AO)Argentina (AR)Austria (AT)Australia (AU)Azerbaijan (AZ)Bosnia and Herzegovina (BA)Bangladesh (BD)",
        colorCheck : true
    },
    {
        name:"Unit Type",
        value:"Energy",
        colorCheck : true
    },
    {
        name:"Year",
        value:"2021 2020 2014 2012",
        colorCheck : false
    },
    {
        name:"LCA Activity",
        value:"Refer to source",
        colorCheck : false
    },
]

const ViewSummary: FC<viewSummaryProps> = ({}) => {
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
                  <td className={`w-92 text-start ${item.colorCheck ? 'text-[#0600f7]' : 'text-black'}`}>{item.value}</td>
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