import { useGeneralStore } from "@/store/generalStore";
import { FC } from "react";

interface SocialsProps {
   className?: string;
   rsp?: boolean;
}

export const Socials: FC<SocialsProps> = ({ className, rsp }) => {
   return (
      <div
         className={`socials flex items-start justify-start laptop:items-centerjustify-center ${className}`}
      >
            <div            
               className="item-socials flex items-center justify-center gap-20 w-[200px]"
            >
               <a
                  className="socials__link flex items-center justify-center pointer-events-none gap-20"
               
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className={`socials__icon icon-facebook `}  />
                  <i className={`socials__icon icon-instagram `}  />
               </a>
            </div>
          
      </div>
   );
};
