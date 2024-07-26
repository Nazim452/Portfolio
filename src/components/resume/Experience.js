import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Dec 2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Scholar Pro Connect LLP ( April 2024 - June 2024 )"
            result="Remote Internship"
            des="Implemented features such as - Blog creation , User authentication , Quiz
 using Redux toolkit.
 I got hands-on experience with the Jira software project management tool. Acquired in-depth knowledge of Git and GitHub - Enhanced version control
 capabilities , Improved project management skills.
 Received a stipend for the work.
"
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Cognigyz Technologies - ( Dec 2023 - Jan 2024 )"
            result="Virtual Internship"
            des=" During a 1-month virtual internship, we created an image gallery application, a
 landing page, and worked on a responsive web application using HTML, CSS,
 and JavaScript. I also learned the Bootstrap framework."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Oasis InfoByte - ( Dec 2023 - Jan 2024 )"
            result="Virtual Internship"
            des="During a 1-month virtual internship, we created a Netflix clone, a weather
 application, and a portfolio website using HTML, CSS, and JavaScript.
 Contributing to virtual projects, enhancing skills in web development."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
