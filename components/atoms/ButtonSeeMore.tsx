import { Rubik } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})
const ButtonSeeMore = () => {
   return (
      <Link href="/blog">
         <div className="btnSeeMore">
            <span className="span-seeMore"></span>
            <button className="btns-seeMore">
               <p className={`${rubick.className} btn-seeMore`}>See More</p>
            </button>
         </div>
      </Link>
   )
}

export default ButtonSeeMore
