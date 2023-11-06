import { useState } from "react";
import "./Services.css";

const Services = () => {
     const [activeModal, setActiveModal] = useState(0);

     const toggleTab = (index) => {
          setActiveModal(index);
     };
     return (
          <section className="services section" id="services">
               <h2 className="section__title">Services</h2>
               <span className="section__subtitle">What i offer</span>

               <div className="services__container container grid">
                    <div className="services__content show-on-scroll zoom">
                         <div>
                              <i className="uil uil-web-grid services__icon"></i>
                              <h3 className="services__title">
                                   My <br /> Product
                              </h3>
                         </div>

                         <span
                              className="services__button"
                              onClick={() => toggleTab(1)}
                         >
                              View More
                              <i className="uil uil-arrow-right services__button-icon"></i>
                         </span>

                         <div
                              className={
                                   activeModal === 1
                                        ? "services__modal active-modal"
                                        : "services__modal"
                              }
                         >
                              <div className="services__modal-content">
                                   <i
                                        className="uil uil-times services__modal-close"
                                        onClick={() => toggleTab(0)}
                                   ></i>
                                   <h3 className="services__modal-title">
                                        My Product
                                   </h3>
                                   <p className="services__modal-description">
                                        Service with more 5 months of
                                        experience. Providing quality work to
                                        clients and companies.
                                   </p>
                                   <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  <a
                                                       href="https://trello-clone-six-taupe.vercel.app"
                                                       target="_blank"
                                                  >
                                                       Build Trello Clone
                                                  </a>
                                             </p>
                                        </li>
                                        {/* part 2 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  <a href="https://shopee-clone-phi-one.vercel.app">
                                                       Build Website Shopee
                                                  </a>
                                             </p>
                                        </li>
                                        {/* part 3 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  I create ux element
                                                  interactions.
                                             </p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    {/* content 2 */}
                    <div className="services__content show-on-scroll zoom">
                         <div>
                              <i className="uil uil-arrow services__icon"></i>
                              <h3 className="services__title">
                                   UI/UX <br /> Designer
                              </h3>
                         </div>

                         <span
                              className="services__button"
                              onClick={() => toggleTab(2)}
                         >
                              View More
                              <i className="uil uil-arrow-right services__button-icon"></i>
                         </span>

                         <div
                              className={
                                   activeModal === 2
                                        ? "services__modal active-modal"
                                        : "services__modal"
                              }
                         >
                              <div className="services__modal-content">
                                   <i
                                        className="uil uil-times services__modal-close"
                                        onClick={() => toggleTab(0)}
                                   ></i>
                                   <h3 className="services__modal-title">
                                        UI/UX Designer
                                   </h3>
                                   <p className="services__modal-description">
                                        Service with more 5 months of
                                        experience. Providing quality work to
                                        clients and companies.
                                   </p>
                                   <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  develop the user interface
                                             </p>
                                        </li>
                                        {/* part 2 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  web page development.
                                             </p>
                                        </li>
                                        {/* part 3 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  I create ux element
                                                  interactions.
                                             </p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    {/* content 3 */}
                    <div className="services__content show-on-scroll zoom">
                         <div>
                              <i className="uil uil-edit services__icon"></i>
                              <h3 className="services__title">
                                   Visual <br /> Designer
                              </h3>
                         </div>

                         <span
                              className="services__button"
                              onClick={() => toggleTab(3)}
                         >
                              View More
                              <i className="uil uil-arrow-right services__button-icon"></i>
                         </span>

                         <div
                              className={
                                   activeModal === 3
                                        ? "services__modal active-modal"
                                        : "services__modal"
                              }
                         >
                              <div className="services__modal-content">
                                   <i
                                        className="uil uil-times services__modal-close"
                                        onClick={() => toggleTab(0)}
                                   ></i>
                                   <h3 className="services__modal-title">
                                        Visual Designer
                                   </h3>
                                   <p className="services__modal-description">
                                        Service with more 5 months of
                                        experience. Providing quality work to
                                        clients and companies.
                                   </p>
                                   <ul className="services__modal-services grid">
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  develop the user interface
                                             </p>
                                        </li>
                                        {/* part 2 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  web page development.
                                             </p>
                                        </li>
                                        {/* part 3 */}
                                        <li className="services__modal-service">
                                             <i className="uil uil-check-circle services__modal-icon"></i>
                                             <p className="services__modal-info">
                                                  I create ux element
                                                  interactions.
                                             </p>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Services;
