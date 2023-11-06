import "./Contact.css";
import send from "../../assets/send.svg";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
     const form = useRef();
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [messageApi, contextHolder] = message.useMessage();
     const success = (type, content) => {
          messageApi.open({
               type: type,
               content: content,
          });
     };

     const sendEmail = (e) => {
          e.preventDefault();

          if (!isSubmitting) {
               setIsSubmitting(true);

               emailjs
                    .sendForm(
                         "service_2lzlru1",
                         "template_7rkvbye",
                         form.current,
                         "F6PF7nYsEALIvsp1G"
                    )
                    .then((result) => {
                         success(
                              "success",
                              "Thank you for leaving a message !"
                         );
                         form.current.reset();
                    })
                    .catch((err) => {
                         success("error", err.text);
                    })
                    .finally(() => {
                         setIsSubmitting(false);
                    });
          }
     };
     return (
          <section className="contact section" id="contact">
               <h2 className="section__title">Get in touch</h2>
               <span className="section__subtitle">Contact Me</span>

               <div className="contact__container container grid">
                    <div className="contact__content">
                         <h3 className="contact__title">Talk to me</h3>

                         <div className="contact__info">
                              <div className="contact__card">
                                   <i className="bx bx-mail-send contact__card-icon"></i>
                                   <h3 className="contact__card-title">
                                        Email
                                   </h3>
                                   <span className="contact__card-data">
                                        leson.devwork@gmail.com
                                   </span>
                                   <a href="" className="contact__button">
                                        Write me
                                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                   </a>
                              </div>

                              <div className="contact__card">
                                   <i class="bx bx-phone-incoming contact__card-icon"></i>
                                   <h3 className="contact__card-title">
                                        My number
                                   </h3>
                                   <span className="contact__card-data">
                                        {" "}
                                        0982214276
                                   </span>
                                   <a href="" className="contact__button">
                                        Write me
                                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="contact__content">
                         <h3 className="contact__title">
                              Write me your project
                         </h3>
                         {contextHolder}
                         <form
                              className="contact__form"
                              ref={form}
                              onSubmit={sendEmail}
                              method="post"
                         >
                              <div className="contact__form-div">
                                   <label
                                        className="contact__form-tag"
                                        htmlFor="name"
                                   >
                                        Name
                                   </label>
                                   <input
                                        className="contact__form-input"
                                        name="name"
                                        type="text"
                                        placeholder="Insert your name"
                                        required
                                   />
                              </div>
                              <div className="contact__form-div">
                                   <label
                                        className="contact__form-tag"
                                        htmlFor="email"
                                   >
                                        Email
                                   </label>
                                   <input
                                        className="contact__form-input"
                                        name="email"
                                        type="email"
                                        placeholder="Insert your email"
                                        required
                                   />
                              </div>
                              <div className="contact__form-div contact__form-area">
                                   <label
                                        className="contact__form-tag"
                                        htmlFor="project"
                                   >
                                        Project
                                   </label>
                                   <textarea
                                        name="project"
                                        cols="30"
                                        rows="10"
                                        className="contact__form-input"
                                        placeholder="Please leave a message"
                                        required
                                   />
                              </div>
                              <button
                                   href="#contact"
                                   className="button button--flex"
                                   disabled={isSubmitting}
                              >
                                   {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                   <img src={send} />
                              </button>
                         </form>
                    </div>
               </div>
          </section>
     );
};

export default Contact;
