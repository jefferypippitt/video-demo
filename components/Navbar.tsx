'use client';


import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from './ui/theme-toggle'
import { Github } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='flex flex-col items-center justify-between p-4 px-6 md:flex-row md:px-20'>
      <div className='flex w-full items-center justify-between md:w-auto'>
        <div className='flex items-center gap-6'>
          <Image src='/logo.svg' alt='logo' width={150} height={150} />
        </div>
        <div className='flex md:hidden'>
          <button onClick={handleMenuToggle} className='focus:outline-none'>
            <svg
              className='h-6 w-6'
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
        } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:gap-6`}
      >
        <div className='mt-4 flex flex-col items-center gap-6 md:flex-row'>
          {' '}
          {/* Added mt-4 class here */}
          <Link
            href='/'
            className='font-medium underline-offset-4 hover:underline'
          >
            Home
          </Link>
          <Link
            href='#'
            className='font-medium underline-offset-4 hover:underline'
          >
            Contact
          </Link>
          <div className='flex items-center gap-4'>
            <ModeToggle />
            <Button variant='outline' size='icon'>
              <Link href='https://github.com/jefferypippitt' target='_blank'>
                <Github />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
