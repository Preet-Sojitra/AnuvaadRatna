"use client"
import React, { useEffect, useState } from 'react'
import { supabase } from '../../../supabase';
import { useRouter } from 'next/navigation';

const page = () => {
    console.log("In user page");
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const router = useRouter()

    const res = async()=>{
        const test =  await supabase.auth.getUser()
        const test2= await supabase.auth.getSession()
        console.log(test.data);
        // console.log(test2);
        if(test.data){
          setIsLoggedIn(true)
        }
    }

    const ForLogOut = async() =>{
        const test = await supabase.auth.signOut()
        console.log(test);
        router.push("/")
    }

    useEffect(()=>{
      res()
    },[isLoggedIn])
  return (
    <div>
      Hi user
      <button 
        className='border-[1px] border-black px-5 py-2'
        onClick={ForLogOut}>
          Log Out
      </button>
    </div>
  )
}

export default page
