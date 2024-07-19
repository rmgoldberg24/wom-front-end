import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="p-10 align-center">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                <Image src='/assets/images/Mom-Kithcen 2.png' alt="" className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" width="100" height="50"/>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-6xl">Please log in to begin!</h3>
	    </div>
    </div>
  )
}

export default Landing