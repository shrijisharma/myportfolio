
import "./Projects.css";

function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="project-details">

      <button className="project-back" onClick={onBack}>
        ← Back to Projects
      </button>

      <div className="project-details-layout">

        {/* Project Image */}
        <div className="project-preview">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="image-placeholder">
              Project Screenshot
            </div>
          )}
        </div>

        {/* Project Information */}
        <div className="project-info">

          <p className="project-category">
            {project.category}
          </p>

          <h2>{project.title}</h2>

          <p className="project-description">
            {project.description}
          </p>

          <h3>Technologies Used</h3>

          <div className="project-tech">
            {project.technologies?.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="project-actions">

  {project.frontendLink && (
    <a
      href={project.frontendLink}
      target="_blank"
      rel="noreferrer"
    >
      Frontend Repository ↗
    </a>
  )}

  {project.backendLink && (
    <a
      href={project.backendLink}
      target="_blank"
      rel="noreferrer"
    >
      Backend Repository ↗
    </a>
  )}
    {project.frontend && (
    <a
      href={project.frontend}
      target="_blank"
      rel="noreferrer"
    >
      Frontend Link↗
    </a>
  )}
    {project.dashboard && (
    <a
      href={project.dashboard}
      target="_blank"
      rel="noreferrer"
    >
      Dashboard Link↗
    </a>
  )}

    {project.github&& (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      github ↗
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo ↗
    </a>
  )}

</div>
          {project.status && (
            <p className="project-status">
              {project.status}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
