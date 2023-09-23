"use client"
import { Poppins, Roboto } from "next/font/google"
import Link from "next/link"
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function navbar() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const res = async()=>{
    const test = await supabase.auth.getUser()
    if(test.data.user){
      setIsLoggedIn(true)
      console.log((test.data));
    }
    else{
      setIsLoggedIn(false)
    }
  }

  useEffect(()=>{
    res()
  },[])
  return (
    <>
      <div className={`flex justify-between px-10 `}>
        <h1 className={`text-action font-bold text-3xl ${poppins.className}`}>
          Anuvaad रत्न
        </h1>

        <div className={`${roboto.className} flex gap-10 items-center text-lg`}>
          <h2> About </h2>
          <h2> Contact </h2>

          <Link href={isLoggedIn ? "/user": "/auth"}>
            <button className="border-action border-2 px-4 text-secondary rounded-md hover:bg-action duration-300 hover:text-white">
              {isLoggedIn ? "Dashboard": "Log In"}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
