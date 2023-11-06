import { useEffect } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollUp from "./components/scollUp/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
     useEffect(() => {
          let elToShow = document.querySelectorAll(".show-on-scroll");

          let isElInViewPort = (el) => {
               let rect = el.getBoundingClientRect();
               // some browsers support innerHeight, others support documentElement.clientHeight
               let viewHeight =
                    window.innerHeight || document.documentElement.clientHeight;

               return (
                    (rect.top <= 0 && rect.bottom >= 0) ||
                    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
                    (rect.top >= 0 && rect.bottom <= viewHeight)
               );
          };

          function loop() {
               elToShow.forEach((item) => {
                    if (isElInViewPort(item)) {
                         item.classList.add("start");
                    } else {
                         item.classList.remove("start");
                    }
               });
          }

          loop();
          window.onscroll = loop;

          return () => {
               window.removeEventListener("scroll", loop);
          };
     }, []);
     return (
          <section>
               <Header />
               <main className="main">
                    <Home />
                    <About />
                    <Skills />
                    <Services />
                    <Portfolio />
                    <Contact />
               </main>
               <Footer />
               <ScrollUp />
          </section>
     );
}

export default App;
