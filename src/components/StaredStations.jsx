"use client"

import { useState , useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image";

const StaredStations = () => {
    const [stations, setStations] = useState();

    const supabase = createClientComponentClient()

    const [data, setData] = useState()

    const handleClick = async () => {
        console.log( 'true func' );
    }

    useEffect(() => {
        handleClick();
    }, []); 

    return (
        <>
            <div className="bg-slate-50 rounded-xl m-4 flex w-11/12">
                <div className="w-2/12 bg-red-300 rounded-md p-4">
                    <Image src="/icons/star.svg"
                           alt="icon"
                           width={32}
                           height={32}
                    />
                </div>
                <div className="w-5/12 bg-blue-300 rounded-md p-4"> STATION 1 </div>
                <div className="w-5/12  bg-red-300 rounded-md p-4"> STATION 2 </div>
            </div>
            <button className="bg-slate-50 p-8" onClick={handleClick}> klllll </button>
        </>
    )
}

export default StaredStations