import React from "react";
import { workshop_seminar } from "./DataForCarousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WorkShop() {
  console.log(workshop_seminar);
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div id="explore-programs" className="section-gs m-bottom">
        <div className="padding-v-160 w-full">
          <div className="page-padding2">
            <div className="margin-bottom prog_section" />
            <div className="home-programs-flex">
              <div className="program_category">
                <span>Workshops &amp; Seminars</span>
                {/* <a href="#">Explore More</a> */}
              </div>
              <div className="program_wrapper program_wrapper4">
                <i id="left" className="fa-solid fa-angle-left" />
                <ul className="carousel carousel4">
                  <Slider {...settings}>
                  {workshop_seminar.map((program, ind) => (
                    <li key={ind} className="card card4">
                    <div className="img card_1">
                      <img
                        src={program.courseImg}
                        alt=""
                      />
                      <span className={`card_badge card_badge_${program.courseClass}`}>
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>{program.courseName}</h2>
                      <p>Duration : {program.courseDuration} hours</p>
                      <p>Mode : {program.mode}</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  ))}
                  </Slider>



                  {/* <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/Chatgpt for Developers.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_1">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>ChatGPT for Developers</h2>
                      <p>Duration : 3 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/Linkedin_Outreach.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_2">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>Linkedin Outreach</h2>
                      <p>Duration : 2 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/MS Office for Data Analytics.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_1">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>MS Office for DA</h2>
                      <p>Duration : 2 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/Chatgpt for Developers.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_1">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>ChatGPT for Developers</h2>
                      <p>Duration : 2 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/Linkedin_Outreach.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_2">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>Linkedin Outreach</h2>
                      <p>Duration : 2 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li>
                  <li className="card card4">
                    <div className="img card_1">
                      <img
                        src="/images/courses_banner/MS Office for Data Analytics.jpg"
                        alt=""
                      />
                      <span className="card_badge card_badge_1">
                        bestseller
                      </span>
                    </div>
                    <div className="card_2">
                      <h2>MS Office for DA</h2>
                      <p>Duration : 2 hours</p>
                      <p>Mode : Online</p>
                    </div>
                    <div className="card_3">
                      <button className="card_btn_1 card_btn">
                        Course Details
                      </button>
                      <button className="card_btn_2 card_btn">Syllabus</button>
                    </div>
                  </li> */}
                </ul>
                <i id="right" className="fa-solid fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkShop;
