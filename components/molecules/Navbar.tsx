import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
// import { useGenerals } from "../../context/generals.context";
 
import { goToSection } from "@/lib/utils";
import { useGeneralStore } from "@/store";
import { Logo } from "../atoms/Logo";
import { useNavbarContext } from '@/context/navbar.context';
 

interface NavbarProps {
   isMenuOpen: boolean;
   closeMenu: () => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
   const { polylang } = useGeneralStore();
   const { activeSection, setScrolltoSectionFromOtherPage } = useNavbarContext();
   const { asPath } = useRouter();

   const handleGoToSection = (url: string) => {
      goToSection(url);
      closeMenu();
   };

 
   return (
      <nav className={`Navbar ${isMenuOpen ? "isActive" : ""}`}>
         <div className="Navbar-ctn">
            <Logo />
            <ul className="Navbar-ul">
              
                     <Link  href={"/"} onClick={closeMenu}>
                        <li
                           className="Navbar-li"
                            
                        >hola
                  
                        </li>
                     </Link>
                     <Link  href={"/"} onClick={closeMenu}>
                        <li
                           className="Navbar-li"
                            
                        >hola
                  
                        </li>
                     </Link>   <Link  href={"/"} onClick={closeMenu}>
                        <li
                           className="Navbar-li"
                            
                        >hola
                  
                        </li>
                     </Link>   <Link  href={"/"} onClick={closeMenu}>
                        <li
                           className="Navbar-li"
                            
                        >hola
                  
                        </li>
                     </Link>   <Link  href={"/"} onClick={closeMenu}>
                        <li
                           className="Navbar-li"
                            
                        >hola
                  
                        </li>
                     </Link>
                  {/* ) : (
                     <li
                        key={id}
                        className={`Navbar-li ${asPath === url && "isActive"}`}
                        onClick={() => handleGoToSection(url)}
                     >
                        {label}
                     </li>
                  )
               )}
               {menuPartTwo.map(({ id, label, url }) => (
                  <Link key={id} href={url} onClick={closeMenu}>
                     <li
                        className={`Navbar-li ${url === asPath && "isActive"} ${
                           url === "/contact" && "contact"
                        }`}
                        onClick={() => setScrolltoSectionFromOtherPage(url)}
                     >
                        {label}
                        <span className="icon-main-arrow"></span>
                     </li>
                  </Link>
               ))} */}
            </ul>
         </div>
      </nav>
   );
};
