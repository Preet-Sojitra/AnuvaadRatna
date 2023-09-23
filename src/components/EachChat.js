import React from 'react'

const EachChat = (props) => {
    // console.log(chat);
  return (
    <div className='flex flex-col z-10'>
        <div className='flex justify-end'>
        {
            props?.user !== null ? 
            <div className='flex justify-start bg-blue-500 py-1 px-4 text-gray-50 rounded-md mx-2 mt-2 max-w-[400px]'>
                {props?.user}
            </div>
            :
            null
        }
        </div>
        <div className='flex justify-start'>
        {
            props?.computer !== null ? 
            <div className='flex justify-start text-justify bg-white py-1 px-4 text-black items-center rounded-md mx-2 mt-2 max-w-[400px]'>
                {props?.computer}
            </div>
            :
            null
        }
        </div>
    </div>
  )
}

export default EachChat
