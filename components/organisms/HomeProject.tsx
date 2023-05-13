import { Rubik } from 'next/font/google'
import React from 'react'
import { Container } from '../globals/Container'
import CardProjects from '../molecules/CardProjects'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, SwiperOptions } from 'swiper'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['400', '600', '700'],
})
const swiperOptions: SwiperOptions = {
   navigation: {
      prevEl: '.HomeGallery-prev',
      nextEl: '.HomeGallery-next',
   },
   autoplay: {
      delay: 15000,
      disableOnInteraction: false,
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      960: {
         slidesPerView: 3,
         spaceBetween: 10,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
   modules: [Autoplay, Navigation],
}

const HomeProject = () => {
   const cardProject = [
      {
         cardTitle: 'Exterior Painting',
         cardDesc: 'Lorem ipsus rem ipsus',
         cardImg: '/housepainter.png',
      },
      {
         cardTitle: 'Skilled Painters',
         cardDesc: 'Lorem ipsus rem ipsus',
         cardImg: '/housepainter.png',
      },
      {
         cardTitle: 'Skilled Painters',
         cardDesc: 'Lorem ipsus rem ipsus',
         cardImg: '/housepainter.png',
      },
      {
         cardTitle: 'Skilled Painters',
         cardDesc: 'Lorem ipsus rem ipsus',
         cardImg: '/housepainter.png',
      },
   ]

   return (
      <div className="homeProject">
         <Container>
            <h2 className={`${rubik.className} homeProject-title`}>Explore our latest creations</h2>
            <div className="relative">
               <Swiper {...swiperOptions}>
                  {cardProject.map((project, index) => (
                     <SwiperSlide key={index}>
                        <CardProjects project={project} />
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="w-full absolute flex justify-between items-center h-full border-2 top-0">
                  <div className="HomeGallery-arrow HomeGallery-prev">
                     <span className="text-white icon-arrow-left"></span>
                  </div>
                  <div className="HomeGallery-arrow HomeGallery-next">
                     <span className="text-white icon-arrow-rigth"></span>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default HomeProject
