'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex flex-row backdrop-blur-lg bg-slate-900/90 pl-4 p-3 top-0 sticky w-full">
      <Link href="/">
        <Image
          className={`flex overflow-scroll w-14 h-auto`}
          src="/logo/white-logo.svg"
          width={0}
          height={0}
          alt="Report icon"
          priority={true}
        />
      </Link>
    </header>
  );
};
