"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <nav className='flex flex-col md:flex-row items-center justify-between p-4 px-6 md:px-20 bg-black'>
      <div className='flex items-center gap-6'>
        <Image src={'logo.svg'} alt='logo' width={150} height={150} />
        <Link href='#' className='font-medium text-white'>
          Home
        </Link>
        <Link href='#' className='font-medium text-white'>
          Docs
        </Link>
        <Link href='#' className='font-medium text-white'>
          Blog
        </Link>
        <Link href='#' className='font-medium text-white'>
          Contact
        </Link>
      </div>
      <div className='flex items-center mt-4 md:mt-0'>
      </div>
      <ModeToggle />
    </nav>
  );
}
