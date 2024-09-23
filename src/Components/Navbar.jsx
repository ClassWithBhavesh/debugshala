import React from "react";

function Navbar() {
  return (
    <>
      <div className="navBar">
        <label htmlFor="btn" className="icon">
          <span className="fa fa-bars" />
        </label>
        <ul className="ulList">
          <li className="Lists">
            <a href="#">Courses</a>
            <ul className="ulList nav-Bar-bg">
              <li className="Lists">
                <a href="#">AI &amp; Data Science</a>
                <ul className="ulList">
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./GenAI.html">
                      Generative AI
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./Data_Science.html">
                      Data Science
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./Data_Analytics.html">
                      Data Analytics
                    </a>
                  </li>
                </ul>
              </li>
              <li className="Lists">
                <a href="#">Web Development</a>
                <ul className="ulList">
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./MERN.html">
                      MERN Stack
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./Next.html">
                      Next Js
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./React.html">
                      React Js
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./Java.html">
                      Java Full Stack
                    </a>
                  </li>
                </ul>
              </li>
              <li className="Lists">
                <label htmlFor="btn-3" className="show">
                  Upskill Courses
                </label>
                <a href="#">Upskill Courses </a>
                <ul className="ulList">
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./UI-UX.html">
                      Ui-UX Developer
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./AI_Marketer.html">
                      AI Marketer
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./MS_Office.html">
                      MS Office for DA
                    </a>
                  </li>
                  <li className="Lists nav-Bar-bg">
                    <a target="_blank" href="./ChatGPT_for_developers.html">
                      ChatGPT for Dev
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="Lists">
            <a href="#">Hire From Us</a>
          </li>
          <li className="Lists">
            <a href="#">Our Placements</a>
          </li>
          <li className="Lists">
            <a href="#">Success Stories</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
