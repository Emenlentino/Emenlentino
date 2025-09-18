import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="bg-white py-5">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">Projects</h2>
        <div className="row">
          {projects.map((proj, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title text-dark fw-bold">{proj.title}</h5>
                  <p className="card-text text-muted">{proj.description}</p>
                  <div className="mb-3">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-2">{tech}</span>
                    ))}
                  </div>
                  <a href={proj.link} className="btn btn-outline-primary btn-sm rounded-pill">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
