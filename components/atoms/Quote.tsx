import { Rubik } from 'next/font/google'
import React from 'react'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})

const Quote = () => {
   return (
      <div className="btnQuote">
         <span className="span-quote"></span>
         <button className="btns-quote">
            <span className={`${rubick.className} btn-spanQuote `}>Get a quote</span>
         </button>
      </div>
   )
}

export default Quote
