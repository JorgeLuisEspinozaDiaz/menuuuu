import Image from 'next/image'
import React from 'react'
import house from '../../public/housepainter.png'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['400', '600', '700'],
})

interface Prop {
   project: { cardTitle: string; cardDesc: string; cardImg: string }
}
const CardProjects = ({ project }: Prop) => {
   return (
      <div className="cardProjects">
         <Image src={project.cardImg} width={1000} height={1000} className="w-full h-full" alt="" />
         <div className="cardProjects-conte">
            <div className="cardProjects-capa">
               <div className="cardProjects-text">
                  <h2 className={`${rubik.className} cardProjects-title`}>{project.cardTitle}</h2>
                  <p className={`${rubik.className} cardProjects-subtitle`}>{project.cardDesc} </p>
               </div>
               <div className="cardProjects-glass">
                  <span className="icon-glass"></span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CardProjects
