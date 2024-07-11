"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating robust, scalable, and user-friendly websites tailored to meet your specific needs. Whether you need a simple landing page or a complex web application, I use the latest technologies and best practices to ensure your site is fast, secure, and easy to manage. My goal is to bring your vision to life with clean code and a seamless user experience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user interfaces is my passion. I focus on understanding your users' needs and behaviors to design interfaces that are not only visually appealing but also easy to navigate. From wireframes to high-fidelity prototypes, I ensure every design decision enhances the user experience and aligns with your business goals.",
    href: "",
  },
  {
    num: "03",
    title: "Android App Development",
    description:
      "I create high-performance, user-friendly Android applications tailored to your specific needs. From initial concept to deployment, I handle every aspect of app development, ensuring your app is robust, scalable, and engaging. Utilizing the latest Android development tools and technologies, I deliver apps that stand out in the Google Play Store and provide a seamless user experience.",
    href: "",
  },
  {
    num: "04",
    title: "Machine Learning Model Development",
    description:
      "I offer custom machine learning model development to help businesses automate processes, gain insights, and make data-driven decisions. Whether you need predictive analytics, classification, or clustering, I can build and deploy models tailored to your specific requirements using the latest algorithms and techniques",
    href: "",
  },
  {
    num: "05",
    title: "Natural Language Processing (NLP)",
    description:
      "I specialize in natural language processing to enable computers to understand, interpret, and generate human language. My services include developing chatbots, sentiment analysis tools, and language translation systems, leveraging state-of-the-art NLP techniques to enhance user interaction and data analysis.",
    href: "",
  },
  {
    num: "06",
    title: "Computer Vision",
    description:
      "Transform your visual data into actionable insights with my computer vision services. I develop solutions for image and video analysis, including object detection, facial recognition, and image classification, using advanced deep learning frameworks to improve accuracy and performance.",
    href: "",
  },
  {
    num: "07",
    title: "Data Engineering and Preprocessing",
    description:
      "Effective machine learning starts with clean, well-structured data. I offer data engineering services, including data collection, preprocessing, and ETL (Extract, Transform, Load) pipeline development, to ensure your data is ready for analysis and model training.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
