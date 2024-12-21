import React ,{useState, useEffect} from "react";
import { about } from "../assets";
import { styles } from "../style";
import { Header } from "./Contentdata";
import "../assets/Css/fonts.css";
import  satwik  from "../assets/images/satwik.jpg";
const MainHeader = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const AboutImageClass = isScrolled ? " relative z-0  " : "relative z-100";
  const HeaderWrittenClass = isScrolled ? " relative z-0  " : "relative z-100";
  const ButtnonWrittenClass = isScrolled ? " relative z-0  " : "relative z-1000";
  return (
    <div className="container relative block w-full mx-auto md:flex">
      <div className="z-0 BannerFlexed">
  <h1 className="text-[6rem] md:text-[12rem] xl:text-[18rem] font-extrabold absolute text-white pl-[1rem] md:pl-[8rem] xl:pl-[20rem] scrolling-text">
    Senior Pharmacovigilance Associate
  </h1>
</div>

      <div className="items-center row">
        <h1 className={`text-[24px] ${styles.logoFlex}`}>{Header.heading}</h1>
        <h1
          className={`${styles.HeaderX} capitalize col-lg-9 col-md-12 main ${HeaderWrittenClass}`}
        >
          {Header.HeaderTitle}
        </h1>
        <a href="/akanshh.pdf" download="Akansh_Goel_Resume.pdf">
  <button className={`${styles.ButtonLeft} ${ButtnonWrittenClass} cursor-pointer relative z-10 button-container-1 mb-[4rem] btn btn-1`}>
    Download Resume
    <i className="fa-solid fa-caret-right float-right text-[20px] pr-5"></i>
  </button>
</a>

      </div>
      
      <div className={`${AboutImageClass}`}>
        <img  src={satwik} width={1500} className="md:w-[100rem] ImageContained" alt="my" />
      </div>
    </div>
  );
};

export default MainHeader;
