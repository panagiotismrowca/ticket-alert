import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

const StationList = async () => {
  const supabase = createServerComponentClient({ cookies })

  // let { data: stations, error } = await supabase.from('stations').select(`
  //     station_name,
  //     stations_routes( station_id , route_id )
  // `).eq('stations_routes.route_idgfd', 2)
  let { data: stations, error } = await supabase.rpc("get_stations_with_routes", {route_index: 1});

  let lines = [];

  return(
    <>
      {/* {stations?.map((station) => (
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
      ))} */}{JSON.stringify(stations)}
    </>
  )
   
}

export default StationList

// <div>{JSON.stringify(data)}</div>                             {station.name}



// {JSON.stringify( station.stations_routes[1].'route_id' )}