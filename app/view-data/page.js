"use client";

import React, {useState} from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import DataIndex from '@/components/DataIndex';
import ViewData from '@/components/ViewData';


const extractData = () => {
  const recTypes = [
    {'title':'Products', 'value':'product'},
    {'title':'Hotels', 'value':'hotel'},
    {'title':'Recipes', 'value':'recipe'},
    {'title':'Restaurants', 'value':'restaurant'}
  ];
  const { data: session } = useSession();
  const [ type, setType] = useState();
  const [ myData, setMyData ] = useState();
  const [ myViewingData, setMyViewingData ] = useState();


  const loadRecs = (event) => {
    event.preventDefault();

    const data = {'type': event.target.value, 'user_id': session.user.id};
    // axios.post('http://127.0.0.1:8000/view_my_data', data)
    axios.post('https://02b7-76-33-147-6.ngrok-free.app/view_my_data', data)
    
    .then(function (response) {
      const responseData = JSON.parse(response.data);
      console.log(responseData);
      setMyData(responseData);
      setType(event.target.value);
    })
  };

  const backToRecipes = () => {
    setMyViewingData();
  };

  const clearMyData = () => {
    setMyViewingData();
    setMyData();
  }
  return (
    <>
    {session?.user ? 
    <div className="text-center font-serif text-2xl m-20 space-y-11">
        {myData ? 
          myViewingData ? 
          <>
            <ViewData data={myViewingData}/> 
            <button type='button' 
                  onClick={backToRecipes}
                  className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>
              Back to my {type} recs.
            </button>
          </>
          : 
            <>
              <DataIndex  myData={myData} 
                          setMyViewingData={setMyViewingData}
                          type={type}/>
                <button type='button' 
                        onClick={clearMyData}
                        className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>
                  Back to my recs.
                </button>
            </>
          : 
          <>
          {recTypes.map(
            (rec) => 
            <button type='button' 
                    value={rec.value}
                    onClick={loadRecs}
                    className='bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full'>
                      {rec.title}
            </button>
          )}
          </>}

    </div>
    :
    <p>NOT LOGGED IN</p>    
    }
    </>
  )
}

export default extractData