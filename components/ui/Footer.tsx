import { Roboto } from 'next/font/google'

import React from 'react'
const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400'],
})

const Footer = () => {
   return (
      <div className="footer">
         <ul className="footer-ul">
            <li className="flex gap-2 items-center">
               <span className={`${roboto.className} footer-span`}>Follow Us:</span>
               <a className="icon-facebook"></a>
               <a className="icon-instagram"></a>
            </li>
            <li className="flex gap-1 items-center">
               <div className="icon-location"></div>
               <a className={`${roboto.className} footer-phone`}>(424) 552 - 9549 / (310) 809 - 0625</a>
            </li>
            <li className="flex gap-1 items-center">
               <div className="icon-message"></div>
               <a className={`${roboto.className} footer-email`}>customer@citygarden&painter.com</a>
            </li>
            <li className="flex gap-1 items-center">
               <div className="icon-location"></div>
               <a className={`${roboto.className} footer-location`}>San Pedro, CA, 90731</a>
            </li>
            <li className="flex gap-1 items-center">
               <div className="icon-calendar"></div>
               <a className={`${roboto.className} footer-calendar`}>Monday to Saturday 8:00 a.m. - 06:00 p.m.</a>
            </li>
         </ul>
      </div>
   )
}

export default Footer
