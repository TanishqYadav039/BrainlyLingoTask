import React from 'react'
import { useTab } from '../Context/TabContext'

const Button = ({data}) => {

  const { setTab, tab } = useTab()

  const handleTab = (value) =>{
    setTab(value.trim().toLowerCase().replace(" ", ""))
  }

  const activeButton = data.trim().toLowerCase().replace(" ","");

  return (
    <>
      <button className={`h-13 w-70 rounded-4xl font-extrabold text-xl backdrop-blur-sm ${activeButton === tab ? "bg-blue-600" : "border-2"} text-white outline-none cursor-pointer`} onClick={()=> handleTab(data)}>
        {data}
      </button>
    </>
  )
}

export default Button
