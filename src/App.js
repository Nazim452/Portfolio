import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import ResumePdf from './assets/images/Nazim.pdf'
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />


        <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8 z-50	">
    <div className="lg:w-72 px-6 lg:px-0">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
                <a  href={ResumePdf} className="flex items-center flex-1 w-0" download>
                   

                    <p className="ml-3 font-medium tracking-wide text-white	 truncate">
                        Download My Resume
                    </p>
                </a>
            </div>
        </div>
    </div>
</div>


      <div className="max-w-screen-xl mx-auto">
        <Banner />
        {/* <Features /> */}
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        {/* <Footer /> */}
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
