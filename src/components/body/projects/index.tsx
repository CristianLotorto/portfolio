import Separator from "../../common/separator";
import { ProjectData } from "../../../../public/data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Proyectos</label>
      <div>
        {data.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;