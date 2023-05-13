import { useRouter } from "next/router";
// import { useGenerals } from '../../context/generals.context'
import { useNavbarContext } from "@/context/navbar.context";
import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { Socials } from "../atoms/Socials";
import { MenuIcon } from "../atoms/MenuIcons";
import { Navbar } from "../molecules/Navbar";

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const { asPath } = useRouter();
   const { isTopZero } = useNavbarContext();

   const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
      document.body.classList.toggle("no-scroll");
   };

   const closeMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.remove("no-scroll");
   };

   return (
      <header className="Header"
         // className={`Header ${
         //    isTopZero 
         //       ? "background-white" 
         //       : "background-transparent"}
         //    ${asPath !== "/" ? "background-two" : "bakground-one"
         // }`}
      >
         <div className="Header-ctn">
            <Logo   />
            <Socials className={`${isMenuOpen && "isActive"}`} rsp={true}/>
            <div className={`Header-menuIcon ${isMenuOpen && "isActive"}`}>
               <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
            </div>
            <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <div
               className={`Header-overlay ${isMenuOpen && "isActive"}`}
               onClick={closeMenu}
            />
         </div>
      </header>
   );
};
