import React from 'react'
import { motion } from 'framer-motion';
// import { PiNotebookFill } from "react-icons/pi";
import { bootstrap} from "../../assets/index";
import { material} from "../../assets/index";
import { chakra} from "../../assets/index";
import { git} from "../../assets/index";
import { github} from "../../assets/index";
import { css} from "../../assets/index";
import { js} from "../../assets/index";
import { react} from "../../assets/index";
import { node} from "../../assets/index";
import { dbms} from "../../assets/index";
import { cn} from "../../assets/index";
import { system} from "../../assets/index";
import { mongo} from "../../assets/index";
import { express} from "../../assets/index";
import { dsa} from "../../assets/index";
import { python} from "../../assets/index";
import { java} from "../../assets/index";
import { docker} from "../../assets/index";
import { tc} from "../../assets/index";
import { os} from "../../assets/index";
import { c} from "../../assets/index";
import { jira} from "../../assets/index";





import SkillTemplate from './SkillTemplate';
const Skills = () => {
  return (
    
   

    <>
    

    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
       
    <h1 classname="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Frontend , Backend , Programming Languages ,  DSA , Theory Subject </span></h1> 
        <div className="grid grid-cols-2 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-5">
     


            <SkillTemplate img={js} name={"JavaScipt"}/>
            <SkillTemplate img={material} name={"Material UI"}/>
            <SkillTemplate img={chakra} name={"Chara UI"}/>
            <SkillTemplate img={bootstrap} name={"Bootstrap"}/>
            <SkillTemplate img={tc} name={"TailWind CSS"}/>
            <SkillTemplate img={mongo} name={"MongoDB"}/>
            <SkillTemplate img={express} name={"Express Js"}/>
            <SkillTemplate img={node} name={"Node Js"}/>
            <SkillTemplate img={react} name={"React"}/>
            <SkillTemplate img={css} name={"CSS"}/>
            <SkillTemplate img={dsa} name={"DSA"}/>
            <SkillTemplate img={docker} name={"Docker"}/>
            <SkillTemplate img={git} name={"Git"}/>
            <SkillTemplate img={github} name={"Github"}/>
            <SkillTemplate img={jira} name={"Jira"}/>
            <SkillTemplate img={system} name={"System Desing"}/>
            <SkillTemplate img={os} name={"Oerating System"}/>
            <SkillTemplate img={dbms} name={"DBMS"}/>
            <SkillTemplate img={cn} name={"Computer Network"}/>
            
            <SkillTemplate img={java} name={"Java"}/>
            <SkillTemplate img={python} name={"Pyhon"}/>
            <SkillTemplate img={c} name={"C"}/>



      

        </div>
    </div>
</section>


   

    </>
  );
}

export default Skills