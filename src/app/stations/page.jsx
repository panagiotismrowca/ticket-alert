import Map from "@/components/Map"
import StationList from "@/components/StationList"
import React from 'react';

const page = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <Map />
      <StationList />
    </main>
  )
}

export default page