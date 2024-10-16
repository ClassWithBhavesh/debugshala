import React from "react";
// import { Link } from "react-router-dom";
import {
  // AI_ML_Data,
  // Web_Dev_Data,
  UpSkill_Course_Data,
} from "./DataForCarousel";
// import Slider from "react-slick";
import AI_MLCarousel from "./Carousels/AI_MLCarousel";
import WebDevCarousel from "./Carousels/WebDevCarousel";
import UpSkillCarousel from "./Carousels/UpSkillCarousel";

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
            </div>
            <div className="home-programs-flex">
              <div className="program_category">
                <span>AI &amp; Data Science</span>
              </div>
              <div className="program_wrapper program_wrapper1">
                {/* <AI_MLCarousel /> */}
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
              </div>
              <div className="program_wrapper program_wrapper2">
                {/* <WebDevCarousel /> */}
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
              </div>
              <div className="program_wrapper program_wrapper3">
                {/* <UpSkillCarousel /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreCourse;
