import React from "react";
import {
  AI_ML_Data,
  Web_Dev_Data,
  UpSkill_Course_Data,
} from "./DataForCarousel.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"

function ExploreCourse() {
  console.log(AI_ML_Data, Web_Dev_Data, UpSkill_Course_Data);
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
      <div id="explore-programs" className="section-gs">
        <div className="padding-v-160 w-100 f_source_sec">
          <div className="page-padding2">
            <div className="margin-bottom prog_section explore-course-heading">
              <h2
                className="style-h2"
                style={{ textAlign: "center", marginBottom: 10 }}
              >
                Explore Our Courses
              </h2>
              {/* <img class="konsa_course" src="./assets/images/heroSectionImages/konsa_course.png" alt=""> */}
            </div>
            <div className="home-programs-flex">
              <div className="program_category">
                <span>AI &amp; Data Science</span>
                {/* <a href="#">Explore More</a> */}
              </div>
              <div className="program_wrapper program_wrapper1">
                {/* <i id="left" className="fa-solid fa-angle-left" /> */}
                <ul className="carousel carousel1">
                  <Slider {...settings}>
                    {AI_ML_Data.map((program, ind) => (
                      <li key={ind} className="card card1">
                        <div className="img card_1">
                          <img
                            src={program.courseImg}
                            alt="img"
                            draggable="false"
                          />
                          <span
                            className={`card_badge card_badge_${program.courseClass}`}
                          >
                            bestseller
                          </span>
                        </div>
                        <div className="card_2">
                          <h2>{program.courseName}</h2>
                          <p>Duration : {program.courseDuration} Months</p>
                          <p>Assistance : {program.courseAssistance}</p>
                        </div>
                        <div className="card_3">
                          <a
                            className="card_btn_1 card_btn"
                            target="_blank"
                            href="./GenAI.html"
                          >
                            Course Details
                          </a>
                          <button className="card_btn_2 card_btn">
                            Syllabus
                          </button>
                        </div>
                      </li>
                    ))}
                  </Slider>
                </ul>
                {/* <i id="right" className="fa-solid fa-angle-right" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="explore-programs" className="section-gs">
        <div className="padding-v-160">
          <div className="page-padding2">
            <div className="margin-bottom prog_section" />
            <div className="home-programs-flex">
              <div className="program_category">
                <span>Web Development</span>
                {/* <a href="#">Explore More</a> */}
              </div>
              <div className="program_wrapper program_wrapper2">
                <i id="left" className="fa-solid fa-angle-left" />
                <ul className="carousel carousel2">
                  <Slider {...settings}>
                    {Web_Dev_Data.map((program, ind) => (
                      <li key={ind} className="card card2">
                        <div className="img card_1">
                          <img
                            src={program.courseImg}
                            alt="img"
                            draggable="false"
                          />
                          <span
                            className={`card_badge card_badge_${program.courseClass}`}
                          >
                            bestseller
                          </span>
                        </div>
                        <div className="card_2">
                          <h2>{program.courseName}</h2>
                          <p>Duration : {program.courseDuration} Months</p>
                          <p>Assistance : {program.courseAssistance}</p>
                        </div>
                        <div className="card_3">
                          <a
                            className="card_btn_1 card_btn"
                            target="_blank"
                            href="./Java.html"
                          >
                            Course Details
                          </a>
                          <button className="card_btn_2 card_btn">
                            Syllabus
                          </button>
                        </div>
                      </li>
                    ))}
                  </Slider>

                  {/* <li className="card card2">
                    <a target="_blank" href="./Java.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Java_Web_Development.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_JV_FSD">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>Java Full Stack Dev</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card2">
                    <a target="_blank" href="./MERN.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Mern_Stack_Development.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_MN_FSD">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>MERN Stack Dev</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card2">
                    <a target="_blank" href="./React.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/React_JS.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_RT_JS">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>React JS</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card2">
                    <a target="_blank" href="./Next.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Next_JS.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_NX_JS">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>Next JS</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li> */}
                </ul>
                <i id="right" className="fa-solid fa-angle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="explore-programs" className="section-gs m-bottom">
        <div className="padding-v-160 w-full">
          <div className="page-padding2">
            <div className="margin-bottom prog_section" />
            <div className="home-programs-flex">
              <div className="program_category">
                <span>Upskill Courses</span>
                {/* <a href="#">Explore More</a> */}
              </div>
              <div className="program_wrapper program_wrapper3">
                <i id="left" className="fa-solid fa-angle-left" />
                <ul className="carousel carousel3">
                  <Slider {...settings}>
                    {UpSkill_Course_Data.map((program, ind) => (
                      <li key={ind} className="card card3">
                        <div className="img card_1">
                          <img
                            src={program.courseImg}
                            alt="img"
                            draggable="false"
                          />
                          <span
                            className={`card_badge card_badge_${program.courseClass}`}
                          >
                            bestseller
                          </span>
                        </div>
                        <div className="card_2">
                          <h2>{program.courseName}</h2>
                          <p>Duration : {program.courseDuration} Months</p>
                          <p>Assistance : {program.courseAssistance}</p>
                        </div>
                        <div className="card_3">
                          <a
                            className="card_btn_1 card_btn"
                            target="_blank"
                            href="./UI-UX.html"
                          >
                            Course Details
                          </a>
                          <button className="card_btn_2 card_btn">
                            Syllabus
                          </button>
                        </div>
                      </li>
                    ))}
                  </Slider>

                  {/* <li className="card card3">
                    <a target="_blank" href="./UI-UX.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/UI_UX_Design.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_1">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>UI-UX Designer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card3">
                    <a target="_blank" href="./AI_Marketer.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/AI_Marketer.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_2">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>AI Marketer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card3">
                    <a target="_blank" href="./UI-UX.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/UI_UX_Design.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_1">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>UI-UX Designer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card3">
                    <a target="_blank" href="./AI_Marketer.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/AI_Marketer.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_2">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>AI Marketer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card3">
                    <a target="_blank" href="./UI-UX.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/UI_UX_Design.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_1">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>UI-UX Designer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
                  </li>
                  <li className="card card3">
                    <a target="_blank" href="./AI_Marketer.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/AI_Marketer.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_2">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>AI Marketer</h2>
                        <p>Duration : 6 Months</p>
                        <p>Assistance : Linkedin &amp; Resume Optimisation</p>
                      </div>
                      <div className="card_3">
                        <button className="card_btn_1 card_btn">
                          Course Details
                        </button>
                        <button className="card_btn_2 card_btn">
                          Syllabus
                        </button>
                      </div>
                    </a>
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

export default ExploreCourse;
