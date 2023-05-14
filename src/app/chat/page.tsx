'use client';
import React, { useEffect } from 'react';
import axios from '../../hooks/axios.hook';
// import axios from 'axios';
function page() {

  useEffect(()=>{
    axios.get('/view').then(res=>{
      console.log(res)
    })
  } ,[])
  return (
    <div>
      hello this is chat page with
    </div>
  );
}

export default page;