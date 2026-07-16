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

export { getAllProjects };