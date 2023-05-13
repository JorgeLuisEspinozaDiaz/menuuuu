import { Rubik } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
import { Container } from '../globals/Container'
import CardValues from '../molecules/CardValues'
import { Autoplay, Pagination, SwiperOptions } from 'swiper'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600', '800'],
   variable: '--font-rubick',
})

const swiperOptions: SwiperOptions = {
   slidesPerView: 'auto',
   autoplay: {
      delay: 10000,
      disableOnInteraction: false,
   },
   loop: false,
   speed: 700,
   spaceBetween: 15,
   pagination: {
      el: '.HomeCharac-pagination',
      clickable: true,
      type: 'bullets',
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
         slidesPerView: 4,
         spaceBetween: 0,
      },
   },
   modules: [Pagination, Autoplay],
}

const cardItems = [
   {
      cardTitle: 'Skilled Painters',
      cardDesc: 'Our experienced painters will transform any room into a beautiful and inviting space.',
      cardImg: '/brocha.png',
   },
   {
      cardTitle: 'Skilled Painters',
      cardDesc: 'Our experienced painters will transform any room into a beautiful and inviting space.',
      cardImg: '/glasss.png',
   },
   {
      cardTitle: 'Skilled Painters',
      cardDesc: 'Our experienced painters will transform any room into a beautiful and inviting space.',
      cardImg: '/brocha.png',
   },
   {
      cardTitle: 'Skilled Painters',
      cardDesc: 'Our experienced painters will transform any room into a beautiful and inviting space.',
      cardImg: '/glasss.png',
   },
]

const homeValues = {
   homeValuesTitle: 'Leave it all to us!',
   homeValuesSubtitle: 'Well manage the entire process, from prep work to clean-up.',
   homeValuesParagraph:
      'Every service we perform is carried out with high commitment and extreme care. Whether it is painting or gardening services, we clean up the place after we finish our work, so you dont have to worry about it.',
}

const HomeValues = () => {
   return (
      <Container>
         <div className="homeValues">
            <div className="homeValues-Text">
               <div className="homeValues-line"></div>
               <div className={`${rubik.className} homeValues-conteText`}>
                  <span className={`homeValues-title`}>{homeValues.homeValuesTitle}</span>
                  <span className={`homeValues-subtitle`}>{homeValues.homeValuesSubtitle}</span>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <p className={`${rubik.className} homeValues-paragraph`}>{homeValues.homeValuesParagraph}</p>
            </div>
         </div>
         <div className="homeValues-swiper">
            <Swiper {...swiperOptions}>
               {cardItems.map((item, index) => (
                  <SwiperSlide key={index}>
                     <CardValues index={index + 1} item={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className={`HomeCharac-pagination`}></div>
         </div>
      </Container>
   )
}

export default HomeValues
