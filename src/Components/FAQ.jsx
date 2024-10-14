import React from "react";
import { Accordion } from "rsuite";

function FAQ() {
  return (
    <>
      <div
        id="explore-programs"
        className="section-gs m-bottom"
        style={{ marginBottom: 0 }}
      >
        <div className="page-padding2 explore-course-heading bottom-faq">
          <div className="div-block-776">
            <h2 className="style-h3 text-align-center FAQ">
              Frequently Asked Question
            </h2>
            <div className="text-block-275 text-align-center faq-text">
              DebugShala is backed and supported by 80+ Angel Investors
            </div>
          </div>
        </div>
        <div className="investors-component faq-sec">
          <div className="faq-container">
            <div className="left-column">
              <Accordion bordered>
                <Accordion.Panel header="What is the placement assistance like at Debugshala's courses in Indore, and how does Yukti by Debugshala contribute to job placement success?" eventKey={1}>
                Debugshala's approach includes a 100% placement assistance for our courses in Indore. Yukti by Debugshala combines AI-assisted training modules with real-time job market insights, ensuring that students are well-prepared for securing jobs in their chosen field.
                </Accordion.Panel>
                <Accordion.Panel header="How does Yukti by Debugshala's AI-assisted training benefit students in their training course?" eventKey={2}>
                In the training course, Debugshala integrates Yukti by Debugshala's AI-assisted modules to enhance the learning experience. This dynamic approach helps students gain a deeper understanding of data analytics, and Yukti by Debugshala's AI tools adapt to the individual's learning pace, optimizing their data science journey.
                </Accordion.Panel>
                <Accordion.Panel header="Can you elaborate on the role of the interactive developer community at Debugshala?" eventKey={3}>
                Our interactive developer community at Debugshala fosters collaboration, innovation, and networking. It's a space where students and professionals connect, share ideas, and support each other.
                </Accordion.Panel>
                <Accordion.Panel header="Is there a company affiliated with Debugshala that specializes in staffing and recruitment services?" eventKey={4}>
                Yes, Debugshala partners with "The Data Career," who specializes in staffing and recruitment services. They focus on connecting skilled individuals who have completed Debugshala's courses with promising job opportunities in the industry. This collaboration ensures that our students have access to a wide network of job placements and opportunities tailored to their skills and aspirations.
                </Accordion.Panel>
              </Accordion>
            </div>
            <div className="right-column">
            <Accordion bordered>
                <Accordion.Panel header="What makes Debugshala's Data Science course in Indore unique, and how does Yukti by Debugshala enhance the learning experience?" eventKey={1}>
                Debugshala's Data Science course in Indore is distinguished by its practical training, personalized mentorship, and the support of the interactive developer community. Yukti by Debugshala amplifies the learning experience by providing AI-assisted tools that offer personalized insights, ensuring a more efficient learning journey in data analytics.
                </Accordion.Panel>
                <Accordion.Panel header="Can you provide more details about Debugshala's Java courses in Indore and the role of AI-enhanced learning modules by Yukti by Debugshala?" eventKey={2}>
                Debugshala offers a diverse range of Java courses in Indore. These courses encompass hands-on training, personalized mentorship, and active participation in our developer community. Yukti by Debugshala enhances these courses with AI-assisted learning modules, providing intelligent insights and adapting to students' learning pace for a more effective education.
                </Accordion.Panel>
                <Accordion.Panel header="What is the fee structure for Debugshala's Java Full Stack Development program in Indore?" eventKey={3}>
                The fees for our Java Full Stack Development program in Indore vary based on the program and duration you choose. For detailed information, please contact our admissions team. Additionally, Debugshala gives hands-on training at industry level standards ensuring placement success and domain knowledge.
                </Accordion.Panel>
                <Accordion.Panel header="How does Debugshala's MERN Stack Development course ensure student mastery in Web Development" eventKey={4}>
                Debugshala's MERN Stack Development course is designed to ensure student success through practical training, mentorship, and participation in our interactive developer community. Yukti by Debugshala's AI tools play a vital role in enhancing learning experiences by providing adaptive content, quizzes, and assignments, tailored to individual student progress.
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
