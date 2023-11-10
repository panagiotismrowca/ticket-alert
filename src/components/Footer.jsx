import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-white text-center fixed bottom-0 w-full mt-10 rounded-t-2xlzzz">
      <div className="container mx-auto">
        <Link
          href="https://github.com/panagiotismrowca"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </ Link>
      </div>
    </footer>
  );
};

