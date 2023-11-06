import "./Footer.css";

const Footer = () => {
     return (
          <footer className="footer">
               <div className="footer__container container">
                    <h1 className="footer__title">JSonDev</h1>
                    <ul className="footer__list">
                         <li>
                              <a href="#about" className="footer__link">
                                   About
                              </a>
                         </li>
                         <li>
                              <a href="#portfolio" className="footer__link">
                                   Projects
                              </a>
                         </li>
                         <li>
                              <a href="#" className="footer__link"></a>
                         </li>
                         <li>
                              <a href="#testimonials" className="footer__link">
                                   Testimonials
                              </a>
                         </li>
                    </ul>

                    <div className="footer__social">
                         <a
                              href="https://www.facebook.com/cr7fcJUVETUNE"
                              className="footer__social-link"
                              target="_blank"
                         >
                              <i className="uil uil-facebook-f"></i>
                         </a>

                         <a
                              href="https://github.com/HSondev74"
                              className="footer__social-link"
                              target="_blank"
                         >
                              <i className="uil uil-instagram"></i>
                         </a>

                         <a
                              href="https://www.instagram.com/jsondv"
                              className="footer__social-link"
                              target="_blank"
                         >
                              <i className="uil uil-github"></i>
                         </a>
                    </div>
                    <span className="footer__copy">
                         Make portfolio in November 2023 &#169;copyright by
                         JSonDev
                    </span>
               </div>
          </footer>
     );
};

export default Footer;
