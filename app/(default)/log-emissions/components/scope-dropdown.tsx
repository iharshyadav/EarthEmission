import { ScopeContext } from '@/app/(context)/ScopeContext'
import { useRouter } from 'next/navigation'
import { FC, useContext } from 'react'

interface scopeDropdownProps {
  name : string
}

const Scopes = [
  {
    id: 0,
    type: 'Scope-1'
  },
  {
    id: 1,
    type: 'Scope-2'
  },
  {
    id: 2,
    type: 'Scope-3'
  },
]

const ScopeDropdown: FC<scopeDropdownProps> = ({name}) => {

  const { value } = useContext(ScopeContext)
  

  return (
    <div className="absolute right-full top-5 mr-2 mt-0 w-32 bg-[#1e293c] border text-white border-gray-700 rounded-md shadow-lg">
      {Scopes.map((scope, index) => (
        <button onClick={() => {
          value(index,name)
          
          }} className="block w-full text-left  px-4 py-2 hover:bg-[#162a4e]">
          {scope.type}
        </button>
      ))}
    </div>
  );
}

export default ScopeDropdown