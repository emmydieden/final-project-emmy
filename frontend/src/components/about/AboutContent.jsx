// This component is mounted in the page About.jsx
import "./aboutContent.css";

// Importing various icons from react-icons library
import { TbHealthRecognition } from "react-icons/tb";
import { MdOutlineComputer } from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Defining the AboutContent component
export const AboutContent = () => {
  return (
    <section className="about-section">
    <div className="about-container">
      <div className="vision-tech-info">
        {/* Vision Section */}
        <div className="about-vision">
          <img src="/icons-about/vision-icon.svg" alt="" />
          <div className="about-vision-container">
          <p>
            <strong>Vision</strong> • Our vision is to make it easier for people to connect with nature
            and enjoy delicious meals outdoors.
          </p>
          </div>
        </div>

        {/* Tech Section */}
        <div className="about-tech">
          <img src="/icons-about/tech-icon.svg" alt="" />
          <div className="about-tech-container">
          <p>
          <strong>Tech</strong> • React, CSS3, HTML5, Node.js, Express, MongoDB, Mongoose and integration with the OpenAI API for recipe generation.
          </p>
          </div>
        </div>

        {/* Project Information */}
        <div className="project-info">
          <img src="/icons-about/compass-icon.svg" alt="" />
          <div className="project-info-container">
            <p>
            <strong>Explore</strong> • Navigate through the{" "}
              <a href="https://github.com/IdahCollin/final-boiler-plate-monorepo/blob/main/README.md">
                GitHub README
              </a>{" "}
              trail for more information and code for OpenAir Feast.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Cards */}
      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <img
              src="https://idah-collin-portfolio.netlify.app/assets/profilbildidah.jpeg"
              alt="Photo of Idah Collin"
            />
            <h3>Idah Collin</h3>
            <div className="contact-idah">
              <a href="https://idah-collin-portfolio.netlify.app/">
                <FaBook />
              </a>
              <a href="https://www.linkedin.com/in/idah-collin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/IdahCollin">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-content">
            <img
              src="https://emmy-dieden-portfolio.netlify.app/assets/gifs/Profilbild-min.JPG"
              alt="Photo of Emmy Dieden"
            />
            <h3>Emmy Dieden</h3>
            <div className="contact-emmy">
              <a href="https://emmy-dieden-portfolio.netlify.app/">
                <FaBook />
              </a>{" "}
              <a href="https://www.linkedin.com/in/emmy-dieden-774574283/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/EmmyDieden">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
