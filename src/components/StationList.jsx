import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"

const StationList = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("stations").select("*")

  return(
    <>
        {data.map((station) => (
          <a href={'stations/' + station.id} className=" bg-green-100 rounded-lg h-20 w-11/12 flex">
            <div className=" bg-slate-50 rounded-lg h-20 w-5/6">
              <div className=" text-slate-800 font-bold h-11 my-auto p-3 mx-1"> {station.name} </div>
              <div className="flex p-1 h-9 ml-2">
                <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 1 </div>
                <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 2 </div>
                <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> 3 </div>
                <div className=" font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"> π </div>
              </div>
            </div>
            <div className="m-auto">
              <Image src="/icons/checkcircle.svg"
                    width={32}
                    height={32}
              />
            </div>
          </a>
        ))}
    </>
  )
   
}

export default StationList

// <div>{JSON.stringify(data)}</div>                             {station.name}
