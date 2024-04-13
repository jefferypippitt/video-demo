"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ModeToggle } from './ui/theme-toggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between p-4 px-6 md:px-20'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <div className='flex items-center gap-6'>
          <Image src='/logo.svg' alt='logo' width={150} height={150} />
        </div>
        <div className='md:hidden flex'>
          <button onClick={handleMenuToggle} className='focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {menuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row md:items-center md:gap-6 w-full md:w-auto`}
      >
        <div className='flex flex-col md:flex-row items-center gap-6 mt-4'> {/* Added mt-4 class here */}
          <Link href='/' className='font-medium'>
            Home
          </Link>
          <Link href='#' className='font-medium'>
            Docs
          </Link>
          <Link href='#' className='font-medium'>
            Blog
          </Link>
          <Link href='#' className='font-medium'>
            Contact
          </Link>
          <div className='flex items-center'>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
