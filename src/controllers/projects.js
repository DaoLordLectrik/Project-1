// Import any needed model functions
import { getAllProjects } from '../models/projects.js';

// Define any controller functions
const showProjectsPage = async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);
  const pageTitle = 'Service Projects';
  res.render('projects', { pageTitle, projects });
};

// Export any controller functions
export { showProjectsPage };