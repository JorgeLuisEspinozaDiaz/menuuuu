import Image from 'next/image'
import React from 'react'
import housee from '../../public/housee.png'
import Tips from '../atoms/Tips'
import { Rubik } from 'next/font/google'
import Link from 'next/link'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '700'],
})

interface Prop {
   blog: { cardTitle: string; cardDesc: string; cardImg: string }
}
const CardBlog = ({ blog }: Prop) => {
   return (
      <Link href={'/blog/details'}>
         <div className="CardBlog">
            <div className="cardBlog-img">
               <Image src={blog.cardImg} width={1000} height={1000} className="w-full h-full imgBlog" alt="" />
            </div>
            <div className="cardBlog-conta relative">
               <div className="cardBlog-tips ">
                  <Tips />
               </div>
               <h2 className={`${rubik.className} CardBlog-title`}>{blog.cardTitle}</h2>
               <p className={`${rubik.className} CardBlog-subtitle`}>{blog.cardDesc}</p>
            </div>
         </div>
      </Link>
   )
}

export default CardBlog
