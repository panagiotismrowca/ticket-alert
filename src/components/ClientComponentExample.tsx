"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const ClientComponentExample = () => {
  const supabase = createClientComponentClient()

  const [data, setData] = useState()

  const handleClick = async () => {
    const { data, error } = await supabase.from("stations").select("*").eq('id', 1)
    setData(JSON.stringify(data))
    alert(data.length);

    data.forEach(function(station){
      console.log(station.name);
    })
  }

  return (
    
    <button onClick={handleClick}>{data ? data : "Client Component"}</button>
  )
}

export default ClientComponentExample