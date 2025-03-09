import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">WebDevHub</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/codepad">CodePad</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Master Web Development <br />with Interactive Learning</h1>
          <p>Learn. Code. Build. Your journey starts here.</p>
          <div className="buttons">
            <Link to="/codepad"><button className="btn-start">🚀 Start Coding</button></Link>
            <Link to="/learn"><button className="btn-watch">🎥 Watch Tutorials</button></Link>
            <Link to="/resources"><button className="btn-notes">📚 Download Notes</button></Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>💻 Code Playground</h3>
          <p>Experiment and build projects with a live code editor.</p>
        </div>
        <div className="feature">
          <h3>🎥 Video Tutorials</h3>
          <p>Learn from top-rated instructors with easy-to-follow lessons.</p>
        </div>
        <div className="feature">
          <h3>📄 Downloadable Notes</h3>
          <p>Get access to high-quality notes and reference materials.</p>
        </div>
        <div className="feature">
          <h3>👥 Community Support</h3>
          <p>Join discussions, ask questions, and network with developers.</p>
        </div>
        <div className="feature">
          <h3>🎉 Live Coding Events</h3>
          <p>Participate in coding challenges and hackathons.</p>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="trending-courses">
        <h2>🔥 Trending Courses</h2>
        <div className="course-cards">
          <div className="card">
            <h4>HTML Basics</h4>
            <p>Build the foundation of your web development journey.</p>
          </div>
          <div className="card">
            <h4>CSS Mastery</h4>
            <p>Create stunning, responsive designs like a pro.</p>
          </div>
          <div className="card">
            <h4>JavaScript Essentials</h4>
            <p>Bring your websites to life with interactive features.</p>
          </div>
          <div className="card">
            <h4>React.js for Beginners</h4>
            <p>Master the most popular frontend library.</p>
          </div>
          <div className="card">
            <h4>Backend with Node.js</h4>
            <p>Build powerful and scalable server-side applications.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>❓ Got Questions? We’ve Got Answers!</h2>
        <div className="faq-container">
          <details>
            <summary>🌐 What is WebDevHub?</summary>
            <p>WebDevHub is an interactive platform for learning web development with live coding, tutorials, and community support.</p>
          </details>
          <details>
            <summary>💸 Is WebDevHub free?</summary>
            <p>Yes! All our courses and resources are free and accessible to everyone. No hidden fees, just pure learning!</p>
          </details>
          <details>
            <summary>👥 How do I join the community?</summary>
            <p>Head to our <Link to="/community">Community</Link> page and start participating in discussions, sharing projects, and connecting with other developers.</p>
          </details>
          <details>
            <summary>📚 Can I download resources?</summary>
            <p>Absolutely! We offer a wide range of downloadable notes and materials to support your learning journey.</p>
          </details>
          <details>
            <summary>🏆 Are there any coding challenges?</summary>
            <p>Yes! Join our live events and participate in coding challenges, hackathons, and weekly contests.</p>
          </details>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>🚀 Ready to Start Your Web Development Journey?</h2>
        <Link to="/learn"><button className="btn-cta">Get Started Now</button></Link>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 WebDevHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
