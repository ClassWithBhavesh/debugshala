import React from "react";
import "./MentorCard.css";
import MentorName from "./MentorName";

function Mentor({mentorName, mentorSub, mentorImage, mentorSubImage}) {
  return (
    <>
      <div className="mentor-card">
        <button className="mentor-feedback">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
          >
            <rect width={20} height={16} x={2} y={4} rx={2} />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </button>
        <div className="mentor-profile-pic">
          <img src={mentorImage} alt="" />
          <img src={mentorSubImage} className="mentor-sub-image" alt="" />
        </div>
        <div className="mentor-bottom">
          <div className="mentor-content">
            <span className="mentor-name">{mentorName}</span>
            <span className="about-me">
              Lorem ipsum dolor sit amet consectetur adipisicinFcls Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quis!{" "}
            </span>
          </div>
          <div className="mentor-bottom-bottom">
            <h1 className="mentor-rotating-text">
              <MentorName mentorName={mentorName} mentorSub={mentorSub} />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentor;
