import Image from 'next/image'
import React from 'react'
import pink from '../../public/pink.png'
import { Container } from '../globals/Container'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '500', '700'],
   variable: '--font-rubick',
})
const homeAbout = {
   homeAboutMore: 'More than',
   homeAboutNumber: '250',
   homeAboutSucessfull: 'Sucessful Projects',
   homeAboutTitle: '  We are here to help you create a space you’ll love for a very long time!',
   homeAboutSubTitle:
      'City Garden & Painter has over 20 years of experience providing homes and businesses in the greater Los Angeles area and nearby coastal ports with a fresh and renewed appearance.',
   homeAboutcardTitle1: 'Our Mission',
   homeAboutcardSubTitle1:
      'City Garden & Painter has over 20 years of experience providing homes and businesses in the greater Los Angeles area and nearby coastal ports with a fresh and renewed appearance.',
   homeAboutcardTitle2: 'Our Mission',
   homeAboutcardSubTitle2:
      'We aspire to lead the painting and gardening industry with our commitment to environmental  sustainability and exceptional service, creating a world with beautiful buildings while contributing to a healthier planet.',
   homeAboutimg: '/painter1.png',
}

const HomeAbout = () => {
   return (
      <Container>
         <div className="homeAbout">
            <div className="homeAbout-painterImg">
               <Image
                  src={homeAbout.homeAboutimg}
                  width={1000}
                  height={1000}
                  alt="painter"
                  className="w-full h-full object-cover homeAbout-img  "
               />
               <div className="homeAbout-pinkImg">
                  <Image src={pink} alt="pink" className="w-full h-full object-cover" />
               </div>
               <div className="homeAbout-green">
                  <span className={`${rubik.className} homeAbout-span1 `}>{homeAbout.homeAboutMore}</span>
                  <span className={`${rubik.className}  homeAbout-span2`}>{homeAbout.homeAboutNumber}</span>
                  <span className={`${rubik.className}  homeAbout-span3`}>{homeAbout.homeAboutSucessfull}</span>
               </div>
            </div>

            <div className="homeAbout-conten">
               <h1 className={`${rubik.className} homeAbout-conten-title`}>{homeAbout.homeAboutTitle}</h1>
               <p className={`${rubik.className} homeAbout-conten-subtitle`}>{homeAbout.homeAboutSubTitle}</p>
               <div className="homeAbout-conte-card ">
                  <div className="homeAbout-card">
                     <div className="homeAbout-cardLine"></div>
                     <div className="homeAbout-cardConte">
                        <h2 className={`${rubik.className} homeAbout-cardTitle`}>{homeAbout.homeAboutcardTitle1}</h2>
                        <h4 className={`${rubik.className} homeAbout-cardSubtitle`}>
                           {homeAbout.homeAboutcardSubTitle2}
                        </h4>
                     </div>
                  </div>

                  <div className="homeAbout-card ">
                     <div className="homeAbout-cardLine"></div>
                     <div className="homeAbout-cardConte">
                        <h2 className={`${rubik.className} homeAbout-cardTitle`}>{homeAbout.homeAboutcardTitle2}</h2>
                        <h4 className={`${rubik.className} homeAbout-cardSubtitle`}>
                           {homeAbout.homeAboutcardSubTitle2}
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   )
}

export default HomeAbout
