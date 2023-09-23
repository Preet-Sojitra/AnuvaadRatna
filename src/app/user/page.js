"use client"
import React from 'react'
import { supabase } from '../../../supabase';

const page = () => {
    console.log("In user page");
    const res = async()=>{
        const test =  await supabase.auth.getUser()
        const test2= await supabase.auth.getSession()
        console.log(test);
        console.log(test2);
    }
    res()

    const ForLogOut = async() =>{
        const test = await supabase.auth.signOut()
        console.log(test);
    }
  return (
    <div>
      Hi user
      <button onClick={ForLogOut}>test</button>
    </div>
  )
}

export default page
