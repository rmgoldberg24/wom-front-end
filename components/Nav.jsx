"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();
  
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false);
    useEffect(()=> {
      const setUpProviders = async () => {
        const response = await getProviders();
  
        setProviders(response);
      }
  
      setUpProviders();
    }, [])
    return (
        <nav className="bg-cyan-900 border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src='/assets/images/logo.svg' alt='WOM Logo' width={100} height={100} className='object-contain'/>
                </Link>

           {/* Desktop Navigation */}
      <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <button type='button' 
                    onClick={signOut}
                    className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>
              Sign Out
            </button>
              <Image src={session?.user.image}
                     width={75} 
                     height={75}
                     className='rounded-full'
                     alt='profile'
              />
          </div>
        ): (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type='button'
                      key={provider.name}
                      onClick={()=> signIn(provider.id)}
                      className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>
                Sign In with {provider.name}
              </button>
            ))}
          </>
        )}

      </div>
      </div>
        </nav>
    )
}

export default Nav