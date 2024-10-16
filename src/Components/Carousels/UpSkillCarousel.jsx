import React from 'react'
import { UpSkill_Course_Data } from '../DataForCarousel'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function UpSkillCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };
  return (
    <Slider {...settings}>
      {UpSkill_Course_Data.map((card, ind) => (
        <div key={ind} className="carousel-item">
          <div className="img card_1">
            <img src={card.courseImg} alt="img" draggable="false" />
            <span className={`card_badge card_badge_${card.courseClass}`}>
              bestseller
            </span>
          </div>
          <div className="card_2">
            <h2>{card.courseName}</h2>
            <p>Duration : {card.courseDuration} Months</p>
            <p>Assistance : {card.courseAssistance}</p>
          </div>
          <div className="card_3">
            <Link to={card.courseDetails} className="course_details_btn" target="_blank">
              <button className="card_btn_1 card_btn">Course Details</button>
            </Link>
            <Link to={card.courseDetails} className="course_details_btn" target="_blank">
              <button className="card_btn_2 card_btn">Syllabus</button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default UpSkillCarousel