import React from "react"
import { ChatTeardropDots } from "phosphor-react";

function App() {

  return (
    <div className="absolute bottom-10 right-10">
      <button className="rounded-full p-3 bg-[#8257E5] text-white flex items-center hover:after:transition hover:after:duration-500 hover:after:ease-in-out hover:after:content-['Feedback'] ">
        <ChatTeardropDots className='w-6 h-6' />
      </button>
    </div>
  )
}

export default App
