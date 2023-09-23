"use client"


import React, { useState } from 'react'
import { supabase } from '../../supabase';
import {FcGoogle} from "react-icons/fc"
import { useRouter } from 'next/navigation';

const Signup = () => {
    const router = useRouter();
    const [user_detail, setUser_detail] = useState({
        email: "",
        password: "",
      });

      const [signIn,setSignIn] = useState(true)

      const handleSingIN = ()=>{
        setSignIn(false)
        setUser_detail({
            email:"",
            password:""
        })
      }

      const handleSingUp = () =>{
        setSignIn(true)
        setUser_detail({
            email:"",
            password:""
        })
      }
    
      const handelSubmit = (e) => {
        e.preventDefault();
        if(signIn){
            const res = async function signInWithEmail() {
                const { data, error } = await supabase.auth.signInWithPassword({
                  email: user_detail.email,
                  password: user_detail.password,
                })
                console.log(data);
                router.push("/user")
            }
            res()
        }
        else{
            const res = async function signUp() {
                console.log(user_detail);
                const { data, error } = await supabase.auth.signUp({
                    email: user_detail.email,
                    password: user_detail.password,
                  })
                console.log(data);
            }
            res()
        }
      };

      const handleGoogleAuth = (e)=>{
        const res = async () =>{
            const test = await supabase.auth.signInWithOAuth({
                provider:"google",
                options: {
                    queryParams: {
                      access_type: 'offline',
                      prompt: 'consent',
                    },
                  },
            })
        }
        res();
      }
  return (
    <div className="mt-[150px] flex justify-center items-center flex-col ">
      
      <form
        onSubmit={handelSubmit}
        className="flex flex-col justify-center items-center gap-y-4 w-[450px] border-2 border-[black] border-solid py-[100px] shadow-blue-400 rounded-md shadow-xl bg-slate-50 bg-opacity-50"
      >
        <h1
        className='text-[20px] font-bold mb-10'
      >Welcome to Language converter</h1>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={user_detail.email}
          className="border-2 border-solid border-black rounded-md py-1 px-4 w-[300px]"
          onChange={(e)=>{
            setUser_detail((prev)=>{
                return {
                    ...prev,email:e.target.value
                }
            })
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="border-2 border-solid border-black rounded-md py-1 px-4 w-[300px]"
          value={user_detail.password}
          onChange={(e)=>{
            setUser_detail((prev)=>{
                return {
                    ...prev,password:e.target.value
                }
            })
          }}
        />
        <button 
            type="submit"
            className="bg-black text-white px-8 py-2 font-bold mt-[30px] rounded-md hover:bg-[#3e54c6] w-[300px]"
        >
            {signIn 
                ?
                "Sign In"
                :
                "Sign Up"
            }
        </button>
        {
            signIn
            ?
            <div className='flex flex-row gap-x-1'>
                <p className='flex gap-x-1'>
                    Dont have an account? <span onClick={handleSingIN} className='flex text-blue-600 cursor-pointer'>Sign Up</span>
                </p>
            </div>
            :
            <div>
                <p className='flex gap-x-1'>
                    Want to Sign In? <span onClick={handleSingUp} className='flex text-blue-600 cursor-pointer'>Sign In</span>
                </p>
            </div>
        }

        <div className='flex flex-row justify-center items-center'>
            <div className='border-[1px] border-solid border-[black] mt-[10px] w-[350px] '/>
        </div>

        <button
            className="bg-white flex text-black border-black border-[2px] hover:border-[#3e54c6] px-8 py-1 font-bold rounded-md hover:bg-[#3e54c6] w-[300px] mt-5 justify-center items-center gap-x-3 hover:text-white"
            onClick={handleGoogleAuth}
        >
           <FcGoogle/><p>
           Google
           </p>
        </button>
      </form>
    </div>
  )
}

export default Signup
