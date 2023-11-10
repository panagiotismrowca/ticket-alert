"use client"

import { useState , useEffect } from "react"
import { c } from "@supabase/auth-helpers-nextjs"

const StationList = () => {
  const supabase = createClientComponentClient()

  const [stations, setStations] = useState()

  const { stationsReturn, error } = supabase.from("stations").select(" station_id,station_name,routes");
  setStations(JSON.stringify(stationsReturn))


  const handleClick = async () => {
    const { data, error } = await supabase.from("stations").select("*").eq('id', 1)
    setData(JSON.stringify(data))

    stations.forEach(function(station){
      console.log(station.name);
    })
  }

  useEffect(() => {
    handleClick();
  }, []); 

  return (
    <button onClick={handleClick}>{stationsv ? stations : "Client Component"}</button>
  )
}

export default StationList

  
  // let { data: stations, error } = await supabase.from('stations').select(`
  //     station_id,
  //     station_name,
  //     routes
  // `).like('station_name', '%ΠΕΙ%')
  
  /* {stations?.map((station) => (
        lines = station.stations_routes?.map(item => item.route_id) ,
        <a href={'stations/' + station.station_id} className=" bg-orange-100 rounded-lg h-20 w-11/12 flex">
          <div className=" bg-slate-50 rounded-lg h-20 w-5/6">
            <div className=" text-slate-800 font-bold h-11 my-auto p-3 mx-1"> {station.station_name} </div>
            <div className="flex p-1 h-9 ml-2">
              {lines.includes(1) && <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 1 </div>}
              {lines.includes(2) && <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 2 </div>}
              {lines.includes(3) && <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 3 </div>}
              {lines.includes(4) && <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> π </div>}
            </div>
          </div>
          <div className="m-auto">
            <Image src="/icons/questionmarkcircle.svg"
                  alt="icon"
                  width={32}
                  height={32}
            />
          </div>
        </a>
      ))} */