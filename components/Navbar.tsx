import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ui/theme-toggle'

const Navbar = () => {
  return (
    <nav className='absolute inset-x-0 top-0 flex h-16 items-center justify-between border-b px-20'>
      <Image src='/logo.svg' width={40} height={40} alt='' />
      <div className='flex items-center gap-10'>
        <ul className='flex items-center gap-10'>
          <ModeToggle />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
