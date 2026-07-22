import { getUpcomingProjects, getProjectDetails } from '../models/projects.js';
import { getCategoriesForProject } from '../models/categories.js';

const showProjectsPage = async (req, res) => {
  const projects = await getUpcomingProjects();
  const pageTitle = 'Service Projects';
  res.render('projects', { pageTitle, projects });
};

const showProjectDetailsPage = async (req, res) => {
  const projectId = req.params.id;
  const projectDetails = await getProjectDetails(projectId);
  const categories = await getCategoriesForProject(projectId);
  const pageTitle = 'Service Project Details';

  res.render('project', { pageTitle, projectDetails, categories });
};

export { showProjectsPage, showProjectDetailsPage };