import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex bg-gray-900 p-4 text-white text-center bottom-0 sticky w-full mt-auto">
      <div className="container mx-auto">
        <Link href="https://github.com/panagiotismrowca" className="text-blue-500 hover:underline">
          GitHub
        </Link>
      </div>
    </footer>
  );
};
