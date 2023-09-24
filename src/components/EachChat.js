import React from "react"
import Typewriter from "typewriter-effect"

const EachChat = (props) => {
  // console.log(chat);
  console.log(props)
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
          <>
            <div className="flex justify-start flex-col text-justify bg-white py-2 px-4 text-black rounded-md mx-2 mt-2 max-w-[400px]">
              {props?.computer}

              {props.hasOwnProperty("download_url") &&
                props.download_url !== null && (
                  <h1 className="mt-2 bg-action w-fit py-1 pl-2 text-white pr-2 rounded-md">
                    <a href={props?.download_url} target="_blank">
                      Download your file
                    </a>
                  </h1>
                )}
            </div>
          </>
        ) : null}
      </div>

      {props.hasOwnProperty("audio") && props.audio !== null && (
        <audio id="audio" src={props?.audio} controls></audio>
      )}
    </div>
  )
}

export default EachChat
