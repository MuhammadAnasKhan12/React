import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const githubInfoLoader = async () => {
  const resp = await fetch("https://api.github.com/users/MuhammadAnasKhan12");
  return resp.json();
};
function Github() {
    const data = useLoaderData();
  return (
      <div className='text-center m-4 bg-gray-500 text-white p04 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
    
          )
}

export default Github

