import React from "react";
import { styles } from "../style";
import "../assets/Css/fonts.css";
import { ProjectFlex, wProject, social, gojob } from "../assets";

const Projects = () => {
  return (
    <div className="w-full p-6 rounded-lg md:flex-row md:p-12 bg-gray-100">
      {/* Header Section */}
      <div className="w-[90%] md:flex pt-2 md:pt-[5rem]">
        <div className="w-full md:w-1/2">
          <h1
            className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlex}`}
          >
            Innovative Creations
          </h1>
          <div className="textWrap w-[80%]">
            <h1 className="text-[2rem] font-semibold workFlexed md:text-3xl lg:text-5xl xl:text-[3rem] text-[#00004B] mb-9 md:mb-15 tracking-wide lg:leading-[4rem] xl:leading-[4.2rem] md:leading-[3rem]">
              Journey through my Creative Projects
            </h1>
          </div>
        </div>
        <div className="flex md:w-1/2 w-full items-center md:text-[20px] text-[14px] font-semibold text-[#52526C]">
          <p className="float-right ml-0 md:ml-7">
            Embarking on My Career Journey: Unlocking Outstanding Features
          </p>
        </div>
      </div>

      {/* Research & Academic Contributions Section */}
      <div className="mt-8">
  <h2 className="text-[1.5rem] font-bold text-[#00004B] mb-4">
    Research & Academic Contributions
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Research Article
      </h3>
      <p className="text-[#52526C] mt-2">
        "Pharmacological evaluation of Embelin in Benzo[α]pyrene induced
        experimental model of cognitive and memory impairment in mice."
        Communicated in <strong>Current Research in Neurobiology</strong>;
        2024; Impact factor: 6.267 (Published).
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">Review Article</h3>
      <p className="text-[#52526C] mt-2">
        "Emerging approaches for the treatment of Alzheimer disease: Targeting NF-κB pathway."
        Communicated in <strong>Inflammation</strong>; Journal of Springer;
        2020; Impact factor: 3.212 (under review).
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">Book Chapter</h3>
      <p className="text-[#52526C] mt-2">
        "Digestive system" in Textbook of "Human Anatomy and Physiology-II" of B Pharmacy II
        semester as per new PCI syllabus. (ISBN: 977-883-946-8435).
      </p>
    </div>
  </div>
</div>

   {/* Professional Experience Section */}
<div className="mt-12">
  <h2 className="text-[1.5rem] font-bold text-[#00004B] mb-4">
    Professional Experience
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Literature Monitoring
      </h3>
      <p className="text-[#52526C] mt-2">
        Including review and validity assessment of abstracts.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">Triage</h3>
      <p className="text-[#52526C] mt-2">
        Duplicate check, BookIn, and determining whether the case is an
        initial report or a follow-up, along with team training on triage.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">Data Entry</h3>
      <p className="text-[#52526C] mt-2">
        Quality Review of ICSRs including MedDRA coding and narrative
        writing in AWINSA’s pharmacovigilance safety database Argus Safety
        or client database for Clinical Trial cases.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Query Management
      </h3>
      <p className="text-[#52526C] mt-2">
        Follow-up Query generation, review, and management, interacting
        with client personnel to resolve issues.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Aggregate Reports
      </h3>
      <p className="text-[#52526C] mt-2">
        Preparation and review of Aggregate reports including
        Developmental Safety Update Report as per regulatory requirements.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">Team Training</h3>
      <p className="text-[#52526C] mt-2">
        Training the team on AWINSA’s/Client’s SOPs, conventions, and
        guidelines.
      </p>
    </div>
  </div>
</div>

{/* Internship Experience Section */}
<div className="mt-12">
  <h2 className="text-[1.5rem] font-bold text-[#00004B] mb-4">
    Internship Experience
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Diploma Training
      </h3>
      <p className="text-[#52526C] mt-2">
        Civil Hospital, Kaithal (03-Jun-2015 to 02-Sep-2015) <br />
        First Aid treatment, drug dispensing, patient counseling, injections, etc.
      </p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="font-bold text-lg text-[#00004B]">
        Pharmacist
      </h3>
      <p className="text-[#52526C] mt-2">
        Bedi Medicose, Kaithal (08-Jan-2014 to 25-Apr-2014) <br />
        Involved in drug dispensing, patient consultations, and assisting in the pharmacy operations.
      </p>
    </div>
  </div>
</div>

      </div>
   
  );
};

export default Projects;