import { Rubik } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})

const ButtonGreen = () => {
   return (
      <Link href="/contact">
         <div className="btnGreen">
            <span className="span-green"></span>
            <button className="btns-green">
               <span className={`${rubick.className} btn-spanGreen`}>Contact Us</span>
            </button>
         </div>
      </Link>
   )
}

export default ButtonGreen
