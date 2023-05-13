import React from 'react'
import Link from 'next/link'
import { Rubik } from 'next/font/google'
const rubick = Rubik({
   subsets: ['latin'],
   weight: ['500'],
   variable: '--font-rubick',
})
interface Props {
   xd?: string
}
const BreadCumb = ({ xd }: Props) => {
   return (
      <div className="BreadCumbs">
         <ul className={`BreadCumbs-list`}>
            <li className={'BreadCumbs-li'}>
               <Link href={'/'}>Home</Link>
            </li>
            <li className={'BreadCumbs-li'}>
               <Link href={'/blog'}>Blog</Link>
            </li>
            {/* <li className={'BreadCumbs-li'}>
               <Link href={'/blog'}>{xd}</Link>
            </li> */}
            {/* <li className={'BreadCumbs-li'}>
               <Link href={'/'}>Lorem ipsum dolor sit amet, con sectetur adipiscing</Link>
            </li> */}
         </ul>
      </div>
   )
}

export default BreadCumb
