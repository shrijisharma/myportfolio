
import { useState } from "react";
import "./BentoGrid.css";

import ProjectDetails from "../components/ProjectDetails";
import AboutDetails from "../components/AboutDetails";

// PROJECT DATA
const projects = [
  {
    id: 1,
    title: "Zerodha Clone",
    category: "Stock Trading & Investment Platform",
    description:
      "A Zerodha-inspired stock trading and investment platform featuring user authentication and authorization, interactive graphs and charts, and a MongoDB-powered backend. Tested using Jest.",
    status: "Deployed on AWS",
    image: "zerodha.jpeg",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS Amplify",
      "AWS EC2",
      "Jest",
    ],
    github: "https://github.com/shrijisharma/zerodha",
    frontend: "https://main.d1q0br93zs3fw6.amplifyapp.com",
    dashboard:"https://main.d3ico3zruf0fwv.amplifyapp.com"
  },

  {
    id: 2,
    title: "Airbnb Clone",
    category: "Property Listing Platform",
    description:
      "A full-stack travel and property listing platform inspired by Airbnb, where users can explore travel stays, discover properties, and manage their own listings. It features secure authentication and authorization, session-based user management, MVC architecture, MongoDB Atlas integration, and centralized error handling.",
    status: "Deployed on render",
    image: "airbnb.jpeg",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Multer",
      "Cloudinary",
    ],
    github: "https://github.com/shrijisharma/Airbnb-project",
    live: "https://airbnb-project-v2.onrender.com",
  },

  {
    id: 3,
    title: "GitHub Clone",
    category: "Version Control & Repository Management Platform",
    description:
      "A GitHub-inspired version control and repository management platform that allows users to manage repositories through a web interface and command-line interface. It supports repository initialization, staging, committing, and AWS S3-powered push and pull operations. Built with authentication, Joi schema validation, REST APIs, and MongoDB. The frontend is deployed on AWS Amplify, the backend runs on AWS EC2, and AWS S3 is used for repository data storage.",
    status: "Deployed on AWS",
    image: "github.jpeg",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Joi",
      "AWS Amplify",
      "AWS EC2",
      "AWS S3",
    ],
    frontendLink: "https://github.com/shrijisharma/aws-frontend-github",
    backendLink:"https://github.com/shrijisharma/aws-backend-github",
    live: "https://main.d3fop2gi43c0t6.amplifyapp.com",
  },
];

// BENTO CARDS DATA
const sections = [
  {
    id: "about",
    number: "01",
    title: "About Me",
    subtitle: "Get to know me",
    description:
      "BCA student | Full-Stack MERN Developer | Problem Solver",
  },

  {
    id: "skills",
    number: "02",
    title: "Skills",
    subtitle: "My technical toolkit",
    description:
      "Java • JavaScript • React • Node.js • MongoDB • DSA",
  },

  {
    id: "projects",
    number: "03",
    title: "Projects",
    subtitle: "Things I've built",
    description:
      "Airbnb Clone • GitHub Clone • Zerodha Clone",
  },

  {
    id: "contact",
    number: "04",
    title: "Contact",
    subtitle: "Let's connect",
    description:
      "Have an idea or opportunity? Let's connect.",
  },
];

// SKILLS DATA
const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "EJS",
      "REST APIs",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },

  {
    title: "Authentication & Security",
    skills: [
      "Authentication",
      "Authorization",
      "JWT",
      "Sessions",
      "Cookies",
    ],
  },

  {
    title: "Middleware & Validation",
    skills: [
      "Express Middleware",
      "Error Handling",
      "Joi Validation",
    ],
  },

  {
    title: "Programming & Problem Solving",
    skills: [
      "Java",
      "JavaScript",
      "Data Structures & Algorithms",
    ],
  },
];

function BentoGrid() {

  // Selected card store karne ke liye
  const [selected, setSelected] = useState(null);

  // Selected project store karne ke liye
  const [selectedProject, setSelectedProject] = useState(null);


  // MODAL CONTENT FUNCTION
  const renderModalContent = () => {

    // ABOUT SECTION
    if (selected.id === "about") {
      return <AboutDetails />;
    }


    // PROJECTS SECTION
    if (selected.id === "projects") {

      // Agar project select hai
      if (selectedProject) {
        return (
          <ProjectDetails
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        );
      }

      // Agar project select nahi hai
      return (
        <div className="project-list">

          {projects.map((project) => (
            <button
              className="project-item"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="bento-arrow">↗</span>

            </button>
          ))}

        </div>
      );
    }


    // SKILLS SECTION
    if (selected.id === "skills") {
      return (
        <div className="skills-container">

          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-badges">

                {group.skills.map((skill) => (
                  <span className="skill-badge" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      );
    }


    // CONTACT SECTION
    if (selected.id === "contact") {
      return (
        <div className="contact-container">

          <p className="contact-intro">
            I'm always open to connecting with fellow developers,
            discussing ideas and exploring opportunities.
          </p>

          <a
            className="contact-link"
            href="mailto:shrijisharma462@gmail.com"
          >
            <span>Email</span>
            <span>↗</span>
          </a>

          <a
            className="contact-link"
            href="https://github.com/shrijisharma"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            className="contact-link"
  href="https://wa.me/919897672373"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Whatsapp</span>
            <span>↗</span>
</a>

        </div>
      );
    }

    return null;
  };


  // CLOSE MODAL FUNCTION
  const closeModal = () => {
    setSelected(null);
    setSelectedProject(null);
  };


  // MAIN UI
  return (

    <section className="bento-section" id="journey">

      <div className="bento-heading">
        <p>GET TO KNOW ME</p>
        <h2>
          Explore My <span>World.</span>
        </h2>
      </div>


      {/* BENTO CARDS */}
      <div className="bento-grid">

       {sections.map((item) => (
  <button
    className={`bento-card bento-${item.id}`}
    key={item.id}
    onClick={() => setSelected(item)}
  >
    {/* SVG BACKGROUND */}
    {item.id === "about" && (
      <img src="/about.svg" className="card-svg" alt="" />
    )}

    {item.id === "projects" && (
      <img src="/project.svg" className="card-svg" alt="" />
    )}

    {/* CARD NUMBER */}
    <span className="bento-number">
      {item.number}
    </span>

    {/* CARD CONTENT */}
    <div className="bento-card-content">
      <p className="bento-subtitle">{item.subtitle}</p>
      <h3>{item.title}</h3>
      <p className="bento-description">{item.description}</p>
    </div>

    <span className="bento-arrow">↗</span>
  </button>
))}

      </div>


      {/* MODAL */}
      {selected && (

        <div
          className="bento-modal"
          onClick={closeModal}
        >

          <div
            className="bento-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ← Back
            </button>

            <p className="bento-subtitle">
              SECTION {selected.number}
            </p>

            <h2>{selected.title}</h2>

            {renderModalContent()}

          </div>

        </div>

      )}

    </section>
  );
}

export default BentoGrid;

