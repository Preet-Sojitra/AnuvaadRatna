import React from "react"
import Typewriter from "typewriter-effect"

const EachChat = (props) => {
  // console.log(chat);
  //   console.log(props)
  return (
    <div className="flex flex-col z-10">
      <div className="flex justify-end">
        {props?.user !== null ? (
          <div className="flex justify-start bg-blue-500 py-2 px-4 text-gray-50 rounded-md mx-2 mt-2 max-w-[400px]">
            {props?.user}
          </div>
        ) : null}
      </div>

      <div className="flex justify-start">
        {props?.computer !== null ? (
          <div className="flex justify-start text-justify bg-white py-2 px-4 text-black items-center rounded-md mx-2 mt-2 max-w-[400px]">
            {props?.computer}
          </div>
        ) : null}
      </div>

      {props?.audio !== null && (
        <audio id="audio" src={props?.audio} controls></audio>
      )}
    </div>
  )
}

export default EachChat
