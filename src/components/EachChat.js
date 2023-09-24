import React from "react"
import Typewriter from "typewriter-effect"
import { PulseLoader} from "react-spinners"
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
            {
              props?.computer === "Loading..." ? 
                <PulseLoader color="#3b82f6" size={10} margin={3} /> 
              : 
                <Typewriter
                    options={{
                    strings: "इस रिपोर्ट में हम आपको कुछ खास",
                    autoStart: true,
                    loop: false,
                    delay:50
                  }}
                />
             }
          </div>
        ) : null}
      </div>

      {props.hasOwnProperty("audio") && props.audio !== null && (
        <audio id="audio" src={props?.audio} controls></audio>
      )}
    </div>
  )
}

export default EachChat
