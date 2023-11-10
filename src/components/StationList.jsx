"use client"

import { useState , useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import Image from "next/image"

const StationList = () => {
    const supabase = createClientComponentClient();
    const [stations, setStations] = useState();
    const storedStations = JSON.parse(localStorage.getItem('stations'));

    useEffect(() => {
        if (storedStations) {
            setStations(storedStations);
        } else {
            getStations();
        }
    }, []);

    const getStations = async () => {
        const { data, error } = await supabase.from('stations').select('*').order('station_name', 'asc');

        if (data) {
            setStations(data);
            localStorage.setItem('stations', JSON.stringify(data));
        } else {
            console.log(error);
        }
    };
  
    const searchStations = (keyword) => {
        const initialStations = storedStations || stations;
      
        const normalizedKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        const filteredStations = initialStations.filter(station =>
            station.station_name.toUpperCase().includes(normalizedKeyword.toUpperCase())
        );
      
        setStations(filteredStations);
    };
  


  return (
      <>
          <input 
              className="transition-all duration-300 rounded-lg p-2 border outline-none  bg-slate-50 
                    w-10/12       bg-opacity-10       placeholder:text-slate-50        text-slate-50
              focus:w-11/12 focus:bg-opacity-75 focus:placeholder:text-slate-950 focus:text-slate-950"
              placeholder="Αναζήτηση" onChange={(e) => searchStations(e.target.value)} type="text" 
          />

          {stations?.map((station) => (
              <Link href={'stations/' + station.station_id} className=" bg-slate-800 rounded-lg h-20 w-11/12 lg:w-8/12 flex">
                  <div className=" bg-slate-50 rounded-lg h-20 w-5/6">
                      <div className=" text-slate-800 font-bold h-11 my-auto p-3 mx-1"> {station.station_name} </div>
                      <div className="flex p-1 h-9 ml-2">
                          {station.routes.includes(1) && <div className="font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 1 </div>}
                          {station.routes.includes(2) && <div className="font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 2 </div>}
                          {station.routes.includes(3) && <div className="font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 3 </div>}
                      </div>
                  </div>
                  <div className="m-auto">
                      <Image src="/icons/arrow-small-right.svg"
                             alt="icon"
                             width={32}
                             height={32}
                      />
                  </div>
              </Link>
          ) ) }
      </>
    )
}

export default StationList