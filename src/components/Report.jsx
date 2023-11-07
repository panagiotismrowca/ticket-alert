import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const Report = () => {
  return (
    <>
      <Link href="/reports">
        <div className="relative w-80 mx-auto p-4  backdrop-blur-md bg-white/70 r rounded-lg">
          <div className="flex items-center mb-4">
            <Image
              src="/icons/reporticon.svg"
              width={18}
              height={18}
              alt="Report icon"
            />
            <h2 className="text-lg font-semibold ml-1"> Reports </h2>
          </div>
          <Image
            src="/headers/reportheader.svg"
            width={500}
            height={500}
            alt="Report paper"
          />
        </div>
      </ Link>
    </>
  )
}