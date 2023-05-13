import { Container } from '@/components/globals/Container'
import { Layout } from '@/components/layouts/Layout'
import React from 'react'
import style from '../contact/contact.module.css'
import { Rubik } from 'next/font/google'
import ButtonSend from '@/components/atoms/ButtonSend'
import Image from 'next/image'
import pointer from '../../public/pointers.png'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '400', '700'],
   variable: '--font-roboto',
})
const index = () => {
   return (
      <Layout>
         <Container>
            <div className={`${style.contact}`}>
               <div className={`${style.contactImg}`}>
                  <Image src={pointer} alt="" className="w-full h-full object-cover" />
               </div>
               <div className={`${style.contactForm}`}>
                  <h1 className={` ${rubik.className} ${style.contactTitle}`}>
                     Ready to give your home or business a new look?
                  </h1>
                  <form className={`${style.form}`}>
                     <div className={`${style.container}`}>
                        <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                           Full name
                        </label>
                        <input className={`${style.formInput}`} type="text" />
                     </div>
                     <div className={`${style.flexs}`}>
                        <div className={`${style.container}`}>
                           <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                              Phone
                           </label>
                           <input className={`${style.formInput}`} type="text" />
                        </div>
                        <div className={`${style.container}`}>
                           <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                              City
                           </label>
                           <input className={`${style.formInput}`} type="text" />
                        </div>
                     </div>

                     <div className="">
                        <h2 className={` ${rubik.className} ${style.contactTitleS}`}>Service</h2>

                        <div className={`${style.containerCheck}`}>
                           <div className={`${style.formCheck}`}>
                              <input type="checkbox" className={`${style.check}`} name="" id="" />
                              <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                                 Exterior Painting
                              </label>
                           </div>

                           <div className={`${style.formCheck}`}>
                              <input type="checkbox" className={`${style.check}`} name="" id="" />
                              <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                                 Interior Painting
                              </label>
                           </div>

                           <div className={`${style.formCheck}`}>
                              <input type="checkbox" className={`${style.check}`} name="" id="" />
                              <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                                 Gardening Services
                              </label>
                           </div>

                           <div className={`${style.formCheck}`}>
                              <input type="checkbox" className={`${style.check}`} name="" id="" />
                              <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                                 Damp-proofing Services
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className={`${style.container}`}>
                        <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                           How soon do you want this project to start?
                        </label>
                        <input className={`${style.formInput}`} type="text" />
                     </div>
                     <div className={`${style.container}`}>
                        <label className={` ${rubik.className} ${style.formLabel}`} htmlFor="">
                           Let us know any information relevant to the project:
                        </label>
                        <textarea className={`${style.formInputarea}`} />
                     </div>
                     <div>
                        <ButtonSend />
                     </div>
                  </form>
               </div>
            </div>
         </Container>
      </Layout>
   )
}

export default index
