import React from 'react'
import { Layout } from '@/components/layouts/Layout'
import CardBlog from '@/components/molecules/CardBlog'
import { Rubik } from 'next/font/google'
import style from '../blog/blog.module.css'
import { Container } from '@/components/globals/Container'
import BreadCumb from '@/components/molecules/BreadCumb'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
   variable: '--font-rubick',
})
const index = () => {
   return (
      <Layout>
         <Container>
            <div className={`${style.blog}`}>
               {/* <ul className="flex">
                  <li className={` ${rubik.className} ${style.blogSec}`}>
                     <a>Home</a>
                  </li>
                  {'/'}{' '}
                  <li className={` ${rubik.className} ${style.blogSec}`}>
                     <a>Blog</a>
                  </li>
               </ul> */}
               <BreadCumb />
               <div className="w-full flex justify-center">
                  <h1 className={`${rubik.className} ${style.blogTitle}`}>
                     Lorem ipsum dolor si met, con sectetur adipiscing elit
                  </h1>
               </div>
               <div className={`${style.blogConte}`}>
                  <CardBlog />
                  <CardBlog />
                  <CardBlog />
                  <CardBlog />
               </div>
            </div>
         </Container>
      </Layout>
   )
}

export default index
