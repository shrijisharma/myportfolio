
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./MiniPortfolioSection.css";

const initialPortfolio = {
  name: "",
  role: "",
  about: "",
  skills: "",
  theme: "dark",
  image: "",
  project: "",
  projectLink: "",
  email: "",
};

const STORAGE_KEY = "miniPortfolioData";

function MiniPortfolioSection() {
  const [showBuilder, setShowBuilder] = useState(false);

  // Load previously saved portfolio
  const [portfolio, setPortfolio] = useState(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      return savedData
        ? { ...initialPortfolio, ...JSON.parse(savedData) }
        : initialPortfolio;
    } catch {
      return initialPortfolio;
    }
  });

  const [message, setMessage] = useState("");

  const previewRef = useRef(null);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPortfolio((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  // Handle profile image
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      e.target.value = "";
      return;
    }

    if (file.size > 1.5 * 1024 * 1024) {
      alert("Image size should be less than 1.5MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPortfolio((prev) => ({
        ...prev,
        image: reader.result,
      }));

      setMessage("");
    };

    reader.readAsDataURL(file);
  };

  // Save portfolio in LocalStorage
  const handleSave = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(portfolio)
      );

      setMessage("Your portfolio has been saved successfully!");
    } catch {
      setMessage(
        "Unable to save. Try using a smaller profile image."
      );
    }
  };

  // Reset portfolio
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to clear your portfolio?"
    );

    if (!confirmReset) return;

    localStorage.removeItem(STORAGE_KEY);
    setPortfolio({ ...initialPortfolio });
    setMessage("");

    const fileInput = document.getElementById("profileImage");

    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Download portfolio as PDF
  const handleDownload = async () => {
    if (!previewRef.current) return;

    const fileName = (portfolio.name || "My")
      .trim()
      .replace(/[^a-z0-9]/gi, "_");

    const options = {
      margin: 10,
      filename: `${fileName}_Portfolio.pdf`,

      image: {
        type: "jpeg",
        quality: 0.98,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    try {
      await html2pdf()
        .set(options)
        .from(previewRef.current)
        .save();

      setMessage("Your PDF has been downloaded!");
    } catch (error) {
      console.error("PDF download error:", error);
      setMessage("PDF download failed. Please try again.");
    }
  };

  return (
    <section className="special-section">

      {/* SECTION HEADING */}
      <div className="special-heading">
        <span className="special-label">✦ A LITTLE EXTRA</span>

        <h2>
          Something Special
          <span> for You</span>
        </h2>

        <p>
          You've explored my world.
          Now, there's a little surprise waiting for you.
        </p>
      </div>

      {/* SURPRISE CARD */}
      <div className="surprise-card">
        <div className="surprise-glow"></div>

        <div className="gift-icon">
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M15 42H85V88H15V42Z"
              stroke="#59DCEB"
              strokeWidth="3"
            />
            <path
              d="M10 30H90V43H10V30Z"
              stroke="#5B9CFF"
              strokeWidth="3"
            />
            <path
              d="M50 30V88"
              stroke="#59DCEB"
              strokeWidth="3"
            />
            <path
              d="M50 30C15 30 20 5 37 12C48 17 50 30 50 30Z"
              stroke="#5B9CFF"
              strokeWidth="3"
            />
            <path
              d="M50 30C85 30 80 5 63 12C52 17 50 30 50 30Z"
              stroke="#5B9CFF"
              strokeWidth="3"
            />
          </svg>
        </div>

        <p className="surprise-tag">JUST FOR YOU</p>

        <h3>A little surprise awaits...</h3>

        <p className="surprise-description">
          Something creative. Something personal.
          Something you can call your own.
        </p>

        <button
          className="unwrap-btn"
          onClick={() => setShowBuilder(true)}
        >
          Unwrap Your Surprise <span>↗</span>
        </button>
      </div>

      {/* BUILDER MODAL */}
      {showBuilder && (
        <div
          className="builder-overlay"
          onClick={() => setShowBuilder(false)}
        >
          <div
            className="builder-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="builder-close"
              onClick={() => setShowBuilder(false)}
              aria-label="Close builder"
            >
              ✕
            </button>

            <h2>Create Your Little Space</h2>

            <p className="builder-subtitle">
              Add your details and watch your portfolio come to life.
            </p>

            <div className="builder-layout">

              {/* FORM */}
              <div className="builder-form">

                <label>Your Name</label>
                <input
                  name="name"
                  value={portfolio.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

                <label>Professional Role</label>
                <input
                  name="role"
                  value={portfolio.role}
                  onChange={handleChange}
                  placeholder="e.g. Web Developer"
                />

                <label>About You</label>
                <textarea
                  name="about"
                  value={portfolio.about}
                  onChange={handleChange}
                  placeholder="Write something about yourself..."
                  rows="3"
                />

                <label>Your Skills</label>
                <input
                  name="skills"
                  value={portfolio.skills}
                  onChange={handleChange}
                  placeholder="React, JavaScript, Node.js"
                />

                <label>Project Name</label>
                <input
                  name="project"
                  value={portfolio.project}
                  onChange={handleChange}
                  placeholder="e.g. E-commerce Website"
                />

                <label>Project Link (Optional)</label>
                <input
                  type="url"
                  name="projectLink"
                  value={portfolio.projectLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={portfolio.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />

                <label>Profile Image</label>
                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                />

                <label>Choose Theme</label>
                <select
                  name="theme"
                  value={portfolio.theme}
                  onChange={handleChange}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="blue">Blue</option>
                </select>

                {/* ACTION BUTTONS */}
                <div className="builder-actions">
                  <button
                    className="save-btn"
                    onClick={handleSave}
                  >
                    <span>Save Portfolio</span>
                  </button>

                  <button
                    className="download-btn"
                    onClick={handleDownload}
                  >
                    <span>Download PDF</span>
                  </button>

                  <button
                    className="reset-btn"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>

                {message && (
                  <p className="builder-message" role="status">
                    {message}
                  </p>
                )}
              </div>

              {/* LIVE PREVIEW */}
              <div
                className={`portfolio-preview ${portfolio.theme}`}
                ref={previewRef}
              >
                {portfolio.image ? (
                  <img
                    className="portfolio-avatar"
                    src={portfolio.image}
                    alt="Profile"
                  />
                ) : (
                  <div className="portfolio-avatar default-avatar">
                    {portfolio.name
                      ? portfolio.name[0].toUpperCase()
                      : "Y"}
                  </div>
                )}

                <p className="preview-small-text">HELLO, I'M</p>

                <h3>{portfolio.name || "Your Name"}</h3>

                <p className="preview-role">
                  {portfolio.role || "Your Professional Role"}
                </p>

                <p className="preview-about">
                  {portfolio.about ||
                    "Your introduction will appear here."}
                </p>

                {/* SKILLS */}
                <div className="preview-skills">
                  {(portfolio.skills || "Your Skills")
                    .split(",")
                    .map((skill, index) => (
                      <span key={index}>
                        {skill.trim()}
                      </span>
                    ))}
                </div>

                {/* PROJECT */}
                <div className="preview-project">
                  <h4>Featured Project</h4>

                  <p>
                    {portfolio.project || "Your Project Name"}
                  </p>

                  {portfolio.projectLink && (
                    <a
                      href={portfolio.projectLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project ↗
                    </a>
                  )}
                </div>

                {/* CONTACT */}
                <div className="preview-contact">
                  <p>Contact</p>

                  <span>
                    {portfolio.email || "your@email.com"}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MiniPortfolioSection;

