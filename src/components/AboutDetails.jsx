
import "./AboutDetails.css";

function AboutDetails() {
  return (
    <div className="about-details">

      {/* Introduction */}
      <div className="about-intro">
        <p className="about-label">WHO I AM</p>
        <h2>Hey, I'm Shri.</h2>
        <h3>Full-Stack MERN Developer</h3>

        <p>
          I'm a BCA student with a strong interest in full-stack
          web development. I enjoy building web applications,
          solving programming problems and continuously learning
          new technologies.
        </p>
      </div>

      {/* Education */}
      <div className="about-section">
        <p className="about-label">01 — EDUCATION</p>
        <h3>My Academic Background</h3>

        <div className="about-item">
          <div>
            <h4>Bachelor of Computer Applications (BCA)</h4>
            <p>Bon Maharaj Institution of Management and Technology</p>
            <p>DBRAU, Agra | 2024 – 2027</p>
          </div>
          <span className="about-highlight">CGPA: 7.5</span>
        </div>

        <div className="about-item">
          <div>
            <h4>Class 12th</h4>
            <p>Vidhyapeeth Inter College</p>
            <p>UP Board | 2024</p>
          </div>
          <span className="about-highlight">90.6%</span>
        </div>

        <div className="about-item">
          <div>
            <h4>Class 10th</h4>
            <p>Hajarimal Somani Nagar Nigam Inter College</p>
            <p>UP Board | 2022</p>
          </div>
        </div>
      </div>

      {/* Technical Learning */}
      <div className="about-section">
        <p className="about-label">02 — WHAT I LEARN</p>
        <h3>Technical Learning</h3>

        <ul className="about-list">
          <li>Full-Stack Web Development using MERN Stack</li>
          <li>Java Programming and Object-Oriented Programming</li>
          <li>Data Structures and Algorithms</li>
          <li>Database Management using MongoDB and SQL</li>
          <li>REST APIs, Authentication and Authorization</li>
          <li>AWS and Cloud Deployment through projects</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="about-section">
        <p className="about-label">03 — HANDS-ON EXPERIENCE</p>
        <h3>Things I've Built</h3>

        <div className="about-projects">
          <div className="about-mini-card">
            <h4>Airbnb Clone</h4>
            <p>Property listings and travel platform</p>
          </div>

          <div className="about-mini-card">
            <h4>GitHub Clone</h4>
            <p>Repository management and version control project</p>
          </div>

          <div className="about-mini-card">
            <h4>Zerodha Clone</h4>
            <p>Stock trading and investment platform</p>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="about-section">
        <p className="about-label">04 — INTERESTS</p>
        <h3>What I'm Interested In</h3>

        <ul className="about-list">
          <li>Full-Stack Application Development</li>
          <li>Building practical, real-world projects</li>
          <li>Artificial Intelligence and AI Integration</li>
          <li>Problem Solving and DSA</li>
          <li>Cloud Computing and AWS</li>
        </ul>
      </div>

      {/* Learning Journey */}
      <div className="about-section">
        <p className="about-label">05 — MY LEARNING JOURNEY</p>
        <h3>My Growth So Far</h3>

        <div className="about-timeline">
          <div className="timeline-item">
            <span>01</span>
            <div>
              <h4>Programming Fundamentals</h4>
              <p>Started learning programming and core concepts.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>02</span>
            <div>
              <h4>Java and DSA</h4>
              <p>Developed problem-solving skills through Java and DSA practice.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>03</span>
            <div>
              <h4>Full-Stack Development</h4>
              <p>Learned frontend and backend development with the MERN stack.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>04</span>
            <div>
              <h4>Building and Deploying Projects</h4>
              <p>Applied my learning through projects and explored AWS deployment.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutDetails;
