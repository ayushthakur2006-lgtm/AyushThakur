
import { useState } from "react";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills & Tech Stack" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "profiles", label: "Coding & Social Profiles" },
];


function OrbitalMenu({ sections, onNavigate }) {
  const navItems = sections.filter((section) => section.id !== "contact");

  return (
    <nav className="orbital-menu" aria-label="Main navigation">
      <div className="orbital-ring orbital-ring-outer" />
      <div className="orbital-ring orbital-ring-inner" />

      <a
        className="orbital-core"
        href="#home"
        onClick={onNavigate}
        aria-label="AT home"
      >
        <span>AT</span>
        <span className="core-dot" />
      </a>

      {navItems.map((section, index) => {
        const angle = -90 + index * (360 / navItems.length);

        return (
          <a
            key={section.id}
            className="orbital-link"
            href={`#${section.id}`}
            onClick={onNavigate}
            style={{
              "--angle": `${angle}deg`,
            }}
          >
            <span className="orbital-number">
              {String(index).padStart(2, "0")}
            </span>
            <span className="orbital-label">{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="portfolio">
    <header className="site-header">
      <a className="brand" href="#home">
        AT
      </a>

      <div className="header-socials" aria-label="Social and contact links">
        <a
          href="https://www.linkedin.com/in/ayush-thakur-08a05138a/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92m1.39 9.74V9.97H5.07v8.53h2.78z" />
          </svg>
        </a>

        <a
          href="https://github.com/ayushthakur2006-lgtm"
          target="_blank"
          rel="noopener noreferrer"
          className="header-social-link"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <a
          href="#contact"
          className="header-social-link"
          aria-label="Contact Section"
          title="Contact via Email"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>

    {menuOpen && (
      <div className="orbital-overlay">
        <button
          className="orbital-close"
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        >
          ×
        </button>

        <OrbitalMenu
          sections={sections}
          onNavigate={() => setMenuOpen(false)}
        />
      </div>
    )}


      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-content">
            <div className="hero-header">
              <p className="eyebrow">HELLO PEOPLE — WELCOME TO MY SPACE</p>

              <h1>Ayush Thakur</h1>

              <h2>
                Power level : <span className="accent">still rising</span>
              </h2>
            </div>

            <div className="hero-body">
              <p className="hero-description">
                I’m a developer and engineering student exploring the worlds of
                software development, artificial intelligence, and cloud
                infrastructure. From building backend systems with Java and
                Spring Boot to experimenting with machine learning, I enjoy
                understanding how things work under the hood and turning ideas
                into practical projects. Always learning, always building, and
                always pushing beyond my current limits.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Projects
                </a>
                <a className="button button-secondary" href="#about">
                  Get to Know Me
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-frame">
              <img
                src="/images/profile.jpg"
                alt="Ayush Thakur"
                className="profile-photo"
                width="310"
                height="310"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section id="about" className="content-section section-shell">
          <p className="eyebrow">01 / THE PERSON BEHIND THE CODE</p>
          <h2 className="section-title">More Than a <span>Developer</span></h2>

          <div className="about-layout">
            <div className="about-body">
              <p className="section-description">
                Hi, I'm Ayush Thakur, an Electrical Engineering student pursuing
                B.Tech at Delhi Technological University (DTU), Batch of 2029.
              </p>

              <p className="section-description">
                I'm naturally curious, competitive, and always eager to explore
                something new. Whether it's discovering a new interest, taking on
                a challenge, or learning something outside my comfort zone, I
                enjoy pushing myself and seeing what I'm capable of. I also love
                watching anime, which is one of my favorite ways to unwind.
              </p>

              <p className="section-description">
                I'm driven by the satisfaction of achieving something I've worked
                hard for. I have plenty of ambitions and often find myself wanting
                to explore a dozen different possibilities at once. I'm learning
                to channel that enthusiasm into meaningful goals and give each one
                the focus it deserves.
              </p>

              <p className="section-description">
                In the long run, I want to become someone whose journey inspires
                others — someone people respect, admire, and look up to. I'm
                still figuring things out, but I'm determined to keep learning,
                growing, and making the most of the opportunities ahead.
              </p>
            </div>

            <div className="resume-cta">
              <h3 className="resume-cta-heading">Want to know more?</h3>
              <p className="resume-cta-text">
                Get a closer look at my background, capabilities, and the journey behind my work.
              </p>
              <div className="resume-cta-actions">
                <a
                  className="button button-primary"
                  href="/Ayush_Thakur_Resume.pdf"
                  download="Ayush_Thakur_Resume.pdf"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1v9M5 7l3 3 3-3M2 12v2a1 1 0 001 1h10a1 1 0 001-1v-2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download My Resume
                </a>
                <a
                  className="resume-view-link"
                  href="/Ayush_Thakur_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section section-shell">
          <p className="eyebrow">02 / PROJECT PORTFOLIO</p>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-description">
            A look at the ideas I've explored, the challenges I've taken on, and
            the projects I've brought to life.
          </p>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-label">BACKEND DEVELOPMENT</span>
              <h3>FireWatch — AI-Powered Satellite Thermal Event Intelligence Platform</h3>
              <p>
                Developed a Java Spring Boot backend with REST APIs for
                satellite thermal event ingestion, hotspot management,
                analytics, and GeoJSON data delivery. Implemented MySQL
                persistence using Spring Data JPA and Hibernate, integrated
                environmental data services and an external Python-based ML API,
                and built risk-scoring logic to prioritize potential fire
                hazards.
              </p>
              <div className="tag-list">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Spring Data JPA</span>
                <span>Hibernate</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>
              <a
                className="text-link"
                href="https://github.com/ayushthakur2006-lgtm/Firewatch-Backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Repository ↗
              </a>
            </article>

            <article className="project-card">
              <span className="project-label">MACHINE LEARNING</span>
              <h3>DC Motor Parameter Estimation Using Machine Learning</h3>
              <p>
                Developed a machine learning pipeline to estimate six DC motor
                parameters from voltage, torque, and speed data. Implemented and
                compared multiple regression models, including Linear Regression,
                Ridge Regression, Random Forest, Gradient Boosting, and Support
                Vector Regression, evaluating their predictive performance to
                identify effective approaches for motor parameter estimation.
              </p>
              <div className="tag-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Scikit-learn</span>
              </div>
              <a
                className="text-link"
                href="/DC_Motor_Parameter_Estimation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Project ↗
              </a>
            </article>
          </div>
        </section>

        <section id="skills" className="content-section section-shell">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2 className="section-title">My Technological <span>Stack</span></h2>

          <div className="skills-stack">
            <article className="skill-category-card">
              <h3 className="skill-category-title">Programming Languages</h3>
              <div className="skill-chips">
                <div className="skill-chip skill-chip-proficiency">
                  <span className="skill-name">Java</span>
                  <span className="skill-badge">Proficient</span>
                </div>
                <div className="skill-chip skill-chip-proficiency">
                  <span className="skill-name">Python</span>
                  <span className="skill-badge">Proficient</span>
                </div>
                <div className="skill-chip skill-chip-proficiency">
                  <span className="skill-name">C/C++</span>
                  <span className="skill-badge">Intermediate</span>
                </div>
              </div>
            </article>

            <article className="skill-category-card">
              <h3 className="skill-category-title">Backend Development</h3>
              <div className="skill-chips">
                <span className="skill-chip">Spring Boot</span>
                <span className="skill-chip">Spring Security</span>
                <span className="skill-chip">REST APIs</span>
                <span className="skill-chip">JDBC</span>
                <span className="skill-chip">Hibernate</span>
                <span className="skill-chip">JPA</span>
                <span className="skill-chip">Servlets</span>
                <span className="skill-chip">JSP</span>
                <span className="skill-chip">Maven</span>
                <span className="skill-chip">Gradle</span>
                <span className="skill-chip">Spring AI</span>
              </div>
            </article>

            <article className="skill-category-card">
              <h3 className="skill-category-title">Libraries & Machine Learning</h3>
              <div className="skill-chips">
                <span className="skill-chip">NumPy</span>
                <span className="skill-chip">Pandas</span>
                <span className="skill-chip">Matplotlib</span>
                <span className="skill-chip">Scikit-learn</span>
              </div>
            </article>

            <article className="skill-category-card">
              <h3 className="skill-category-title">Databases</h3>
              <div className="skill-chips">
                <span className="skill-chip">MySQL</span>
                <span className="skill-chip">MongoDB</span>
                <span className="skill-chip">PostgreSQL</span>
              </div>
            </article>

            <article className="skill-category-card">
              <h3 className="skill-category-title">Development & Testing Tools</h3>
              <div className="skill-chips">
                <span className="skill-chip">Git</span>
                <span className="skill-chip">JUnit</span>
                <span className="skill-chip">Log4j</span>
              </div>
            </article>

            <article className="skill-category-card">
              <h3 className="skill-category-title">Cloud & Infrastructure</h3>
              <div className="skill-chips">
                <span className="skill-chip">Docker</span>
                <span className="skill-chip">Cloud Deployment</span>
                <span className="skill-chip">Microservices</span>
                <span className="skill-chip">AWS</span>
                <span className="skill-chip">Linux</span>
                <span className="skill-chip">Ansible</span>
                <span className="skill-chip">Jenkins</span>
                <span className="skill-chip">Terraform</span>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="content-section section-shell">
          <p className="eyebrow">04 / ACADEMIC BACKGROUND</p>
          <h2 className="section-title">My Academic <span>Journey</span></h2>

          <div className="edu-timeline">

            {/* PHASE 01 */}
            <div className="edu-phase">
              <div className="edu-marker-col">
                <div className="edu-marker" />
                <div className="edu-connector" />
              </div>
              <div className="edu-content">
                <p className="edu-phase-label">PHASE 01 <span className="edu-phase-sub">(Elementary + Middle School)</span></p>
                <h3 className="edu-institution">Ramakrishna Senior Secondary School</h3>
                <p className="edu-duration">April 2011 – March 2023</p>
                <div className="edu-scores-row">
                  <div className="edu-score-chip">
                    <span className="edu-score-value">96.4%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 02 */}
            <div className="edu-phase">
              <div className="edu-marker-col">
                <div className="edu-marker" />
                <div className="edu-connector" />
              </div>
              <div className="edu-content">
                <p className="edu-phase-label">PHASE 02 <span className="edu-phase-sub">(High School)</span></p>
                <h3 className="edu-institution">Ramakrishna Senior Secondary School</h3>
                <p className="edu-duration">April 2023 – March 2025</p>
                <div className="edu-scores-row">
                  <div className="edu-score-chip">
                    <span className="edu-score-label">Overall</span>
                    <span className="edu-score-value">94.8%</span>
                  </div>
                  <div className="edu-score-chip">
                    <span className="edu-score-label">PCM with CS</span>
                    <span className="edu-score-value">96.5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 03 */}
            <div className="edu-phase edu-phase-last">
              <div className="edu-marker-col">
                <div className="edu-marker edu-marker-active" />
              </div>
              <div className="edu-content">
                <p className="edu-phase-label">
                  PHASE 03{" "}
                  <span className="edu-status-badge">ONGOING</span>
                </p>
                <h3 className="edu-institution">Delhi Technological University (DTU)</h3>
                <p className="edu-duration">August 2025 – April 2029</p>
                <p className="edu-degree">Bachelor of Technology (B.Tech) — Electrical Engineering</p>

                <div className="edu-cgpa-box">
                  <span className="edu-cgpa-label">Average CGPA</span>
                  <span className="edu-cgpa-value">9.3 / 10</span>
                  <span className="edu-cgpa-note">(Till now, second semester)</span>
                </div>

                <p className="edu-sem-scores">
                  1st Semester: 8.7 &nbsp;&middot;&nbsp; 2nd Semester: 9.9
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="experience" className="content-section section-shell">
          <p className="eyebrow">05 / PROFESSIONAL JOURNEY</p>
          <h2 className="section-title">Experience in <span>progress.</span></h2>

          <p className="section-description">
            I’m eager to contribute to real-world software projects, collaborate with experienced engineers,
            and turn my technical knowledge into practical, impactful solutions.
          </p>

          <div className="experience-note">
            <span className="status-dot" />
            Actively seeking software development internships to apply my skills,
            contribute to real-world projects, and grow as an engineer.
          </div>
        </section>

        <section id="profiles" className="content-section section-shell">
          <p className="eyebrow">06 / FIND ME ONLINE</p>
          <h2 className="section-title">Code, connect, <span>repeat.</span></h2>

          <div className="profile-links">
            <a
              className="profile-link-card"
              href="https://www.linkedin.com/in/ayush-thakur-08a05138a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="profile-link-label">PROFESSIONAL</span>
              <h3>LinkedIn ↗</h3>
              <p>Professional profile, experience, and connections.</p>
            </a>

            <a
              className="profile-link-card"
              href="https://github.com/ayushthakur2006-lgtm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="profile-link-label">DEVELOPMENT</span>
              <h3>GitHub ↗</h3>
              <p>Projects, source code, and technical experiments.</p>
            </a>

            <a
              className="profile-link-card"
              href="https://leetcode.com/u/Cj4wW0G1Ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="profile-link-label">PRACTICE</span>
              <h3>LeetCode ↗</h3>
              <p>Data structures, algorithms, and problem-solving.</p>
            </a>
          </div>
        </section>

        <section id="contact" className="content-section contact-section section-shell">
          <h2 className="section-title">Have something <span>in mind?</span></h2>
          <p className="section-description">
            For opportunities, collaboration, or a conversation about
            technology, email is the best way to reach me.
          </p>

          <a
            className="button button-primary"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ayush1412thakur%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contact via Email</span>
            <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">AT</a>
        <p>Designed to learn. Built to grow.</p>
        <a href="#home">Restart the Journey ↗</a>
      </footer>
    </div>
  );
}

export default App;
