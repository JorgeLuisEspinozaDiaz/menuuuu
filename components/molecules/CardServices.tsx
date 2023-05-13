import React from 'react'
import house from '../../public/house.png'
import house1 from '../../public/house1.png'
import Image from 'next/image'
import ButtonGreen from '../atoms/ButtonGreen'
import { Rubik } from 'next/font/google'

const rubick = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
})
export interface Props {
   services: { title: string; subtitle: string; cardImgheader: string; cardImgIcons: string }
}
const CardServices = ({ services }: Props) => {
   return (
      <div className="cardServices">
         <div className="cardServices-header">
            <Image
               src={services.cardImgheader}
               width={1000}
               height={1000}
               alt="house"
               className="w-full h-full object-cover img"
            />
         </div>
         <div className="cardServices-conta">
            <div className="cardServices-contaImg">
               <Image
                  src={services.cardImgIcons}
                  width={1000}
                  height={1000}
                  alt="house"
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="cardServices-ConteTex">
               <h5 className={`${rubick.className} cardServices-title`}>{services.title}</h5>
               <p className={`${rubick.className}  cardServices-subtitle `}>{services.subtitle}</p>
               <div className="cardServices-btn">
                  <ButtonGreen />
               </div>
            </div>
            <div className=" cardServices-line "></div>
         </div>
      </div>
   )
}

export default CardServices
