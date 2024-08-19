"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaUnity,
  FaPython,
  FaDocker,
  FaJava,
  FaRProject,
  FaGit,
} from "react-icons/fa";

import {
  SiAseprite,
  SiC,
  SiCsharp,
  SiGodotengine,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiScipy,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

import { AiOutlineConsoleSql } from "react-icons/ai";

// About data
const about = {
  title: "About me",
  descrption:
    "I am a passionate computer engineer who graduated with a Master's degree from the University of Guelph in 2023, specializing in artificial intelligence with a focus on machine learning and big data. My journey in AI is driven by a deep enthusiasm for various aspects of this transformative field.\nI have a strong interest in developing and optimizing machine learning algorithms, such as neural networks, decision trees, and support vector machines, with an emphasis on improving model accuracy, efficiency, and scalability. Working with large datasets is another area I enjoy, as I am skilled in cleaning and preprocessing data and employing statistical techniques to uncover insights that drive machine learning models. Language technologies fascinate me, particularly in the realm of natural language processing, where I focus on sentiment analysis, machine translation, and building chatbots and virtual assistants.My passion extends to computer vision, where I am dedicated to teaching machines to interpret and understand visual information, including image recognition, object detection, and video analysis. I am also excited about reinforcement learning, which involves creating systems that learn to make decisions through trial and error, often applied in robotics, gaming, and autonomous vehicles. Ensuring that AI systems are fair, transparent, and ethical is a commitment of mine, as I am deeply concerned about the societal impacts of machine learning.\nIn the healthcare sector, I am enthusiastic about applying machine learning to improve outcomes, such as developing predictive models for disease diagnosis and personalized medicine. I am also interested in automated machine learning (AutoML), which simplifies the machine learning process through automation, making it more accessible to non-experts. Tackling the challenges of deploying machine learning models in real-world environments is something I find rewarding, as I work to ensure they can handle large-scale data and provide reliable results. I am dedicated to staying at the cutting edge of research and innovation, contributing to advancements that push the boundaries of what machine learning can achieve.\nBeyond my academic pursuits, I have experience as the head teaching assistant for programming courses at my university. My responsibilities included marking, grading, hosting office hours and seminars, leading academic discussions, and developing automated grading tools. In my spare time, I enjoy developing website applications and Android apps, gaming, and spending quality time with my family.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "RJarrin",
    },
    // {
    //   fieldName: "Phone Number",
    //   fieldValue: "Google Voice Number",
    // },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, French",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  descrption: "",
  items: [
    {
      company: "PharmaChoice Canada",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    },
    {
      company: "Concordia University - Pediatric Public Health Psychology Lab",
      position: "Research Assistant",
      duration: "Summer 2022",
    },
    {
      company: "Fiverr",
      position: "Freelance Web and Android Developer",
      duration: "2020 - Present",
    },
    {
      company: "University of Guelph",
      position: "Teaching Assistant",
      duration: "2018 - 2021",
    },
    {
      company: "Electrolux Canada",
      position: "The Home Depot Vendor Support",
      duration: "2017 - 2022",
    },
    {
      company: "Zumba Pa'Ti",
      position: "IT Support Technician",
      duration: "2020 - Present",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  descrption: "",
  items: [
    {
      instituion: "The Odin Project",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      instituion: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      instituion: "Udemy",
      degree: "Full Stack Development Courses",
      duration: "2020 - 2021",
    },
    {
      instituion: "Coursera",
      degree: "IBM AI Developer",
      duration: "2023 - Present",
    },
    {
      instituion: "University of Guelph",
      degree: "Masters Degree in Computer Engineering",
      duration: "2022 - 2023",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  descrption: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <FaUnity />,
      name: "unity",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaRProject />,
      name: "r",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <SiAseprite />,
      name: "aesprite",
    },
    {
      icon: <SiC />,
      name: "c",
    },
    {
      icon: <SiCsharp />,
      name: "csharp",
    },
    {
      icon: <SiGodotengine />,
      name: "godot",
    },
    {
      icon: <SiNumpy />,
      name: "numpy",
    },
    {
      icon: <SiPandas />,
      name: "pandas",
    },
    {
      icon: <SiScikitlearn />,
      name: "scikitlearn",
    },
    {
      icon: <SiScipy />,
      name: "scipy",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.descrption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.descrption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituion}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.descrption}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.descrption}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
