import "./project-card.css";

interface Project {
  id: number,
  title: string,
  demo: string,
  github: string,
  about: string,
  tags: string[],
  image: string
}

interface Props {
  project: Project,
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                <div className="link-button">
                <i className="devicon-github-original"></i>Github
              </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index)=> {
            return <label key={index} className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt={`Vista previa de ${project.title}`} loading="lazy" />
    </div>
  );
}

export default ProjectCard;