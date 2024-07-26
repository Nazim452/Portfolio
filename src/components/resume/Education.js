import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E. - Computer Science & Engineering"
            subTitle="Sengunthar Engineering College (2022 - 2026)"
            result="9.74/10"
            des="I am currently pursuing B.E. in CSE from Sengunthar Engineering College, ranking 1st with a CGPA of 9.74, demonstrating excellence in my studies."
          />
          <ResumeCard
            title="Higher Secondary "
            subTitle="R D S College , MuzaffarPur (2020 - 2022)"
            result="86%"
            des="In higher secondary, I achieved 86% and ranked in the top of my district - Muzaffarpur, reflecting my strong academic performance and dedication."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Hira Kaml High School (2019 - 2020)"
            result="90.4%"
            des="In Matric examination, I achieved 90.4% and ranked in the top 6 of my district - Muzaffarpur, reflecting my strong academic performance and dedication."
          />
        </div>
      </div>
      {/* part Two */}

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
 I got hands-on experience with the Jira software project management tool. Acquire Knowledge of Git & github. 
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
    </motion.div>
  );
};

export default Education;
