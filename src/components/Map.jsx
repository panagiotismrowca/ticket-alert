"use client"

import React , {useState} from 'react';
import Image from 'next/image';

const Map = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMap = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={toggleMap}
      className={`w-full h-72 p-4 m-0 shadow-md bg-gray-100 ${isActive ? 'active' : ''}`}
      id="mapHeader"
    >
      <Image  src="/map.svg"
              width={10000}
              height={10000}
              alt="Report icon"
              className={`h-full`}
      />
      {!!isActive && <p className=' text-center ' > See map </p>}
    </div>
  );
};

export default Map;
// "use client"

// import { useState , useEffect } from "react"
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// const Map = () => {
//   const supabase = createClientComponentClient()

//   const [data, setData] = useState()

//   const handleClick = async () => {
//     const { data, error } = await supabase.from("stations").select("*").eq('id', 1)
//     setData(JSON.stringify(data))

//     data.forEach(function(station){
//       console.log(station.name);
//     })
//   }

//   useEffect(() => {
//     handleClick();
//   }, []); 

//   return (
//     <button onClick={handleClick}>{data ? data : "Client Component"}ggggggggggg</button>
//   )
// }

// export default Map