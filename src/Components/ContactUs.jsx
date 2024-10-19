import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useSubmitForm from "./Custom_Hook/useSubmitForm";

function ContactUs() {

   // Form state
   const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    domain: ""
  });

  const BACKEND_URL = "http://localhost:2456";
  // Error state
  const [errors, setErrors] = useState({});
  const {submitForm, errorMsg, successMsg} = useSubmitForm(`${BACKEND_URL}/user`);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Real-time validation for the specific field
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    switch (fieldName) {
      case "fullName":
        if (value.length < 3) {
          newErrors.fullName = "Full name must be at least 3 characters long.";
        } else {
          delete newErrors.fullName;
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email address.";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (value.length !== 10) {
          newErrors.phone = "Phone number must be 10 digits long.";
        } else {
          delete newErrors.phone;
        }
        break;
      case "course":
        if (value === "Choose Any Course") {
          newErrors.course = "Please select a course.";
        } else {
          delete newErrors.course;
        }
        break;
      case "domain":
        if (value === "Your Domain") {
          newErrors.domain = "Please select a domain.";
        } else {
          delete newErrors.domain;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };


  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Full name validation
    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone number validation
    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits long.";
    }

    // Course selection validation
    if (!formData.course || formData.course === "Choose Any Course") {
      newErrors.course = "Please select a course.";
    }

    // Domain selection validation
    if (!formData.domain || formData.domain === "Your Domain") {
      newErrors.domain = "Please select a domain.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Log form data on successful validation
      submitForm(formData);
      console.log("Form submitted successfully:", formData);
      // Clear form fields after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        domain: ""
      });
    } 
    
  };

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
                  onSubmit={handleSubmit}
                >
                  <div className="fullName_field">
                    <p className="fullName_para">
                      <span className="fullName_sec" data-name="fname">
                        <input
                          size={40}
                          className={`fullName_inp ${errors.fullName ? "error" : ""}`}
                          id="fullName"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                          type="text"
                          name="fullName"
                        />
                      {errors.fullname && (
                      <p className="error_msg">{errors.fullName}</p>
                    )}
                      </span>
                    </p>
                  </div>
                  <div className="email_field">
                    <p className="email_para">
                      <span className="email_sec" data-name="your-email">
                        <input
                          size={40}
                          className={`email_inp ${errors.email ? "error" : ""}`}
                          id="email"
                          autoComplete="email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          name="email"
                        />
                      {errors.email && (
                      <p className="error_msg">{errors.email}</p>
                    )}
                      </span>
                    </p>
                  </div>
                  <div className="phone_field">
                    <p className="phone_para">
                      <span className="phone_sec" data-name="mobile">
                        <input
                          className={`phone_inp ${errors.phone ? "error" : ""}`}
                          id="Phone-Number"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Your Contact"
                          value={formData.phone}
                          onChange={handleChange}
                          type="number"
                          name="phone"
                        />
                      {errors.phone && (
                      <p className="error_msg">{errors.phone}</p>
                    )}
                      </span>
                    </p>
                  </div>
                  <div className="course_field">
                    <p className="course_para">
                      <span className="course_sec" data-name="IntresetIn">
                        <select
                          className={`course_select_box ${errors.course ? "error" : ""}`}
                          aria-required="true"
                          value={formData.course}
                          onChange={handleChange}
                          aria-invalid="false"
                          name="course"
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
                      {errors.course && (
                      <p className="error_msg">{errors.course}</p>
                    )}
                      </span>
                    </p>
                  </div>
                  <div className="domain_field">
                    <p className="domain_para">
                      <span
                        className="domain_sec"
                        data-name="class:contact-form-input"
                      >
                        <select
                          className={`domain_select_box ${errors.domain ? "error" : ""}`}
                          aria-required="true"
                          value={formData.domain}
                          onChange={handleChange}
                          aria-invalid="false"
                          name="domain"
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
                      {errors.domain && (
                      <p className="error_msg">{errors.domain}</p>
                    )}
                      </span>
                    </p>
                  </div>
                  <p className="box39">
                    <input
                      className="submit_btn"
                      type="submit"
                      value={"Send"}
                    />
                  </p>
                </form>
              </div>
              <div
                className={`form_success_sec ${successMsg ? "showMessage" : ""}`}
                role="region"
                aria-label="Contact form success"
              >
                <div className="form_success_msg">{successMsg}</div>
              </div>
              <div
                className={`form_error_sec ${errorMsg ? "showMessage" : ""}`}
                tabIndex={-1}
                role="region"
                aria-label="Contact form failure"
              >
                <div className="form_error_msg">{errorMsg}</div>
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
