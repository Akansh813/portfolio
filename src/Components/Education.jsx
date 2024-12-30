import React from "react";
import { styles } from "../style";
import "../assets/Css/fonts.css";
import { FaGraduationCap, FaBook, FaClipboardList } from "react-icons/fa";

const Education = () => {
  return (
    <div className="w-full p-6 rounded-lg md:flex-row md:p-12 bg-gray-100">
      {/* Header Section */}
      <div className="w-[90%] md:flex pt-2 md:pt-[5rem]">
        <div className="w-full md:w-1/2">
          <h1
            className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlex}`}
          >
            My Academic Journey
          </h1>
          <div className="textWrap w-[80%]">
            <h1 className="text-[2rem] font-semibold workFlexed md:text-3xl lg:text-5xl xl:text-[3rem] text-[#00004B] mb-9 md:mb-15 tracking-wide lg:leading-[4rem] xl:leading-[4.2rem] md:leading-[3rem]">
              Building a Strong Foundation Through Education
            </h1>
          </div>
        </div>
        <div className="flex md:w-1/2 w-full items-center md:text-[20px] text-[14px] font-semibold text-[#52526C]">
          <p className="float-right ml-0 md:ml-7">
            Exploring Opportunities with a Passion for Learning
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8">
        <h2 className="text-[1.5rem] font-bold text-[#00004B] mb-4">
          Professional Qualification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-[#00004B] mr-2" />
              <h3 className="font-bold text-lg text-[#00004B]">
                ISF College of Pharmacy (2018-2020)
              </h3>
            </div>
            <p className="text-[#52526C] mt-2">
              M.Pharmacy in Pharmacology (Neuropharmacology Division) with a
              CGPA of <strong>8.62</strong>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-[#00004B] mr-2" />
              <h3 className="font-bold text-lg text-[#00004B]">
                Kurukshetra University, Kurukshetra (2015-2018)
              </h3>
            </div>
            <p className="text-[#52526C] mt-2">
              B.Pharmacy from the Institute of Pharmaceutical Sciences with
              <strong> First Division</strong>.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <FaGraduationCap className="text-[#00004B] mr-2" />
              <h3 className="font-bold text-lg text-[#00004B]">
                R.K.S.D College of Pharmacy (2013-2015)
              </h3>
            </div>
            <p className="text-[#52526C] mt-2">
              D.Pharmacy with <strong>First Division</strong>.
            </p>
          </div>
        </div>
      </div>

      

      {/* Thesis Section */}
      <div className="mt-12">
        <h2 className="text-[1.5rem] font-bold text-[#00004B] mb-4">
          M.Pharmacy Thesis
        </h2>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <FaBook className="text-[#00004B] mr-2" />
            <h3 className="font-bold text-lg text-[#00004B]">
              Thesis Title
            </h3>
          </div>
          <p className="text-[#52526C] mt-2">
            "Pharmacological evaluation of Embelin in Benzo[a]pyrene induced
            experimental model of cognitive and memory impairment in mice."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
