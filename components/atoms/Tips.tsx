import { Rubik } from 'next/font/google'
import React from 'react'
const rubick = Rubik({
   subsets: ['latin'],
   weight: ['300'],
   variable: '--font-rubick',
})
const Tips = () => {
   return (
      <div className="tips">
         <span className={`${rubick.className} tips-text`}>tips</span>
      </div>
   )
}

export default Tips
