import { Rubik } from 'next/font/google'
import React from 'react'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '700'],
   variable: '--font-rubick',
})

const homeBannerMidle = {
   title: 'Transform Your Home with Our Painting and Gardening Services!',
   subtitle:
      '   Let us add some color to your walls and beauty to your outdoor space. Contact us today to make an appointment and get a free quote!',
}

const HomeBannerMidle = () => {
   return (
      <div className="HomeBannerMidle">
         <h2 className={`${rubik.className} HomeBannerMidle-title `}>{homeBannerMidle.title}</h2>
         <p className={`${rubik.className} HomeBannerMidle-subtitle `}>{homeBannerMidle.subtitle}</p>
      </div>
   )
}

export default HomeBannerMidle
