import React, { useState } from 'react';
import ProjectsHero from '../../components/sections/projects/ProjectsHero';
import ProjectFilter from '../../components/sections/projects/ProjectFilter';
import ProjectGrid from '../../components/sections/projects/ProjectGrid';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <ProjectsHero />
      <ProjectFilter filter={filter} setFilter={setFilter} />
      <ProjectGrid filter={filter} />
    </div>
  );
};

export default Projects;