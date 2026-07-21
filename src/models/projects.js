import pool from './db.js';

const getAllProjects = async () => {
  const result = await pool.query(`SELECT
      projects.project_id,
      projects.title,
      projects.description,
      projects.location,
      projects.project_date,
      organization.name AS organization_name
    FROM projects
    JOIN organization ON projects.organization_id = organization.organization_id
    ORDER BY projects.project_date ASC`);
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

export { getAllProjects, getProjectsByOrganizationId };