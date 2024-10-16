import React from "react";
import { workshop_seminar } from "./DataForCarousel";
import { Link } from "react-router-dom";

function WorkShop() {
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
                  {workshop_seminar.map((card, ind) => {
                    return (
                      <li key={ind} className="card card1">
                        <div className="img card_1">
                          <img
                            src={card.courseImg}
                            alt="img"
                            draggable="false"
                          />
                          <span
                            className={`card_badge card_badge_${card.courseClass}`}
                          >
                            bestseller
                          </span>
                        </div>
                        <div className="card_2">
                          <h2>{card.courseName}</h2>
                          <p>Duration : {card.courseDuration} Months</p>
                          <p>Assistance : {card.courseAssistance}</p>
                        </div>
                        <div className="card_3">
                          <Link
                            to={card.courseDetails}
                            className="course_details_btn"
                            target="_blank"
                          >
                            <button className="card_btn_1 card_btn">
                              Course Details
                            </button>
                          </Link>
                          <Link
                            to={card.courseDetails}
                            className="course_details_btn"
                            target="_blank"
                          >
                            <button className="card_btn_2 card_btn">
                              Syllabus
                            </button>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
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
