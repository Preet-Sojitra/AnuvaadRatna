"use client"
import React, { useEffect, useState } from "react"
import { supabase } from "../../../supabase"
import { useRouter } from "next/navigation"
import Link from "next/link"

const page = () => {
  console.log("In user page")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  const res = async () => {
    const test = await supabase.auth.getUser()
    if (test.data.user) {
      setIsLoggedIn(true)
      console.log(test.data)
    } else {
      setIsLoggedIn(false)
      router.push("/auth")
    }
  }

  const ForLogOut = async () => {
    const test = await supabase.auth.signOut()
    console.log(test)
    router.push("/")
  }

  const handleConversation = () => {
    router.push("/translate")
  }

  useEffect(() => {
    res()
  }, [isLoggedIn])
  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col">
          <div className={`flex justify-between px-10 mt-[15px]`}>
            <h1 className={`text-action font-bold text-3xl`}>Anuvaad रत्न</h1>

            <div className={` flex gap-10 items-center text-lg`}>
              <h2> About </h2>
              <h2> Contact </h2>

              <button
                className="border-action border-2 px-4 text-secondary rounded-md hover:bg-action duration-300 hover:text-white"
                onClick={ForLogOut}
              >
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-[150px]">
            <div className="font-bold text-[25px] text-action">
              Start the conversation instantly
            </div>
            <div>
              <select
                name="language"
                className="border-[1.5px] border-black px-2 py-1 rounded-md w-[250px] font-medium mt-[40px]"
              >
                <option value={"gujarati"}>Gujarati</option>
                <option value={"Bengali"}>Bengali</option>
                <option value={"Hindi"} selected>
                  Hindi
                </option>
                <option value={"Malyalam"}>Malyalam</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                className="bg-[#3e54c6] text-white px-8 py-1 font-bold mt-[30px] rounded-md hover:bg-[white] hover:text-black hover:border-[1px] border-black w-[250px]"
                onClick={handleConversation}
              >
                Start Chat
              </button>
              <Link href={"/pdf"}>
                <button className="bg-[#3e54c6] text-white px-8 py-1 font-bold mt-[30px] rounded-md hover:bg-[white] hover:text-black hover:border-[1px] border-black w-[250px]">
                  Covert pdf
                </button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default page
