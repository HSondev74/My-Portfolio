import "./Qualication.css";

const Portfolio = () => {
     return (
          <section className="qualification section">
               <h2 className="section__title">Qualification</h2>
               <span className="section__subtitle">My personel journey</span>

               <div className="qualification__container container">
                    <div className="qualification__tabs">
                         <div className="qualification__button qualification__active button--flex">
                              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                              Education
                         </div>
                         <div className="qualification__button button--flex">
                              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                              Experience
                         </div>
                    </div>

                    <div className="qualification__sections">
                         <div className="qualification__content">
                              <div className="qualification__data show-on-scroll slide-top-1">
                                   <div>
                                        <h3 className="qualification__title">
                                             Bach Khoa Da Nang University
                                        </h3>
                                        <span className="qualification__subtitle">
                                             Industry : Civil Construction
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             2019 - 2021
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                              </div>
                              {/* part two */}
                              <div className="qualification__data show-on-scroll slide-top-2">
                                   <div></div>
                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                                   <div>
                                        <h3 className="qualification__title">
                                             Work at nodemy technology company
                                        </h3>
                                        <span className="qualification__subtitle">
                                             Intern
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             March 2023 - September 2023
                                        </div>
                                   </div>
                              </div>
                              {/* ------------- */}
                              <div className="qualification__data show-on-scroll slide-top-3">
                                   <div>
                                        <h3 className="qualification__title">
                                             Hanoi Industrial Vocational College
                                        </h3>
                                        <span className="qualification__subtitle">
                                             Industry : Software Application
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             2021 - Present
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                              </div>
                              {/* part three */}
                              <div className="qualification__data show-on-scroll slide-top-4">
                                   {/* <div></div> */}
                                   <div>
                                        {/* <span className="qualification__rounder"></span> */}
                                        {/* <span className="qualification__line"></span> */}
                                   </div>
                                   <div>
                                        <h3 className="qualification__title">
                                             {/* UX Expert */}
                                        </h3>
                                        <span className="qualification__subtitle">
                                             {/* VietNam - Institute */}
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             {/* 2021 - Present */}
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* ==================== */}

                         <div className="qualification__content">
                              <div className="qualification__data show-on-scroll slide-top-5">
                                   <div>
                                        <h3 className="qualification__title">
                                             World Skills - Hanoi City
                                        </h3>
                                        <span className="qualification__subtitle">
                                             Web technologies
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             September 2023 - November 2023
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                              </div>
                              {/* part two */}
                              {/* <div className="qualification__data show-on-scroll slide-top-6">
                                   <div></div>
                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                                   <div>
                                        <h3 className="qualification__title">
                                             UX Designer
                                        </h3>
                                        <span className="qualification__subtitle">
                                             VietNam - Institute
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             2021 - Present
                                        </div>
                                   </div>
                              </div> */}
                              {/* ------------- */}
                              {/* <div className="qualification__data show-on-scroll slide-top-7">
                                   <div>
                                        <h3 className="qualification__title">
                                             Web Development
                                        </h3>
                                        <span className="qualification__subtitle">
                                             VietNam - Institute
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             2021 - Present
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                              </div> */}
                              {/* part three */}
                              {/* <div className="qualification__data show-on-scroll slide-top-8">
                                   <div></div>
                                   <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                   </div>
                                   <div>
                                        <h3 className="qualification__title">
                                             UX Expert
                                        </h3>
                                        <span className="qualification__subtitle">
                                             VietNam - Institute
                                        </span>
                                        <div className="qualification__calender">
                                             <i className="uil uil-calender-alt"></i>{" "}
                                             2021 - Present
                                        </div>
                                   </div>
                              </div> */}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Portfolio;
