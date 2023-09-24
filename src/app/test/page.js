"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { chats } from "../../../utils/constants";
import EachChat from "@/components/EachChat";
import { useRouter } from "next/navigation";
import { supabase } from "../../../supabase";

const API_URL = "http://127.0.0.1:5000";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const [user_msgs,setUser_msgs] = useState([]);
  const chat = chats

  // to check auth
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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault()
    console.log(e.target.fileInput.value);
    e.target.fileInput.value = null
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post(`${API_URL}/predict-pdf`, formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Important for sending files
          },
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });

        setUser_msgs(chat);
    }
  };

  useEffect(()=>{
    res()
  },[])

  return (
    <div>
      {/* <h2>Upload a File</h2> */}
      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}
      
      {/* <form>
        <main className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3">
            <input
              type="file"
              className="border-2 border-black border-dashed flex justify-center px-4 py-1"
              placeholder="Select your file"
              // value={input}
              onChange={handleFileChange}
              required
            />
            <div>
              <div
                className="bg-secondary px-2 py-2 rounded cursor-pointer"
                onClick={handleUpload}
              >
                <IoSend className="text-white text-lg" />
              </div>
            </div>
          </div>
        </main>
      </form> */}

      <>
      {isLoggedIn ? (
        <>
          <main className="flex flex-col bg-bgprimary h-full">

            {/* <Chat /> */}
            <div className="flex flex-col z-20 overflow-y-scroll h-[90vh] p-4 mb-4 ">
              {user_msgs.map((chat) => {
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
            <form
              onSubmit={handleUpload}
            >
              <main className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    className="border-2 border-black border-dashed flex justify-center px-4 py-1"
                    placeholder="Select your file"
                    // value={input}
                    onChange={handleFileChange}
                    required
                    name="fileInput"
                  />
                  <div>
                    <button
                      className="bg-secondary px-2 py-2 rounded cursor-pointer"
                      // onClick={handleUpload}
                      type="submit"
                    >
                      <IoSend className="text-white text-lg" />
                    </button>
                  </div>
                </div>
              </main>
            </form>
          </main>
        </>
      ) : null}
    </>
    </div>
  );
}

export default FileUpload;
