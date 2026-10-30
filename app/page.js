"use client";

import { useMemo, useState } from "react";
import { projects, skills, profile } from "../lib/data";

const filters = ["All", "AI/ML", "GenAI", "Analytics", "Power BI"];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => filter === "All" ? projects : projects.filter(p => p.category === filter),
    [filter]
  );

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">SM<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">AI / ML ENGINEER • DATA ANALYTICS</p>
          <h1>Building intelligent products from <span>data to deployment.</span></h1>
          <p className="hero-text">
            I&apos;m Shreyash Musmade, an AIML engineer focused on machine learning,
            Generative AI, RAG systems, analytics and interactive dashboards.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore Projects ↓</a>
            <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <div className="stats">
            <div><strong>{projects.length}</strong><span>featured projects</span></div>
            <div><strong>AI + BI</strong><span>technical focus</span></div>
            <div><strong>SPPU</strong><span>BE AIML</span></div>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="orbit-card card-a">RAG</div>
          <div className="orbit-card card-b">ML</div>
          <div className="orbit-card card-c">BI</div>
          <div className="core">AI</div>
        </div>
      </section>

      <section id="about" className="section shell">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Engineer with a product mindset.</h2>
          <div>
            <p>
              I work across the full path from data preparation and model development
              to application interfaces and deployment. My portfolio combines AI/ML
              engineering with Power BI and Excel analytics.
            </p>
            <p>
              I enjoy turning messy data and complex workflows into practical,
              explainable and usable solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-label">02 / TOOLKIT</div>
        <h2>Technologies I work with.</h2>
        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.name}>
              <span className="skill-index">{group.index}</span>
              <h3>{group.name}</h3>
              <div className="tags">{group.items.map(x => <span key={x}>{x}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-head">
          <div>
            <div className="section-label">03 / WORK</div>
            <h2>Selected projects.</h2>
          </div>
          <p className="section-note">Hover, focus or press Enter on a card.</p>
        </div>

        <div className="filters" role="tablist" aria-label="Project filters">
          {filters.map(f => (
            <button
              key={f}
              className={filter === f ? "filter active" : "filter"}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >{f}</button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => <ProjectCard project={project} key={project.repo} />)}
        </div>
      </section>

      <section className="section shell process">
        <div className="section-label">04 / APPROACH</div>
        <div className="process-grid">
          <div><span>01</span><h3>Understand</h3><p>Define the problem, data and user workflow.</p></div>
          <div><span>02</span><h3>Build</h3><p>Develop models, retrieval systems or dashboards.</p></div>
          <div><span>03</span><h3>Deploy</h3><p>Turn the work into an accessible, usable product.</p></div>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h2>Have a problem worth solving?</h2>
        <p>Open to AI/ML, Generative AI and data-focused opportunities.</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>Email me ↗</a>
          <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Shreyash Musmade</span>
        <span>Built with Next.js • Ready for Vercel</span>
      </footer>
    </main>
  );
}

function ProjectCard({ project }) {
  const destination = project.liveUrl || project.dashboardUrl || project.github;
  const action = project.liveUrl ? "Live Project" : project.dashboardUrl ? "View Dashboard" : "View GitHub";

  return (
    <a
      className="project-card"
      href={destination}
      target="_blank"
      rel="noreferrer"
      aria-label={`${action}: ${project.title}`}
    >
      <div className="project-top">
        <span className="project-type">{project.category}</span>
        <span className="arrow">↗</span>
      </div>
      <div className="project-icon">{project.icon}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
      <div className="project-bottom"><span>{action}</span><span>↗</span></div>
    </a>
  );
}