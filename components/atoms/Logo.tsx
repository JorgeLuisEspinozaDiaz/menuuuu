import Image from "next/image";
import Link from "next/link";
import imGW from "../../public/images.png"
export const Logo   = ( ) => {
   return (
      <Link href={"/"} legacyBehavior>
         <a className="">
            <picture className={`cursor-pointer`}>
                
                  <Image
                     priority
                     src= {imGW}
                     width={100}
                     className="Logo"
                     height={100}
                     alt="Security System"
                  />
                
            </picture>
         </a>
      </Link>
   );
};
