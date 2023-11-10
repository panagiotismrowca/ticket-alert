import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const StationReports = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("stations").select("*")

  return(
    <>
        <div className="m-0 bg-white backdrop:blur-md flex justify-center space-x-3">
          <div className="bg-red-200 p-8">
            EXEI
          </div>
          <div className="bg-red-200 p-8">
            EXEI
          </div>
          <div className="bg-red-200 p-8">
            EXEI
          </div>

        </div>
        {data.map((data) => (
          <div key={data._id}>
            <h1>{data.name}</h1>
            <h1>{data.open_at}</h1>
          </div>
        ))}
    </>
  )
   
}

export default StationReports

// <div>{JSON.stringify(data)}</div>