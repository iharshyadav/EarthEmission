import { co2Emission } from './log-emissions-table'
// import { deleteLogEmission } from "@/app/lib/actions";

import {useDisclosure} from "@nextui-org/react";

import MultilevelDropdown from './components/log-emission-table-dropdown';

interface Co2EmissionsTableItemProps {
  co2emission: co2Emission
  count: number
  onCheckboxChange: (id: number, checked: boolean) => void
  isSelected: boolean
}

export default function Co2EmissionsTableItem({ co2emission, onCheckboxChange, isSelected }: Co2EmissionsTableItemProps) {
  
  const {onOpen} = useDisclosure();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
    onCheckboxChange(co2emission.id, e.target.checked)
  }

  console.log(co2emission)

  const handleDelete = async () => {
    if (co2emission.id === 0) return;

    try {
      // await deleteLogEmission({ ids: co2emission.id });
       // Clear selected items after deletion
    } catch (error) {
      console.error("Error deleting Private Emission Factor:", error);
    }
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input className="form-checkbox" type="checkbox" onChange={handleCheckboxChange} checked={isSelected} />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.Name}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.sector}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.category}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.region}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.year}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.co2e}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="text-left">{co2emission.co2e_unit}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        
        <div onClick={onOpen} className="mb-3 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
            <MultilevelDropdown co2emission={co2emission} onCheckboxChange={onCheckboxChange} isSelected={isSelected} className={''} count={0} />
        </div>
        
        
        
      </td>
    </tr>
  )
}