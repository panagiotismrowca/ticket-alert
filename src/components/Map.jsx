'use client';

import React, { useState } from 'react';
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
      style={{ overflowY: 'auto' }}
    >
      <Image src="/athens-metro-map.svg" width={1000} height={1000} alt="Report icon" className={`h-full overflow-scroll`} />
      {!!isActive && <p className=" font-medium text-center "> See map </p>}
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
