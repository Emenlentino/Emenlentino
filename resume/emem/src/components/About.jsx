function About() {
  return (
    <section id="about" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/assets/profile.jpg"
              alt="Emenlentino"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '200px' }}
            />
          </div>

          {/* About Text */}
          <div className="col-md-7">
            <h2 className="text-primary fw-bold mb-3">About Me</h2>
            <p className="fs-5 text-muted">
              I'm <strong>Emem</strong>, a passionate Python developer and tech enthusiast based in Nigeria. I specialize in building innovative, scalable solutions that solve real-world problems. With a strong foundation in both software engineering and machine learning, I thrive in fast-paced environments and love collaborating on impactful projects.
            </p>

            {/* Core Stack Badges */}
            <div className="mt-3 mb-4">
              <span className="badge bg-primary me-2">React</span>
              <span className="badge bg-secondary me-2">Node.js</span>
              <span className="badge bg-dark me-2">MongoDB</span>
              <span className="badge bg-info text-dark me-2">Bootstrap</span>
              <span className="badge bg-warning text-dark me-2">Python</span>
              <span className="badge bg-success me-2">Django</span>
            </div>

            {/* Technologies & Tools Section */}
            <h4 className="fw-bold text-dark mb-3">🛠️ Technologies & Tools I Use</h4>
            <div className="d-flex flex-wrap gap-2">
              {/* Programming Languages */}
              <span className="badge bg-light text-dark border">Python 🐍</span>
              <span className="badge bg-light text-dark border">JavaScript</span>

              {/* Machine Learning & AI */}
              <span className="badge bg-light text-dark border">Scikit-learn</span>
              <span className="badge bg-light text-dark border">TensorFlow</span>
              <span className="badge bg-light text-dark border">PyTorch</span>
              <span className="badge bg-light text-dark border">Hugging Face</span>

              {/* NLP */}
              <span className="badge bg-light text-dark border">spaCy</span>
              <span className="badge bg-light text-dark border">NLTK</span>
              <span className="badge bg-light text-dark border">OpenAI API</span>

              {/* Web Dev */}
              <span className="badge bg-light text-dark border">Flask</span>
              <span className="badge bg-light text-dark border">Django</span>
              <span className="badge bg-light text-dark border">React</span>
              <span className="badge bg-light text-dark border">Next.js</span>

              {/* Databases */}
              <span className="badge bg-light text-dark border">PostgreSQL</span>
              <span className="badge bg-light text-dark border">MongoDB</span>
              <span className="badge bg-light text-dark border">Firebase</span>

              {/* Visualization */}
              <span className="badge bg-light text-dark border">Matplotlib</span>
              <span className="badge bg-light text-dark border">Seaborn</span>
              <span className="badge bg-light text-dark border">Plotly</span>

              {/* DevOps */}
              <span className="badge bg-light text-dark border">Git</span>
              <span className="badge bg-light text-dark border">GitHub</span>
              <span className="badge bg-light text-dark border">AWS</span>
              <span className="badge bg-light text-dark border">Vercel</span>
              <span className="badge bg-light text-dark border">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
