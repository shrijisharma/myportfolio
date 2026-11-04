






import { useState } from "react";
import "./Hero.css";

function Hero() {
  const [launching, setLaunching] = useState(false);

  const goToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const launchRocket = () => {
    if (launching) return;

    setLaunching(true);

    setTimeout(() => {
      document.getElementById("journey")?.scrollIntoView({
        behavior: "smooth",
      });

      setLaunching(false);
    }, 1000);
  };

  return (
    <section className={`hero ${launching ? "is-launching" : ""}`}>

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <p className="hero-greeting">HELLO, WORLD</p>

        <h1>
          Hi, I'm <span>Shriji.</span>
        </h1>

        <h2>Full-Stack MERN Developer</h2>

        <p className="hero-description">
          I build web applications with a focus on clean design,
          practical solutions, and meaningful user experiences.
        </p>

        {/* BUTTONS */}
        <div className="hero-actions">
          <button className="journey-btn" onClick={goToJourney}>
            Let's See My Journey
            {/* <span>↗</span> */}
          </button>

          <button
            className="rocket-btn"
            aria-label="Launch to my journey"
            onClick={launchRocket}
            disabled={launching}
          >
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15c3-3 5-7 5-12-5 0-9 2-12 5l7 7Z" />
              <path d="m8 12-4 1-2 4 6-1" />
              <path d="m12 16-1 4 4 2 1-6" />
              <path d="M7 17c-2 0-3 1-3 3 2 0 3-1 3-3Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* RIGHT PROFILE IMAGE */}
      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="profile-frame">
          <img
            src="/shri.jpeg"
            alt="Shri"
            className="profile-image"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;
