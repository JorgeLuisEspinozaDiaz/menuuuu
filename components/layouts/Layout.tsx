import { FC, PropsWithChildren } from 'react'

import { Roboto, Rubik } from 'next/font/google'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--font-roboto',
})

const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700', '800', '900'],
   variable: '--font-roboto',
})

export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className={`${roboto.className} flex flex-col justify-between h-[100vh] `}>
         <Header />
         {children}
         <Footer />
      </div>
   )
}
