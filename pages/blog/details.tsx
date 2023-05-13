import React from 'react'
import style from '../blog/blog.module.css'
import { Rubik } from 'next/font/google'
import { Container } from '@/components/globals/Container'
import blog from '../../public/blog.png'
import Image from 'next/image'
import { Layout } from '@/components/layouts/Layout'

import Tips from '@/components/atoms/Tips'
import BreadCumb from '@/components/molecules/BreadCumb'
import CardBlog from '@/components/molecules/CardBlog'
const rubik = Rubik({
   subsets: ['latin'],
   weight: ['300', '600'],
   variable: '--font-rubick',
})
const Details = () => {
   return (
      <Layout>
         <div className={`${rubik.className} ${style.details}`}>
            <Container>
               {/* <ul className={`${style.blogDconte} flex gap-2`}>
                  <li className={` ${rubik.className} ${style.blogSec}`}>
                     <a>Home</a>
                  </li>
                  {'/'}{' '}
                  <li className={` ${rubik.className} ${style.blogSec}`}>
                     <a>Blog</a>
                  </li>
                  {'/'}
                  <li className={` ${rubik.className} ${style.blogSec}`}>
                     <a>Lorem ipsum dolor sit amet, con...</a>{' '}
                  </li>
               </ul> */}
               <BreadCumb xd="Lorem ipsum dolor sit amet, con sectetur adipiscing elit" />
               <div className={`${style.detailsContainer}`}>
                  <div className="">
                     <div className={`${style.blogdImage}`}>
                        <Image src={blog} alt="alt" className="w-full h-full object-cover" />
                        <div className={`${style.blogdTips}`}>
                           <Tips />
                        </div>
                     </div>

                     <h2 className={`${rubik.className} ${style.blogdTitle}`}>
                        Lorem ipsum dolor sit amet, con sectetur adipiscing elit
                     </h2>
                     <div className={`${rubik.className} ${style.blogCoTitle}`}>
                        <p className={`${rubik.className} ${style.blogSTitle}`}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                           labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                           mauris. Sollicitudin tempor id eu nisl nunc. Ullamcorper velit sed ullamcorper morbi
                           tincidunt ornare. Urna neque viverra justo nec. Aliquet risus feugiat in ante metus dictum at
                           tempor. Mollis nunc sed id semper risus in. Sit amet dictum sit amet. Sodales ut eu sem
                           integer vitae justo eget magna fermentum. Felis eget velit aliquet sagittis id. Senectus et
                           netus et malesuada fames ac turpis. Amet mauris commodo quis imperdiet. Aenean sed adipiscing
                           diam donec adipiscing tristique. Velit dignissim sodales ut eu sem integer. Ultrices vitae
                           auctor eu augue ut lectus. Id porta nibh venenatis cras sed felis. Felis eget velit aliquet
                           sagittis id. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Est ante in nibh
                           mauris cursus. Elementum curabitur
                        </p>
                        <p className={`${rubik.className} ${style.blogSTitle}`}>
                           vitae nunc sed velit dignissim sodales. Vitae aliquet nec ullamcorper sit. Sit amet facilisis
                           magna etiam tempor. Quis varius quam quisque id diam vel quam. Nunc sed velit dignissim
                           sodales ut eu. Massa vitae tortor condimentum lacinia quis vel eros. Quis viverra nibh cras
                           pulvinar mattis nunc sed. Nunc id cursus metus aliquam. Dignissim suspendisse in est ante in
                           nibh mauris cursus. Non consectetur a erat nam at lectus. Dictum at tempor commodo
                           ullamcorper a lacus vestibulum sed. Sed libero enim sed faucibus turpis in eu mi bibendum.
                           Pellentesque nec nam aliquam sem et tortor consequat id. Donec enim diam vulputate ut
                           pharetra. Venenatis cras sed felis eget. Ut tristique et egestas quis ipsum. Quis enim
                           lobortis scelerisque fermentum dui faucibus. Enim sit amet venenatis urna cursus eget. Mollis
                           nunc sed id semper. Diam vulputate ut pharetra sit amet. Mi tempus imperdiet nulla malesuada.
                           Sed augue lacus viverra vitae congue eu consequat ac felis. Tincidunt dui ut ornare lectus.
                           In est ante in nibh mauris cursus mattis. ullamcorper a. Et tortor at risus viverra
                           adipiscing at in tellus integer. Dignissim cras tincidunt lobortis feugiat. Viverra nibh cras
                           pulvinar mattis nunc sed. Aliquam purus sit amet
                        </p>
                        <p className={`${rubik.className} ${style.blogSTitle}`}>
                           luctus venenatis lectus magna fringilla urna. Nisl nisi scelerisque eu ultrices. Consectetur
                           a erat nam at lectus urna duis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce
                           ut placerat. Viverra aliquet eget sit amet tellus cras adipiscing. Turpis tincidunt id
                           aliquet risus feugiat. Consequat semper viverra nam libero justo laoreet sit. Dolor purus non
                           enim praesent elementum facilisis leo. Scelerisque varius morbi enim nunc faucibus a. Nec nam
                           aliquam sem et tortor. Porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
                           viverra ipsum nunc. Sed nisi lacus sed viverra tellus in hac habitasse. Proin fermentum leo
                           vel orci porta non. Pharetra massa massa ultricies mi. Ornare arcu dui vivamus arcu. Eu
                           consequat ac felis donec. Eu scelerisque felis imperdiet proin fermentum. Leo integer
                           malesuada nunc vel risus commodo viverra
                        </p>
                        <p className={`${rubik.className} ${style.blogSTitle}`}>
                           luctus venenatis lectus magna fringilla urna. Nisl nisi scelerisque eu ultrices. Consectetur
                           a erat nam at lectus urna duis. Egestas quis ipsum suspendisse ultrices gravida dictum fusce
                           ut placerat. Viverra aliquet eget sit amet tellus cras adipiscing. Turpis tincidunt id
                           aliquet risus feugiat. Consequat semper viverra nam libero justo laoreet sit. Dolor purus non
                           enim praesent elementum facilisis leo. Scelerisque varius morbi enim nunc faucibus a. Nec nam
                           aliquam sem et tortor. Porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed
                           viverra ipsum nunc. Sed nisi lacus sed viverra tellus in hac habitasse. Proin fermentum leo
                           vel orci porta non. Pharetra massa massa ultricies mi. Ornare arcu dui vivamus arcu. Eu
                           consequat ac felis donec. Eu scelerisque felis imperdiet proin fermentum. Leo integer
                           malesuada nunc vel risus commodo viverra
                        </p>
                     </div>
                  </div>

                  <div className={`${style.detailsCard} `}>
                     <CardBlog />
                     <CardBlog />
                     <CardBlog />
                  </div>
               </div>
            </Container>
         </div>
      </Layout>
   )
}

export default Details
