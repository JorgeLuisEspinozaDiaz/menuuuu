import React from 'react'
import { Container } from '../globals/Container'
import { Rubik } from 'next/font/google'
import CardBlog from '../molecules/CardBlog'
import ButtonSeeMore from '../atoms/ButtonSeeMore'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['700'],
})
const cardBlog = [
   {
      cardTitle: 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit',
      cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      cardImg: '/housee.png',
   },
   {
      cardTitle: 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit',
      cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      cardImg: '/housee.png',
   },
   {
      cardTitle: 'Lorem ipsum dolor sit amet, con sectetur adipiscing elit',
      cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      cardImg: '/housee.png',
   },
]
const HomeBlog = () => {
   return (
      <Container>
         <div className="HomeBlog">
            <div className="flex justify-center">
               <h1 className={`${rubik.className} HomeBlog-title`}>
                  Lorem ipsum dolor si met con sectetur adipiscing elit
               </h1>
            </div>
            <div className="HomeBlog-cardConta">
               {cardBlog.map((blog, index) => (
                  <CardBlog key={index} blog={blog} />
               ))}
            </div>
            <div className="HomeBlog-bottom">
               <ButtonSeeMore />
            </div>
         </div>
      </Container>
   )
}

export default HomeBlog
