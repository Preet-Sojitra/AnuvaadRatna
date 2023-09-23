"use client"
import WaterMark from "@/components/watermark"
import { IoSend } from "react-icons/io5"
// import { chats } from "../../../utils/constants"
import EachChat from "@/components/EachChat"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "../../../supabase"
import axios from "axios"

const API_URL = "http://127.0.0.1:5000"

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  const [chats, setChats] = useState([])

  const [input, setInput] = useState("")

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSend = async () => {
    const userMessage = {
      user: input,
      computer: "Loading...",
    }

    setChats([...chats, userMessage])

    const updatedChats = [...chats, userMessage]
    // console.log("updatedChats")
    // console.log(updatedChats)

    try {
      const res = await axios.post(`${API_URL}/predict`, {
        input: input,
      })
      console.log(res.data)

      userMessage.computer = res.data.Translation
      // console.log("User message")
      // console.log(userMessage)

      // Find the index of the loading message and replace it
      const loadingIndex = updatedChats.findIndex(
        (message) => message.computer === "Loading..."
      )
      // console.log("Loading index")
      // console.log(loadingIndex)
      if (loadingIndex !== -1) {
        updatedChats[loadingIndex] = userMessage
        setChats([...updatedChats])
      }

      // const indexOfUserMessage = updatedChats.indexOf(userMessage)
      // updatedChats[indexOfUserMessage] = userMessage

      // const updatedChats = [...chats]
      // updatedChats.pop()
      // updatedChats.push(userMessage)

      setChats([...updatedChats])
    } catch (error) {
      console.log("Error in sending message")
      console.log(error)
    }
    setInput("")
  }

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

  useEffect(() => {
    res()
  }, [isLoggedIn])
  // console.log(chats);
  return (
    <>
      {isLoggedIn ? (
        <>
          <main className="flex flex-col bg-bgprimary h-full">
            <WaterMark />

            {/* <Chat /> */}
            <div className="flex flex-col z-20 overflow-y-scroll h-[90vh] p-4 mb-4 ">
              {chats.map((chat) => {
                return (
                  <>
                    <EachChat
                      key={chat}
                      user={chat.user}
                      computer={chat.computer}
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
                    value={input}
                    onChange={handleInput}
                  />
                  <div>
                    <div
                      className="bg-secondary px-2 py-2 rounded cursor-pointer"
                      onClick={handleSend}
                    >
                      <IoSend className="text-white text-lg" />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
        </>
      ) : null}
    </>
  )
}
