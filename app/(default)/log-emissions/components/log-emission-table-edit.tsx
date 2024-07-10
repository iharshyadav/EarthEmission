import { FC } from 'react'

interface logEmissionTableEditProps {
  
}

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

const LogEmissionTableEdit: FC<logEmissionTableEditProps> = ({}) => {
  return <div>logEmissionTableEdit</div>
}

export default LogEmissionTableEdit