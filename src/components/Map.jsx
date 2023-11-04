import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

export const Map = () => {
  return (
    <>
      <Link href="/maps">
        <div className="relative w-80 mx-auto p-4  backdrop-blur-md bg-white/70 r rounded-lg">
          <div className="flex items-center mb-4">
            <Image
              src="/icons/mapicon.svg"
              width={18}
              height={18}
              alt="Map icon"
            />
            <h2 className="text-lg font-semibold ml-1"> Maps </h2>
          </div>
          <Image
            src="/headers/mapheader.svg"
            width={500}
            height={500}
            alt="Map system"
          />
        </div>
      </ Link>
    </>
  )
}