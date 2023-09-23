"use client"
import WaterMark from "@/components/watermark"
import { IoSend } from "react-icons/io5"
import { chats } from "../../../utils/constants"
import EachChat from "@/components/EachChat"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "../../../supabase"

export default function Page() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const router = useRouter()

  const res = async()=>{
    const test = await supabase.auth.getUser()
    if(test.data.user){
      setIsLoggedIn(true)
      console.log((test.data));
    }
    else{
      setIsLoggedIn(false)
      router.push("/auth")
    }
  }

  useEffect(()=>{
    res()
  },[isLoggedIn])
  // console.log(chats);
  return (
    <>
      {isLoggedIn 
      ? 
      <>
        <main className="flex flex-col bg-bgprimary h-full">
          <WaterMark />

          {/* What to add here to make it a chat Ui for two users? */}

          {/* <Chat /> */}
          <div className="flex flex-col z-20 overflow-y-scroll h-[90vh]">
            {chats.map((chat)=>{
              return(
                <>
                  <EachChat
                    user ={chat.user}
                    computer = {chat.computer}
                  />
                </>
              )
            })}
          </div>

          {/* This below code is of input and send */}
          <div className="flex w-full bg-bgprimary">
            <main className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  className="border-2 border-action bg-transparent rounded-md w-[40vw] text-xl px-2 py-1"
                  placeholder="Enter text to translate"
                />
                <div>
                  <div className="bg-secondary px-2 py-2 rounded cursor-pointer">
                    <IoSend className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
      </>
      :
      null
      }
    </>
  )
}
