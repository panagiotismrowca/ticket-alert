import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <div className="bg-slate-900 p-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-white text-xl font-bold text-center ">DANGER ELEGKTES</div>
      </ Link>
    </div>
  )
}