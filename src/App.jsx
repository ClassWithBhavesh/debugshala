import React from "react";
import HeroCompo from "./Components/HeroCompo";
import CTA from "./Components/CTA";
import ExploreCourse from "./Components/ExploreCourse";
import CTA2 from "./Components/CTA2";
import DebugshalaKyu from "./Components/DebugshalaKyu";
import CourseDetails from "./Components/CourseDetails";
import CTA3 from "./Components/CTA3";
import CommunitySec from "./Components/CommunitySec";
import CTA4 from "./Components/CTA4";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import CTA5 from "./Components/CTA5";
// import Navbar from "./Components/Navbar";
import WorkShop from "./Components/WorkShop";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroCompo />
      <CTA />
      <ExploreCourse />
      <CTA2 />
      <DebugshalaKyu />
      <CourseDetails />
      <CTA3 />
      <CommunitySec />
      <CTA4 />
      <WorkShop />
      <FAQ />
      <CTA5 />
      <Footer />
    </>
  );
}

export default App;
