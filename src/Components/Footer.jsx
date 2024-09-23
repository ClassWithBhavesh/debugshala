import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {

  const fontStyle = {
    fontSize: "20px",
    display: "flex",
    placeItems: "center",
    placeContent: "center"
  }
  return (
    <>
      <footer className="vcustomer snipcss-gUUI8">
        <div className="container-fluid snipcss0-0-0-1">
          <div className="rows snipcss0-1-1-2">
            <div className="cols-xl-8 cols-lg-8 cols-md-8 cols-sm-12 cols-xs mb-2 snipcss0-2-2-3">
              <div className="foo_navs snipcss0-3-3-4">
                <h2 className="mb-3 pt-0 snipcss0-4-4-5">Contact Debugshala</h2>
                <ul className="chennai_footerlist snipcss0-4-4-6">
                  <li className="snipcss0-5-6-7">
                    <span className="snipcss0-6-9-10">Call :</span>
                    <a
                      href="tel:+918982385539"
                      title="Center Manager"
                      className="snipcss0-6-7-8"
                      target="_blank"
                    >
                      +918982385539
                    </a>
                    <a
                      href="tel:+919111333207"
                      title="HR"
                      className="snipcss0-6-7-8"
                      target="_blank"
                    >
                      +919111333207
                    </a>
                  </li>
                  <li className="snipcss0-5-6-9">
                    <span>Mail :</span>
                    <a
                      href="mailto:debugshala@gmail.com"
                      title="Write a mail to Debugshala"
                      className="snipcss0-6-9-10"
                      target="_blank"
                    >
                      debugshala@gmail.com
                    </a>
                    <a
                      href="mailto:info@debugshala.com"
                      title="Write a mail to Debugshala"
                      className="snipcss0-6-9-10"
                      target="_blank"
                    >
                      info@debugshala.com
                    </a>
                  </li>
                  <li className="snipcss0-5-6-11">
                    <span>Address :</span>
                    <a
                      href="https://maps.app.goo.gl/VKgv76ZvFft78Fsb9"
                      title="Visit Debugshala"
                      className="snipcss0-6-11-12"
                      target="_blank"
                    >
                      C.S Naidu Arcade, 204, Greater Kailash Road, Opposite
                      Grotto, Old Palasia, Indore, Madhya Pradesh 452001
                    </a>
                  </li>
                  <li className="snipcss0-5-6-13">
                    <a
                      href="https://g.page/r/CcsLemNK3jpGEBM/review"
                      title="Google Reviews - Debugshala"
                      className="snipcss0-6-13-14"
                      target="_blank"
                    >
                      Leave a Review for Debugshala
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="cols-xl-4 cols-lg-4 cols-md-4 cols-sm-12 cols-xs mb-2 snipcss0-2-2-27">
              <div className="foo_navs pb-3 snipcss0-3-27-28">
                <h2 className="mb-3 pt-0 snipcss0-4-28-29">
                  Shoot a DM at our Social Media Handles!
                </h2>
                <div className="footer_socialnav snipcss0-4-28-30">
                  <ul className="footer_social_list snipcss0-5-30-31">
                    <li className="snipcss0-6-31-32">
                      <a
                        href="https://www.facebook.com/debugshala"
                        title="Facebook"
                        rel="noreferrer"
                        target="_blank"
                        className="snipcss0-7-32-33"
                        style={fontStyle}
                      >
                        <FaFacebookF />
                        {/* <i
                    className="fa fa-facebook cus_fb snipcss0-8-33-34"
                    aria-hidden="true"
                  ></i> */}
                      </a>
                    </li>
                    <li className="snipcss0-6-31-35">
                      <a
                        href="https://twitter.com/debugshala"
                        title="Twitter"
                        rel="noreferrer"
                        target="_blank"
                        className="snipcss0-7-35-36"
                        style={fontStyle}
                      >
                        <FaTwitter />
                        {/* <i
                    className="fa fa-twitter cus_twi snipcss0-8-36-37"
                    aria-hidden="true"
                  ></i> */}
                      </a>
                    </li>
                    <li className="snipcss0-6-31-38">
                      <a
                        href="https://www.youtube.com/@debugshala"
                        title="Youtube"
                        rel="noreferrer"
                        target="_blank"
                        className="snipcss0-7-38-39"
                        style={fontStyle}
                      >
                        <FaYoutube />
                        {/* <i
                    className="fa fa-youtube-play cus_play snipcss0-8-39-40"
                    aria-hidden="true"
                  ></i> */}
                      </a>
                    </li>
                    <li className="snipcss0-6-31-41">
                      <a
                        href="https://www.linkedin.com/company/debugshala"
                        title="Linkedin"
                        rel="noreferrer"
                        target="_blank"
                        className="snipcss0-7-41-42"
                        style={fontStyle}
                      >
                        <FaLinkedinIn />
                        {/* <i
                    className="fa fa-linkedin cus_linkd snipcss0-8-42-43"
                    aria-hidden="true"
                  ></i> */}
                      </a>
                    </li>
                    <li className="snipcss0-6-31-44">
                      <a
                        href="https://www.instagram.com/debugshala/"
                        title="Instagram"
                        rel="noreferrer"
                        target="_blank"
                        className="snipcss0-7-44-45"
                        style={fontStyle}
                      >
                        <RiInstagramFill />
                        {/* <i
                    className="fa fa-instagram cus_insta snipcss0-8-45-46"
                    aria-hidden="true"
                  ></i> */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cols-xl-8 cols-lg-8 cols-md-8 cols-sm-12 cols-xs mb-2 snipcss0-2-2-3">
              <div className="foo_navs snipcss0-3-3-4">
                <h2 className="mb-3 pt-0 snipcss0-4-4-5">Students Zone</h2>
                <ul className="chennai_footerlist snipcss0-4-4-6">
                  <li className="snipcss0-5-6-7">
                    <a
                      href="https://ai.debugshala.com/"
                      title="Yukti, Your Own Personal Learning Assistant"
                      className="snipcss0-6-7-8"
                      target="_blank"
                    >
                      Yukti - AI Assistant
                    </a>
                  </li>
                  <li className="snipcss0-5-6-9">
                    <a
                      href="https://app.debugshala.com/"
                      title="Your Own Progress Tracking Dashboard"
                      className="snipcss0-6-9-10"
                      target="_blank"
                    >
                      Study Space - Ultimate AI Productivity Partner
                    </a>
                  </li>
                  <li className="snipcss0-5-6-11">
                    <a
                      href="https://debugshala.com/compiler/C_compiler.html"
                      title="Compilers for Backend Languages"
                      className="snipcss0-6-11-12"
                      target="_blank"
                    >
                      Playground - Programming Language Compilers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cols-xl-12 cols-lg-12 cols-md-12 cols-sm-12 cols-xs mb-2 snipcss0-2-2-47">
              <div className="foo_navs snipcss0-3-47-48">
                <h2 className="mb-3 pt-0 snipcss0-4-48-49">Company</h2>
                <ul className="chennai_footerlist snipcss0-4-48-50">
                  <li className="snipcss0-5-50-51">
                    <a
                      href="https://www.debugshala.com/about-us"
                      title="About Debugshala"
                      className="snipcss0-6-51-52"
                      target="_blank"
                    >
                      About Debugshala
                    </a>
                  </li>
                  <li className="snipcss0-5-50-53">
                    <a
                      href="https://wa.me/+919111333207"
                      title="Share your expertise with others"
                      className="snipcss0-6-53-54"
                      target="_blank"
                    >
                      Become An Instructor
                    </a>
                  </li>
                  <li className="snipcss0-5-50-55">
                    <a
                      href="https://www.thedatacareer.com/candidates/"
                      title="Hire From Us"
                      className="snipcss0-6-55-56"
                      target="_blank"
                    >
                      Hire From Us
                    </a>
                  </li>
                  <li className="snipcss0-5-50-69">
                    <a
                      href="https://www.debugshala.com/privacy-policy"
                      title="Privacy Policy"
                      className="snipcss0-6-69-70"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="snipcss0-5-50-75">
                    <a
                      href="https://debugshala.com/terms-conditions/"
                      title="Terms & Conditions"
                      className="snipcss0-6-75-76"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="snipcss0-5-50-77">
                    <a
                      href="https://www.debugshala.com/refund-policy"
                      title="Refund/Cancellation Policy"
                      className="snipcss0-6-77-78"
                      target="_blank"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <div className="cols-xl-12 cols-lg-12 cols-md-12 cols-sm-12 cols-xs mb-2 snipcss0-2-2-47">
                <div className="foo_navs snipcss0-3-47-48">
                  <h2 className="mb-3 pt-0 snipcss0-4-48-49">
                    Top Placement Courses in Indore
                  </h2>
                  <ul className="chennai_footerlist snipcss0-4-48-50">
                    <li className="snipcss0-5-50-51">
                      <a
                        href="https://debugshala.com/data-science-course-in-indore/"
                        title=" Data Science Placement Course in Indore"
                        className="snipcss0-6-51-52"
                        target="_blank"
                      >
                        Data Science Placement Course in Indore
                      </a>
                    </li>
                    <li className="snipcss0-5-50-51">
                      <a
                        href="https://debugshala.com/data-science-course-in-indore/"
                        title=" Generative AI Placement Course in Indore"
                        className="snipcss0-6-51-52"
                        target="_blank"
                      >
                        Generative AI Placement Course in Indore
                      </a>
                    </li>
                    <li className="snipcss0-5-50-51">
                      <a
                        href="https://debugshala.com/data-science-course-in-indore/"
                        title=" Next.js Development Course in Indore"
                        className="snipcss0-6-51-52"
                        target="_blank"
                      >
                        Next.js Development Course in Indore
                      </a>
                    </li>
                    <li className="snipcss0-5-50-51">
                      <a
                        href="https://debugshala.com/data-science-course-in-indore/"
                        title=" React.js Development Course in Indore"
                        className="snipcss0-6-51-52"
                        target="_blank"
                      >
                        React.js Development Course in Indore
                      </a>
                    </li>
                    <li className="snipcss0-5-50-53">
                      <a
                        href="https://debugshala.com/java-full-stack-course-in-indore/"
                        title="Java Web Development Placement Course in Indore"
                        className="snipcss0-6-53-54"
                        target="_blank"
                      >
                        Java Web Development Placement Course in Indore
                      </a>
                    </li>
                    <li className="snipcss0-5-50-55">
                      <a
                        href="https://www.debugshala.com/mern-stack-course-in-indore"
                        title=" MERN Stack Development Placement Course in Indore"
                        className="snipcss0-6-55-56"
                        target="_blank"
                      >
                        MERN Stack Development Placement Course in Indore
                      </a>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="foo_navs snipcss0-3-47-79">
                  <h2 className="mb-3 pt-0 snipcss0-4-79-80">
                    Crash Courses by Debugshala in Indore
                  </h2>
                  <ul
                    id="menu-top-online-courses-footer"
                    className="chennai_footerlist snipcss0-4-79-81"
                  >
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64666"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64666 nav-item snipcss0-5-81-82"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-82-83"
                        target="_blank"
                      >
                        Cybersecurity Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64655"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64655 nav-item snipcss0-5-81-84"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        target="_blank"
                        className=" snipcss0-6-84-85"
                      >
                        Cloud Computing Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64659"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64659 nav-item snipcss0-5-81-86"
                    >
                      <a
                        title="Crash Courses"
                        href="https://www.debugshala.com/crash-courses"
                        className=" snipcss0-6-86-87"
                        target="_blank"
                      >
                        DevOps Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64656"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64656 nav-item snipcss0-5-81-88"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-88-89"
                        target="_blank"
                      >
                        Project Management Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64661"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64661 nav-item snipcss0-5-81-90"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-90-91"
                        target="_blank"
                      >
                        Blockchain Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64662"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64662 nav-item snipcss0-5-81-92"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-92-93"
                        target="_blank"
                      >
                        UI/UX Designing Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64657"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64657 nav-item snipcss0-5-81-94"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-94-95"
                        target="_blank"
                      >
                        Generative AI Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64658"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64658 nav-item snipcss0-5-81-96"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-96-97"
                        target="_blank"
                      >
                        Chatbot Development Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64660"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64660 nav-item snipcss0-5-81-98"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-98-99"
                        target="_blank"
                      >
                        Linux Administrator Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64663"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64663 nav-item snipcss0-5-81-100"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        className=" snipcss0-6-100-101"
                        target="_blank"
                      >
                        WordPress Development Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64674"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64674 nav-item snipcss0-5-81-102"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        target="_blank"
                        className=" snipcss0-6-102-103"
                      >
                        LinkedIn Optimization Course in Indore
                      </a>
                    </li>
                    <li
                      itemScope="itemscope"
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-64674"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64674 nav-item snipcss0-5-81-102"
                    >
                      <a
                        title="Crash Courses"
                        href="#"
                        target="_blank"
                        className=" snipcss0-6-102-103"
                      >
                        AI Marketer Course in Indore
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cols-xl-4 cols-lg-4 cols-md-4 col-sm-12 cols-xs d-none snipcss0-2-2-104">
                <div className="foo_navs snipcss0-3-104-105">
                  <h2 className="mb-3 pt-0 snipcss0-4-105-106" />
                </div>
              </div>
            </div>
            <div className="row footer_row snipcss0-1-1-107">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs snipcss0-2-107-108">
                <div className="footer_details chennailinks snipcss0-3-108-109">
                  <p className="snipcss0-4-109-110">
                    We have convenient location in Indore at Old Palasia. If you
                    reside or seek training in any of these areas, reach out to
                    our career counselors to discover the our branch for you.
                  </p>
                  <p className="snipcss0-4-109-111">
                    Adya Nagar, Airport Road, Aishbagh, Anand Nagar, Annapurna
                    Nagar, Arjun Nagar, Bada Ganpati Nagar, Banganga, Bapu
                    Nagar, Bhawarkuan, Bhelpur, Bhopal Road, Brahmin Colony,
                    Chandan Nagar, Chandragupta Colony, Chhatripura, Civil
                    Lines, Dev Nagar, Dhan Mandi, Dhar Road, Ganesh Nagar, Gopal
                    Mandir, Gopalpura, Hanumanganj, Hira Nagar, Indore Cantt,
                    Janakpuri, Jawahar Nagar, Khajrana, Kothi, Lalbagh, Laxmi
                    Nagar, Malharganj, Manoramaganj, Mangalmurti Nagar, Mhow
                    Road, Nehru Nagar, New Palasia, Old Palasia, Pardesipura,
                    Parle Tilak Nagar, Pithampur, Rajendra Nagar, Rajgarh Road,
                    Rakhial, Ratlam Road, Sanchar Nagar, Saraswati Nagar, Sarafa
                    Bazar, Sayaji Nagar, Shivaji Nagar, Sneh Nagar, Subhash
                    Nagar, Tilak Nagar, Trilanga, Vijay Nagar, Yashwant Nagar.
                  </p>
                  <p className="snipcss0-4-109-112">
                    We guarantee that investing an extra 15 - 20 minutes in
                    travel will bring you to the premier training institute that
                    is truly worth both your money and career.
                  </p>
                  <p className="snipcss0-4-109-113">
                    © 2023 <a href="https://www.debugshala.com/">Debugshala</a>.
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_img">
            <img src="/images/brandkit/footer_dbs_1.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
