"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import GetData from '@/components/GetData';
import Landing from '@/components/Landing';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
    <div className="text-center font-serif text-2xl m-20 space-y-11">
      {session?.user ? 
        <div className="p-10 align-center">
          				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 h-screen">
					<Link href="/extract-data" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            fill/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-6xl">Save Recs.</h3>
					</Link>
        <GetData/>
				</div>
        </div>
      :
      // <Landing/>
      <p>Please log in to begin!</p>
}
    </div>
  </main>
  );
}
