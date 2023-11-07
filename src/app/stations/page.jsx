import ClientComponentExample from "@/components/ClientComponentExample"
import ServerComponentExample from "@/components/ServerComponentExample"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <ServerComponentExample />

      <Link href="stations/1">
        <div className="w-full p-2 border border-gray-500 rounded-md flex items-center">
          <div className="fw-3/10 h-full flex items-center justify-center">
            <Image
              src="/icons/mapicon.svg"
              width={18}
              height={18}
              alt="Map icon"
            />
          </div>
    <div class="w-7/10 h-full flex items-center justify-center">
        ΣΤΑΘΜΟΣ
    </div>
            <h2 className="text-lg font-semibold ml-1"> Maps </h2>
        </div>
        <div className="w-1/10 h-full flex items-center justify-center">
            <Image
              src="/icons/mapicon.svg"
              width={18}
              height={18}
              alt="Map icon"
            />
          </div>
      </ Link>
      
    </main>
  )
}

export default page