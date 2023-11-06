import "./About.css";
import aboutImg from "../../assets/about.jpg";
import CV from "../../assets/CV-Lê Hồng Sơn-FrontEnd.pdf";
import files from "../../assets/files.svg";
import Info from "./Info";

const About = () => {
     return (
          <section className="about section" id="about">
               <h2 className="section__title">About me</h2>
               <span className="section__subtitle">My introduction</span>

               <div className="about__container container grid">
                    <img src={aboutImg} alt="about" className="about__img" />

                    <div className="about__data">
                         <Info />
                         <p className="about__description">
                              Frontend Developer, I create websites with UI/UX
                              user interface, I hope we can cooperate and work
                              together.
                         </p>
                         <a
                              href={CV}
                              download=""
                              className="button button--flex"
                         >
                              Download CV
                              <img src={files} alt="" />
                         </a>
                    </div>
               </div>
          </section>
     );
};

export default About;
