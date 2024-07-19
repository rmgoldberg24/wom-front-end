"use client";

import React, {useState} from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import PerlexityForm from '@/components/PerplexityForm';
import ViewData from '@/components/ViewData';

const extractData = () => {
  const { data: session } = useSession();
  const [ rec, saveRec ] = useState();
  return (
    <>
    {session?.user ?
    <div className="text-center font-serif text-2xl m-20 space-y-11">
        <h1>
          View Data! {JSON.stringify(session?.user)}
        </h1>
        { rec? <ViewData data={rec} saveData={saveRec}/>: <PerlexityForm saveData={saveRec}/>}

        <h2>
            <Link href="/">
            Go home!
            </Link>
        </h2>
    </div>
    :
    <p>NOT LOGGED IN!</p>
    }
    </>
  )
}

export default extractData