import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
    <Navbar />
      <div className="Contact_Sec">
        <div className="form_sec">
          <div className="form_box">
            <div id="w-node-1" className="form_left_sec">
              <div className="form_images">
                <img src="/images/Contact_Images/teacher1.jpg" alt="teacher1" />
                <img src="/images/Contact_Images/teacher2.jpg" alt="teacher2" />
                <img src="/images/Contact_Images/teacher3.jpg" alt="teacher3" />
                <img src="/images/Contact_Images/teacher4.jpg" alt="teacher4" />
                <img src="/images/Contact_Images/teacher5.jpg" alt="teacher5" />
                <img src="/images/Contact_Images/teacher6.jpg" alt="teacher6" />
              </div>
            </div>
            <div id="w-node-2" className="form_right_sec">
              <div className="form_inner_box" id="wpcf7-f65-o2" lang="en-US" dir="ltr">
                <h2 className="form_head">Get In Touch With Us</h2>
                <form
                  action="/talk-with-us/#wpcf7-f65-o2"
                  method="post"
                  className="contact_Us_form"
                  aria-label="Contact form"
                  noValidate="novalidate"
                  data-status="init"
                >
                  <div className="fullName_field">
                    <p className="fullName_para">
                      {/* <label htmlFor="fullname" className="box11">
                        Full Name
                      </label> */}
                      <span className="fullName_sec" data-name="fname">
                        <input
                          size={40}
                          className="fullName_inp"
                          id="fullname"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Full Name"
                          defaultValue=""
                          type="text"
                          name="fname"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="email_field">
                    <p className="email_para">
                      {/* <label htmlFor="email" className="box16">
                        Email address
                      </label> */}
                      <span className="email_sec" data-name="your-email">
                        <input
                          size={40}
                          className="email_inp"
                          id="email"
                          autoComplete="email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Your Email"
                          defaultValue=""
                          type="email"
                          name="your-email"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="phone_field">
                    <p className="phone_para">
                      {/* <label htmlFor="Phone-Number" className="box21">
                        Phone number
                      </label> */}
                      <span className="phone_sec" data-name="mobile">
                        <input
                          className="phone_inp"
                          id="Phone-Number"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Your Contact"
                          defaultValue=""
                          type="number"
                          name="mobile"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="course_field">
                    <p className="course_para">
                      {/* <label htmlFor="InterestedIn" className="box26">
                        Interested In{" "}
                      </label> */}
                      <span className="course_sec" data-name="IntresetIn">
                        <select
                          className="course_select_box"
                          aria-required="true"
                          aria-invalid="false"
                          name="IntresetIn"
                        >
                          <option value="Choose Any Course" className="course_1">
                            Choose Any Course
                          </option>
                          <option value="Data Science" className="course_1">
                            Data Science
                          </option>
                          <option
                            value="MERN Stack Development"
                            className="course_2"
                          >
                            MERN Stack Development
                          </option>
                          <option
                            value="Java Full Stack Development"
                            className="course_3"
                          >
                            Java Full Stack Development
                          </option>
                        </select>
                      </span>
                    </p>
                  </div>
                  <div className="domain_field">
                    <p className="domain_para">
                      {/* <label htmlFor="background" className="box34">
                        Background
                      </label> */}
                      <span
                        className="domain_sec"
                        data-name="class:contact-form-input"
                      >
                        <select
                          className="domain_select_box"
                          aria-required="true"
                          aria-invalid="false"
                          name="class:contact-form-input"
                        >
                          <option value="Your Domain" className="box37">
                            Your Domain
                          </option>
                          <option value="IT" className="box37">
                            IT
                          </option>
                          <option value="Non IT" className="box38">
                            Non IT
                          </option>
                        </select>
                      </span>
                    </p>
                  </div>
                  <p className="box39">
                    <input
                      className="submit_btn"
                      type="submit"
                      defaultValue="Send"
                      value={"Send"}
                    />
                  </p>
                </form>
              </div>
              <div
                className="success_sec"
                role="region"
                aria-label="Contact form success"
              >
                <div className="success_msg">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div
                className="error_sec"
                tabIndex={-1}
                role="region"
                aria-label="Contact form failure"
              >
                <div className="error_msg">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
