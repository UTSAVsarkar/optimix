import { projects } from "./ProjectConfig";
import { ProjectBox } from "./ProjectBox";

const ProjectShowcase = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectBox key={index} title={project.title} goal={project.goal} actions={project.actions} outcome={project.outcome} />
      ))}
    </>
  );
};

export default ProjectShowcase;
