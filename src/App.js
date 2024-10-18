import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";

import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />

      <Banner />
      <Education />
      {/* <Nav /> */}
      {/* <div className="bg-abouts"> */}
      <Skills />

      {/* </div> */}
    <div className="mt-0">
    <Services />
    </div>
      <Work />
     <div className="mt-20">
     <Contact />
     </div>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
