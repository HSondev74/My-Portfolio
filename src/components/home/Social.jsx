import React from "react";

const Social = () => {
     return (
          <div className="home__social">
               <a
                    href="https://www.facebook.com/cr7fcJUVETUNE"
                    className="home__social-icon"
                    target="_blank"
                    data-tooltip="Facebook"
               >
                    <i className="uil uil-facebook-f"></i>
               </a>

               <a
                    href="https://github.com/HSondev74"
                    className="home__social-icon"
                    target="_blank"
                    data-tooltip="Instagram"
               >
                    <i className="uil uil-instagram"></i>
               </a>

               <a
                    href="https://www.instagram.com/jsondv"
                    className="home__social-icon"
                    target="_blank"
                    data-tooltip="Github"
               >
                    <i className="uil uil-github"></i>
               </a>
          </div>
     );
};

export default Social;
