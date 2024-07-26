import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, ProjectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TALKSPHERE - A full stack Chat Application"
          des=" The app features a friend request system where users can send and accept
 requests. Chat are enabled only after mutual acceptance of friend requests.
 Can create groups and manage members by adding or removing them.
 Users can see which members are online & who is typing."

          src={projectOne}
          github={"https://github.com/Nazim452/TalkSphreFrontend"}
          live={"https://talk-sphre-nazim.vercel.app/"}
          t1={"MERN"}
          t2={"Material UI"}
          t3={"Socket.IO"}
        />
        <ProjectsCard
          title="SNAPCIRCLE - A Social Media Application With Chat Integration"
          des=" Users can post photos ,  like or unlike & comment on posts. 
 The feed displays updates from followed accounts, enhancing user
 engagement.  
 Users can chat with followed people.
 Suggested user features optimize user experience and connectivity"
          src={projectTwo}
          github={"https://github.com/Nazim452/SocialSphere"}
          live={"https://socialspherenazim.onrender.com/"}
          t1={"MERN"}
          t2={"Chakra UI"}
          t3={"Socket.IO"}
        />
        <ProjectsCard
          title="MEDAPPOINTMENTPRO - A Doctor Booking Appointment Portal"
          des=" This dynamic web application seamlessly connects patients with healthcare
 providers.
 Users can schedule and manage appointments efficiently."
          src={projectThree}
          github={"https://github.com/Nazim452/Dr-Appointment-Deplooy.git"}
          live={"https://medappointmentpronazim.onrender.com/"}
          t1={"MERN"}
          t2={"Ant Design"}
          t3={"Bootstrap"}
        />
        <ProjectsCard
          title="PrimeShopper - A Ecommerce Application"
          des=" A SEO-optimized and user-friendly web application where users can
 purchase modern designs of clothes and daily use items. Secure
 transactions will be ensured. Users can track orders in real-time. Separate
 dashboards will be provided for both users and administrators."
          src={projectFour}
          github={"https://github.com/Nazim452/Ecommerce-Final.git"}
          live={"https://primeshoppernazim.onrender.com/"}
          t1={"MERN"}          t2={"Ant Design"}
          t3={"Bootstrap"}
        />
        <ProjectsCard
          title="SoundScape - A music application "
          des="I have built a music application using HTML, CSS, and JavaScript, allowing users to play music and sing along with the songs."
          src={ProjectFour}
          github={"https://github.com/Nazim452/Mini-Project.git"}
          live={"https://nazim-spotify-music.netlify.app/"}
          t1={"HTML"}
          t2={"CSS"}
          t3={"JavaScript"}
        />
       
      </div>
    </section>
  );
}

export default Projects