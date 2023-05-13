import React from 'react'
import Button from '../atoms/Button'
import { Newsreader, Rubik } from 'next/font/google'

const newsreader = Newsreader({
   subsets: ['latin'],
   weight: ['800'],
   variable: '--font-Newsreader',
})
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['400', '800'],
   variable: '--font-rubick',
})

const banner = {
   bannerTitle: 'High-Quality',
   subtitle: 'Painting Services',
   span: 'For commercial or residential buildings',
}

const HomeBanner = () => {
   return (
      <section className="homeBanner">
         <video className="homeBanner-video" src="/video1.mp4" autoPlay muted loop></video>
         <div className=" homeBanner-text  ">
            <div className="homeBanner-contaTex ">
               <div className="icon-spot"></div>
               <span className={`${newsreader.className} homeBanner-title `}>{banner.bannerTitle}</span>
               <div className="icon-spot"></div>
            </div>
            <span className={`${rubik.className}  homeBanner-subtitle `}>{banner.subtitle}</span>
            <span className={`${rubik.className}  homeBanner-span `}>{banner.span}</span>
            <div className="homeBanner-button">
               <Button />
            </div>
         </div>
         <div className=" homeBanner-capa"></div>
      </section>
   )
}

export default HomeBanner
