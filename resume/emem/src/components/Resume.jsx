function Resume() {
  return (
    <section id="resume" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">Professional Resume</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-muted text-center mb-4">
              Download my resume or explore my qualifications below.
            </p>
            <div className="text-center mb-4">
              <a href="/assets/Emenlentino_Resume.pdf" className="btn btn-outline-primary rounded-pill px-4">
                Download Resume
              </a>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Summary:</strong> Full-stack developer with 14+ years of experience in scalable web systems.</li>
              <li className="list-group-item"><strong>Skills:</strong> React, Node.js, MongoDB, Bootstrap, Git, REST APIs</li>
              <li className="list-group-item"><strong>Experience:</strong> Freelance and startup projects across fintech, education, and e-commerce.</li>
              <li className="list-group-item"><strong>Education:</strong> B.Sc. Computer Science, University of Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
