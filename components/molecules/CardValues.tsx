import Image from 'next/image'
import React from 'react'
// import brush from '../../public/brocha.png'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
   variable: '--font-rubick',
})

interface Prop {
   index: number
   item: { cardImg: string; cardTitle: string; cardDesc: string }
}
const CardValues = ({ index, item }: Prop) => {
   return (
      <div className={`cardValues card-${index}`}>
         <div className="cardValues-conta">
            <div className="imag">
               <Image width={100} height={100} className="i" src={item.cardImg} alt="brush" />
            </div>
            <span className={`${rubik.className} cardValues-title`}>{item.cardTitle}</span>
            <p className={`${rubik.className} cardValues-subtitle`}>{item.cardDesc}</p>
         </div>
      </div>
   )
}

export default CardValues
