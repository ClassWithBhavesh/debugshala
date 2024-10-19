import React from "react";
import Navbar from "./Navbar";
// import CTA2 from "./CTA2";
import Footer from "./Footer";
import Mentor from "./Mentor_Compo/Mentor";

function About() {
  return (
    <>
      <Navbar />
      <div className="style-Tcg31 About_Header" id="style-Tcg31">
        <div className="About_Debugshala">ABOUT DEBUGSHALA</div>
        <div className="About_Shayari">Coding Sikh Lo Chahe Kahin Se</div>
        <h1 className="About_Shayari1">
          <span className="text-[#B2A9FF]">Naukri</span> Milegi Tumhe Yahin Se
        </h1>
        <div className="About_Content text-[#C1C6CE]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est
          modi, maiores praesentium aliquid suscipit, ex rerum, earum deleniti
          vitae dolore? Asperiores molestiae, dignissimos quo provident
          accusantium iure accusamus nobis doloremque eos excepturi dicta hic
          modi esse voluptatum nulla. Consectetur voluptatibus reprehenderit
          possimus sapiente voluptate nemo est, repudiandae nihil Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non, ex. ut?
        </div>
      </div>
      <div
        className="Mission_Compo"
      >
        <div className="Mission_Heading">
          <h2 className="Mission_Content">Our Mission</h2>
        </div>
        <div className="Mission_Container">
          <div className="Mission_Box">
            <div className="Mission_Box11" />
            <div className="Mission_Box12" />
            <div className="Mission_Inner_Box">
              <div className="Mission_Content_Box">
                <div
                  className="Mission_Box_Icon"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/equity.4daa943e.webp)",
                  }}
                />
                <div className="Mission_Box_Content">
                  To aim for{" "}
                  <span className="Mission_Unique_Content">
                    Equity and inclusivity
                  </span>{" "}
                  in Education
                </div>
              </div>
            </div>
          </div>
          <div className="Mission_Box">
            <div className="Mission_Box21" />
            <div className="Mission_Box22" />
            <div className="Mission_Inner_Box">
              <div className="Mission_Content_Box">
                <div
                  className="Mission_Box_Icon"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/globe-academic.4611a1e2.webp)",
                  }}
                />
                <div className="Mission_Box_Content">
                  To reach{" "}
                  <span className="Mission_Unique_Content">learners</span> in
                  every corner of the country
                </div>
              </div>
            </div>
          </div>
          <div className="Mission_Box">
            <div className="Mission_Box31" />
            <div className="Mission_Box32" />
            <div className="Mission_Inner_Box">
              <div className="Mission_Content_Box">
                <div
                  className="Mission_Box_Icon"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/component-cards.bdebd27e.webp)",
                  }}
                />
                <div className="Mission_Box_Content">
                  To build a
                  <span className="Mission_Unique_Content">business</span>{" "}
                  sustainability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Vision_Section"
      >
        <div className="Vision_Container">
          <div className="Vision_Cont1">
            <h2 className="Vision_Heading">Our Vision</h2>
            <div className="Vision_Cont_One">
              <span>
                <div
                  className="Vision_Cont_Inner1"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/star.8d98ac01.webp)",
                  }}
                />
              </span>
              <span>To democratize education at scale in India.</span>
            </div>
            <div className="Vision_Cont_Two">
              <span>
                <div
                  className="Vision_Cont_Inner2"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/star.8d98ac01.webp)",
                  }}
                />
              </span>
              <span>
                To ensure every child has access to quality education at the
                most affordable costs.
              </span>
            </div>
            <div className="Vision_Cont_Three">
              <span>
                <div
                  className="Vision_Cont_Inner3"
                  style={{
                    backgroundImage:
                      "url(/_next/static/media/star.8d98ac01.webp)",
                  }}
                />
              </span>
              <span>
                To allow every child to realize his/her dream, live up to their
                true potential and be their lifelong learning partner.
              </span>
            </div>
          </div>
          <div className="Vision_Cont2">
            <div
              className="Vision_Image"
            />
          </div>
        </div>
      </div>
      <h2 className="Founder_Head">Our Director</h2>
      <div className="Founder_Sec">
        <div className="founder_card">
          <div className="wrapper">
            <img
              src="/images/Founder Section/Our_Founder.jpg"
              className="cover-image"
              alt="Director Image"
            />
          </div>
          <img
            src="/images/Founder Section/Our_Founder.png"
            className="character"
            alt="Director Image"
          />
        </div>
        <div className="About_Founder">
          <div className="about_founder_wrapper"></div>
          <p className="about_para">
            Our CEO is a versatile professional whose expertise spans across
            multiple domains. As a seasoned Data Scientist, he has not only
            honed his skills but has also significantly contributed to the
            advancement of artificial intelligence. Remarkably, his ascent to
            leadership positions has been nothing short of meteoric. <br /><br /> At the age
            of 23, he assumed the role of Chief Technology Officer at IDA
            company, where he demonstrated remarkable acumen and vision. And at
            the young age of 25, he assumed the mantle of leadership as the CEO
            of Debugshala, where his strategic insights and innovative
            approaches continue to drive the company's success.
          </p>
        </div>
      </div>
      <div className="mentor-compo">
        <h1 className="mentor-heading">Meet Our Mentors</h1>
        <div className="mentor-sec">
          <Mentor mentorName="Sapan_Singh" mentorSub="Flutter_Trainer" mentorImage="/images/About_Images/Mentor_Images/sapan.jpg" mentorSubImage="/images/About_Images/Mentor_Sub_Images/Flutter.jpg" />
          <Mentor mentorName="Albin_Xavier" mentorSub="Gen_AI_Trainer" mentorImage="/images/About_Images/Mentor_Images/albin.jpg" mentorSubImage="/images/About_Images/Mentor_Sub_Images/Python.jpg" />
          <Mentor mentorName="Banti_Singh" mentorSub="Java_Trainer" mentorImage="/images/About_Images/Mentor_Images/banti.jpg" mentorSubImage="/images/About_Images/Mentor_Sub_Images/Blockchain.jpg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
