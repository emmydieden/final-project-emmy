import { useRef } from "react";
import "./heroSection.css";
import { Arrow } from "../arrow/Arrow";
import { IoIosArrowDown } from "react-icons/io"

export const HeroSection = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the next section
      });
    }
  };
  return (
    <>
      <section className="hero">
        <div className="hero-content-wrapper">
        <img className="hero-icon" src="/icons/hero-icon-3.svg" alt="" />
          <div className="hero-text">
            {" "}
            <h1>Elevate your Outdoor Cooking Adventure</h1>
            <p>
              Stuck with the same old camping recipes? Explore and create
              delicious camping stove recipes with just three ingredients!
            </p>
          </div>
         
        </div>
        <IoIosArrowDown className="react-arrow" onClick={scrollToNextSection}/>
        {/* <Arrow onClick={scrollToNextSection}/> */}
      </section>
      <div ref={nextSectionRef}></div>
    </>
  );
};
