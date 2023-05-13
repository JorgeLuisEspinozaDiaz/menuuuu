import { Rubik } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})

const Button = () => {
   return (
      <Link href="/contact">
         <div className="btn">
            <span className="span"></span>
            <button className="btns">
               <span className={`${rubick.className} btn-span `}>Contact Us</span>
            </button>
         </div>
      </Link>
   )
}

export default Button
