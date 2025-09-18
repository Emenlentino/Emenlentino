function Resume() {
  return (
    <section id="resume" className="bg-light py-5">
      <div className="container">
        {/* Resume Header */}
        <div className="text-center mb-5">
          <h2 className="text-primary fw-bold display-5">📄 Professional Resume</h2>
          <p className="lead text-muted mt-3">
            Explore my qualifications or download my resume. I’m passionate about using technology to empower communities and inspire the next generation of developers.
          </p>
          <a
            href="/assets/Emenlentino_Resume.pdf"
            className="btn btn-outline-primary btn-lg rounded-pill px-4 mt-3"
          >
            <i className="bi bi-download me-2"></i>Download Resume
          </a>
        </div>

        {/* Resume Details */}
        <div className="card border-0 shadow-lg rounded-4 mb-5">
          <div className="card-body p-4">
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item">
                <strong>Summary:</strong> Full-stack developer with 14+ years of experience in scalable web systems, AI integration, and community-driven tech solutions.
              </li>
              <li className="list-group-item">
                <strong>Skills:</strong> React, Node.js, MongoDB, Bootstrap, Git, REST APIs, Python, Flask, Firebase
              </li>
              <li className="list-group-item">
                <strong>Experience:</strong> Freelance and startup projects across fintech, education, e-commerce, and youth empowerment platforms.
              </li>
              <li className="list-group-item">
                <strong>Education:</strong> B.Sc. Computer Science, University of Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Let's Collaborate Section */}
        <div className="bg-white p-5 rounded-4 shadow-lg text-center">
          <h4 className="text-success fw-bold mb-3">🌟 Let's Collaborate!</h4>
          <p className="text-muted fs-5 mb-4">
            I believe in the power of unity and innovation. Let’s come together as a tech community to build stronger youths, create impactful solutions, and inspire change. If any of the project ideas resonate with you—or if you have a vision of your own—let’s connect and make it happen.
          </p>

          {/* Contact Card */}
          <div className="card border-0 shadow-sm mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold mb-3">📬 Get in Touch</h5>
              <ul className="list-unstyled fs-6">
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-danger me-2"></i>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:emenlentino@gmail.com" className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover">
                    emenlentino@gmail.com
                  </a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-globe2 text-success me-2"></i>
                  <strong>Portfolio:</strong>{' '}
                  <a href="https://emem.vercel.app" target="_blank" rel="noopener noreferrer" className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover">
                    emem.vercel.app
                  </a>
                </li>
                <li>
                  <i className="bi bi-linkedin text-primary me-2"></i>
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://www.linkedin.com/in/emenlentino/" target="_blank" rel="noopener noreferrer" className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover">
                    linkedin.com/in/emenlentino
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#project-ideas" className="btn btn-success btn-lg rounded-pill px-4 mt-2">
            <i className="bi bi-lightbulb-fill me-2"></i>Explore Project Ideas
          </a>
        </div>
      </div>
    </section>
  );
}
export default Resume;
