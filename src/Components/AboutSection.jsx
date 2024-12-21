import React from "react";
import { AboutSEC } from "./Contentdata";
import "../assets/Css/fonts.css";
import { styles } from "../style";

const About = () => {
  return (
    <div className="flex flex-col bgFlexed shadow-none p-6 bg-white rounded-lg md:flex-row md:p-12">
      <div className="area z-0">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="container md:flex-row">
        <div className="w-full md:flex">
          <div className="head-about md:w-[80%] w-[100%] md:flex">
            <div className="w-full p-2 flexstyle">
              <h1
                className={`text-[16px] mb-4 font-semibold uppercase text-[#00004B] ${styles.logoFlex}`}
              >
                Welcome to My Portfolio
              </h1>
              <div className="textWrap w-[80%]">
                <p className="text-[2rem] font-semibold font-poppins aboutinationFlex md:text-3xl lg:leading-[4rem] lg:text-5xl xl:text-[3rem] xl:leading-[4.2rem] md:leading-[3rem] text-[#00004B] mb-9 md:mb-15 tracking-wide">
                  Senior Pharmacovigilance Associate <br />
                  Delivering Excellence in Healthcare & Compliance
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95vw] mt-0 p-3 md:flex main-box">
          <div className="mission md:mr-16 md:w-1/2 ml-0 m-[1rem]">
            <h1
              className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}
            >
              Summary
            </h1>
            <p className="xl:text-xl font-extralight lg:text-lg text-[1rem] para-text w-full">
              Experienced Senior Pharmacovigilance Associate with expertise in
              DSUR preparation, ICSR processing, and clinical trial case
              triage. Proficient in Argus Safety, MedDRA coding, and regulatory
              reporting.
            </p>
          </div>
          <div className="mission md:w-1/2 md:ml-5 ml-0 m-[1rem]">
            <h1
              className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}
            >
              Work Experience
            </h1>
            <p className="xl:text-xl font-extralight lg:text-lg text-[1rem] para-text w-full">
              <strong>Senior Pharmacovigilance Associate</strong> - AWINSA Life
              Sciences (June 2023 - Present) <br />
              <strong>Pharmacovigilance Associate</strong> - AWINSA Life
              Sciences (March 2021 - May 2023)
            </p>
          </div>
        </div>
        <div className="w-[95vw] mt-5 p-3 md:flex main-box">
          <div className="mission md:mr-16 md:w-1/2 ml-0 m-[1rem]">
            <h1
              className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}
            >
              Achievements
            </h1>
            <ul className="xl:text-xl font-extralight lg:text-lg text-[1rem] para-text w-full list-disc list-inside">
              <li>7th rank in M. Pharmacy, IKGPTU (2020)</li>
              <li>GPAT Qualified (2018)</li>
              <li>1st Prize in Scientific Discussion, ISF College (2018)</li>
              <li>
                Published research and review articles in Neuropharmacology and
                Inflammation journals
              </li>
            </ul>
          </div>
          <div className="mission md:w-1/2 md:ml-5 ml-0 m-[1rem]">
            <h1
              className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}
            >
              Technical Skills
            </h1>
            <ul className="xl:text-xl font-extralight lg:text-lg text-[1rem] para-text w-full list-disc list-inside">
              <li>Argus Safety Database</li>
              <li>DSUR and Aggregate Reports</li>
              <li>MedDRA Coding</li>
              <li>Regulatory Submissions</li>
              <li>Signal Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
