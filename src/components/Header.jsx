'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="backdrop-blur-lg bg-slate-900/90 p-4 top-0 sticky w-full">
      <Link href="/">
        <div className="text-white text-xl font-bold text-center ">
        <Image  src="/logo/white-logo.svg"
                width={54}
                height={54}
                alt="Report icon"
                className={`h-full overflow-scroll`}
        />
        </div>
      </ Link>
    </div>
  )
}