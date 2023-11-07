import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const ServerComponentExample = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("stations").select("*")

  return(
    <>
        {data.map((data) => (
          <div key={data._id}>
            <h1>{data.name}</h1>
            <h1>{data.open_at}</h1>
          </div>
        ))}
    </>
  )
   
}

export default ServerComponentExample

// <div>{JSON.stringify(data)}</div>