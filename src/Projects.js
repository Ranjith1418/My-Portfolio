import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;