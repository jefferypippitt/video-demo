import { ContactIcon, FilesIcon, HomeIcon, TagsIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full py-6 bg-black'>
      <div className='container flex items-center justify-center px-4 md:px-6'>
        <nav className='flex space-x-4 text-sm'>
          <Link
            className='flex items-center space-x-2 font-semibold text-white hover:underline dark:text-gray-300'
            href='#'
          >
            <HomeIcon className='h-4 w-4' />
            Home
          </Link>
          <Link
            className='flex items-center space-x-2 font-semibold text-white hover:underline dark:text-gray-300'
            href='#'
          >
            <FilesIcon className='h-4 w-4' />
            Docs
          </Link>
          <Link
            className='flex items-center space-x-2 font-semibold text-white hover:underline dark:text-gray-300'
            href='#'
          >
            <TagsIcon className='h-4 w-4' />
            Blog
          </Link>
          <Link
            className='flex items-center space-x-2 font-semibold text-white hover:underline dark:text-gray-300'
            href='#'
          >
            <ContactIcon className='h-4 w-4' />
            Contact us
          </Link>
        </nav>
      </div>
    </footer>
  )
}
