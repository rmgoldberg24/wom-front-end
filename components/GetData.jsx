import React from 'react';
import Image from 'next/image';

const GetData = () => {
  return (
    					<a href="/view-data" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<Image src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            fill/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-6xl">View Recs.</h3>
					</a>
  )
}

export default GetData