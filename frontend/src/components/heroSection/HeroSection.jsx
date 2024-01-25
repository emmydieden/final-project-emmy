import { useRef } from "react";
import "./heroSection.css";
import { Arrow } from "../arrow/Arrow";

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
          <div className="hero-text">
            {" "}
            <h1>Elevate your Outdoor Cooking Adventure</h1>
            <p>
              Stuck with the same old camping recipes? Explore and create
              delicious camping stove recipes with just three ingredients!
            </p>
          </div>
          <img className="hero-icon" src="/public/icons/hero-icon-2.svg" alt="" />
        </div>

        <Arrow onClick={scrollToNextSection}/>
        <div className="box" onClick={scrollToNextSection}></div>
      </section>
      <div ref={nextSectionRef}></div>
    </>
  );
};
