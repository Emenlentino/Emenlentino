function About() {
  return (
    <section id="about" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img src="/assets/profile.jpg" alt="Emenlentino" className="img-fluid rounded-circle shadow" style={{ maxWidth: '200px' }} />
          </div>
          <div className="col-md-7">
            <h2 className="text-primary fw-bold mb-3">About Me</h2>
            <p className="fs-5 text-muted">
              I'm a full-stack developer based in Nigeria, passionate about building scalable web applications and intuitive user experiences. I specialize in React, Node.js, and modern UI design.
            </p>
            <div className="mt-3">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-secondary me-2">Node.js</span>
              <span className="badge bg-dark me-2">MongoDB</span>
              <span className="badge bg-info text-dark">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
