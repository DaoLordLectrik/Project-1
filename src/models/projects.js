import pool from './db.js';

const getAllProjects = async () => {
  const result = await pool.query(`SELECT
      projects.project_id,
      projects.title,
      projects.description,
      projects.location,
      projects.project_date,
      projects.organization_id,
      organization.name AS organization_name
    FROM projects
    JOIN organization ON projects.organization_id = organization.organization_id
    ORDER BY projects.project_date ASC`);
  return result.rows;
};

const getUpcomingProjects = async () => {
  const result = await pool.query(`SELECT
      projects.project_id,
      projects.title,
      projects.description,
      projects.location,
      projects.project_date,
      projects.organization_id,
      organization.name AS organization_name
    FROM projects
    JOIN organization ON projects.organization_id = organization.organization_id
    WHERE projects.project_date >= CURRENT_DATE
    ORDER BY projects.project_date ASC
    LIMIT 5`);
  return result.rows;
};

const getProjectsByOrganizationId = async (organizationId) => {
  const query = `
    SELECT
      project_id,
      organization_id,
      title,
      description,
      location,
      project_date
    FROM projects
    WHERE organization_id = $1
    ORDER BY project_date;
  `;
  const queryParams = [organizationId];
  const result = await pool.query(query, queryParams);
  return result.rows;
};

const getProjectDetails = async (projectId) => {
  const query = `
    SELECT
      projects.project_id,
      projects.title,
      projects.description,
      projects.location,
      projects.project_date,
      projects.organization_id,
      organization.name AS organization_name
    FROM projects
    JOIN organization ON projects.organization_id = organization.organization_id
    WHERE projects.project_id = $1;
  `;
  const queryParams = [projectId];
  const result = await pool.query(query, queryParams);
  return result.rows.length > 0 ? result.rows[0] : null;
};

export { getAllProjects, getUpcomingProjects, getProjectsByOrganizationId, getProjectDetails };