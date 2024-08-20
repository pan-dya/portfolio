// https://www.youtube.com/watch?v=yp6tRkS-QBU
// 31.22
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Hi, I&lsquo;m Pandya Limawan</h2>
        <p>
          I&lsquo;m an undergraduate student in Computer Science and Information
          Technology working towards becoming a skilled software developer,
          eager to take on real-world challenges
        </p>
      </div>

      <div className="hero-img">
        <div className="profile-container">
          <img src="/portfolio/assets/images/profile.jpg" alt="profile" />
        </div>
        <div className="tech-icon-grid">
          <div className="tech-icon">
            <img src="/portfolio/assets/images/react.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/express.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/django.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/bootstrap.svg" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/tailwind.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/mongodb.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/postgresql.png" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/github.jpg" alt="tech" />
          </div>
          <div className="tech-icon">
            <img src="/portfolio/assets/images/vsc.png" alt="tech" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
