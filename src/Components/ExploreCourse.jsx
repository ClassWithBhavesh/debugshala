import React, { useRef, useState } from "react";
import { useEffect } from "react";

function ExploreCourse() {

  return (
    <>
      <div id="explore-programs" className="section-gs course_sec_extended1">
        <div className="padding-v-160 w-100 f_source_sec">
          <div className="page-padding2">
            <div className="margin-bottom prog_section explore-course-heading">
              <h2
                className="style-h2"
                style={{ textAlign: "center", marginBottom: 10 }}
              >
                Explore Our Courses
              </h2>
              {/* <img class="konsa_course" src="/images/heroSectionImages/konsa_course.png" alt=""> */}
            </div>
            <div className="home-programs-flex">
              <div className="program_category">
                <span>AI &amp; Data Science</span>
                {/* <a href="#">Explore More</a> */}
              </div>
              <div className="program_wrapper program_wrapper1">
                <i
                  id="left"
                  className="fa-solid fa-angle-left"
                  onClick={() => handleArrowClick("left")}
                />
                <ul
                  className="carousel carousel1"
                >
                  <li className="card card1">
                    <a target="_blank" href="./GenAI.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Gen_AI.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_GEN_AI">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>Generative AI</h2>
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
                  <li className="card card1">
                    <a target="_blank" href="./Data_Science.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Data_Science.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_DS">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>Data Science</h2>
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
                  <li className="card card1">
                    <a target="_blank" href="./Data_Analytics.html">
                      <div className="img card_1">
                        <img
                          src="/images/courses_banner/Data_Analytics.jpg"
                          alt="img"
                          draggable="false"
                        />
                        <span className="card_badge card_badge_DA">
                          bestseller
                        </span>
                      </div>
                      <div className="card_2">
                        <h2>Data Analytics</h2>
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
                </ul>
                <i
                  id="right"
                  className="fa-solid fa-angle-right"
                  onClick={() => handleArrowClick("right")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="explore-programs" className="section-gs course_sec_extended2">
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
                  <li className="card card2">
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
                  </li>
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
