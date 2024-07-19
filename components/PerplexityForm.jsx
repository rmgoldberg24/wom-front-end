"use client";

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import axios from 'axios';

const PerlexityForm = ( props ) => {
    const { data: session } = useSession();

    const [url, setUrl] = useState();
    const handleClick = (event) => {
        event.preventDefault();
        const data = {'url': url, 'user_id': session.user.id, 'recommender': 'Self'};
        // axios.post('http://127.0.0.1:8000/extract_data', data)
        axios.post('https://02b7-76-33-147-6.ngrok-free.app/extract_data', data)
        
        // axios.post('http://127.0.0.1:8000/extract_recipe', url)
        .then(function (response) {
        const data = JSON.parse(response.data);
        console.log(data);
        props.saveData(data);

        })
    };

    return (
        <form>
            <label className="block m-10 text-2xl font-medium text-gray-900">
                Please paste the URL to rec below.
            </label>
            <input 
                type='text' 
                onChange={event => setUrl(event.target.value)}
                className="block w-full p-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-center text-xl"
            />
            <div>
                <button 
                    className="m-10" 
                    type="submit"
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>
        </form>  
  )
}

export default PerlexityForm