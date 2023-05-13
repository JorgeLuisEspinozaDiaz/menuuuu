 
import { Socials } from "../atoms/Socials";
 

export const InfoHeader = () => {
 
   return (
      <div className={`InfoHeader `} data-section="InfoHeader">
         <div className="InfoHeader-container">
            <ul className="InfoHeader-ul">
               <li className="InfoHeader-li">
                  <a className="InfoHeader-a" href={`mailto: `}>
                     <i className="icon-email-two Footer-i"></i>HOLA
                  </a>
               </li>
               <li className="InfoHeader-li">
                  <a
                     className={`InfoHeader-a 
                      "pointer-events-none" : ""
                     }`}
                     href={"/"}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <i className="icon-location InfoHeader-iconMap"></i>
                    
                  </a>
               </li>
            </ul>
            <div className="flex gap-[2rem]">
               <span className="text-white"> </span>
               <Socials rsp={false} className="Footer-socials" />
            </div>
         </div>
      </div>
   );
};
