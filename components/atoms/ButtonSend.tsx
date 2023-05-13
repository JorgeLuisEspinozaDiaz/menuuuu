import { Rubik } from 'next/font/google'
import React from 'react'
const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})
const ButtonSend = () => {
   return (
      <div className="btnSend">
         <span className="span-send"></span>
         <button className="btns-send">
            <span className={`${rubick.className} btn-send`}>Send</span>
         </button>
      </div>
   )
}

export default ButtonSend
