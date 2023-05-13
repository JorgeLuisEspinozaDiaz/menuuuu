import { Rubik } from 'next/font/google'
import React from 'react'
import { Container } from '../globals/Container'
import CardServices from '../molecules/CardServices'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['700'],
   variable: '--font-rubick',
})

const HomeServices = () => {
   const cardItems = [
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
      {
         title: 'Exterior Painting',
         subtitle:
            'We take pride in providing high-quality exterior painting services for residential and commercial properties. Our specialists guarantee that your propertys exterior looks its best by utilizing the latest techniques and top-of-the-line equipment, so your visitors or customers will have a great first impression. Our services include power washing, surface preparation, priming, and painting. Look no further and contact us now!',
         cardImgheader: '/house.png',
         cardImgIcons: '/house1.png',
      },
   ]

   const homeService = {
      title: 'Services City Garden & Painter Offers',
   }
   return (
      <div className="homeService">
         <Container>
            <div className="flex justify-center">
               <h1 className={`${rubik.className} homeService-tile`}>{homeService.title}</h1>
            </div>
         </Container>
         <Container>
            <div className="container-card">
               {cardItems.map((services, index) => (
                  <CardServices key={index} services={services} />
               ))}
            </div>
         </Container>
      </div>
   )
}

export default HomeServices
