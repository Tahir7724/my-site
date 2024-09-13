import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "BSc - Information Technology",
    academy: "Cambridge International College",
    dec: "Studied a comprehensive IT curriculum, focusing on key areas such as AI, ML, DtatMining, HCI,Ssoftware Development, Data Management, and Network Systems..",
    startYear: "2018",
    endYear: "2023",
  },
  {
    id: 2,
    title: "React JS - Meta",
    academy: "Coursera", 
    dec: "The Course provides foundational knowledge on using Meta's tools and platforms, focusing on essential skills for leveraging Meta technologies in various contexts. The course covers the basics of Meta's ecosystem, including setting up and managing Meta products, understanding core functionalities, and applying best practices for effective usage. Ideal for beginners, it equips learners with practical insights and skills to maximize the benefits of Meta's offerings in their projects and professional work.",
    startYear: "2023",
    endYear: false,
  },
 
];

const experienceData = [
  {
    id: 1,
    title: "Sr. UI UX Designer  (Dubai, UAE)",
    company: "Nano Health Technology Suite.",
    dec: "I lead the design process from concept to execution, collaborating with cross-functional teams to define requirements and goals. I conduct user research, develop wireframes and prototypes, and create interfaces using Figma and Adobe XD, focusing on usability and brand consistency. I mentor junior designers, improve design processes, and manage complex UI elements and design systems. ",
    startYear: "Aug 2023",
    endYear: "Aug 2024",
  },
  {
    id: 2,
    title: "UI UX Designer (Freelancer)",
    company: "Freelancer  (Part-time)",
    dec: "As a UI/UX designer, I create intuitive and engaging interfaces for mobile apps, websites, dashboards, and landing pages, focusing on user-centric design. I collaborate with clients, conduct user research, and develop wireframes and prototypes. I ensure usability, accessibility, and brand consistency while working closely with developers and managing multiple projects. I stay updated on industry trends to deliver innovative and high-quality design solutions.",
    startYear: " Aug 2018 ",
    endYear: "present",
  },
  {
    id: 3,
    title: "Sr. UI UX Designer (Saudi Arabia)",
    company: " CANV.sa  - Project Baesd",
    dec: "Led the re-design of the CANV auction website, emphasizing intuitive user experiences and efficient workflows. Collaborated with stakeholders to define objectives and requirements, conducted user research, and analyzed competitors. Used Figma to create the design system, components, variables, and UI design for the project.",
    startYear: "Jan 2024",
    endYear: "Apr 2024",
  },
  ,
  {
    id: 4,
    title: "UI UX Designer (Saudi Arabia)",
    company: "SITCO",
    dec: "Collaborated with stakeholders on the truck delivery service mobile app to align business objectives, user needs, and technical requirements. Conducted user research, created personas, flows, and wireframes, and designed intuitive interfaces ensuring brand consistency. Developed interactive prototypes and conducted usability testing to refine the user experience. Worked with developers for smooth implementation and stayed current on industry trends to enhance app features. Contributed insights to product strategy, focusing on seamless scheduling, real-time tracking, and efficient communication.",
    startYear: "Aug 2022",
    endYear: "Jul 2023",
  },
  ,
  {
    id: 5,
    title: "UX Designer (Sudan)",
    company: " Programming Nucleus for Information Technology",
    dec: "Led the design of mobile delivery apps, focusing on intuitive user experiences and efficient workflows. Collaborated with stakeholders to define objectives and requirements, conducted user research, and validated design decisions through usability testing. Created wireframes, user flows, and prototypes, designed interfaces for ease of use and accessibility, and ensured seamless implementation with developers. Continuously improved usability based on user feedback and analytics.",
    startYear: "Jan 2024",
    endYear: "Apr 2024",
  },
  ,
  {
    id: 6,
    title: "UI UX Designer | Graphics Designer",
    company: "Luxury Technology",
    dec: "Collaborated with product managers, marketing teams, and developers to create intuitive app interfaces and visual graphics. Designed wireframes, user flows, and prototypes, developed branding elements, and implemented responsive design for consistency across devices. Conducted usability testing to refine the interface and stayed updated on industry trends to incorporate innovative design techniques.",
    startYear: "Jan 2019",
    endYear: "May 2019",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
             
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bts pt-2 pb-5">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1nCODGEUGQg0sLLQjprQY-uqMaKaJA2wv/view?usp=drive_link"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  
                </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
