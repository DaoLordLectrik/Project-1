import db from './db.js';

const getAllCategories = async () => {
  const query = 'SELECT category_id, category_name FROM categories;';
  const result = await db.query(query);
  return result.rows;
};

const getCategoryById = async (categoryId) => {
  const query = `
    SELECT category_id, category_name
    FROM categories
    WHERE category_id = $1;
  `;
  const queryParams = [categoryId];
  const result = await db.query(query, queryParams);
  return result.rows.length > 0 ? result.rows[0] : null;
};

const getCategoriesForProject = async (projectId) => {
  const query = `
    SELECT categories.category_id, categories.category_name
    FROM categories
    JOIN project_categories ON categories.category_id = project_categories.category_id
    WHERE project_categories.project_id = $1;
  `;
  const queryParams = [projectId];
  const result = await db.query(query, queryParams);
  return result.rows;
};

const getProjectsForCategory = async (categoryId) => {
  const query = `
    SELECT projects.project_id, projects.title, projects.project_date
    FROM projects
    JOIN project_categories ON projects.project_id = project_categories.project_id
    WHERE project_categories.category_id = $1
    ORDER BY projects.project_date;
  `;
  const queryParams = [categoryId];
  const result = await db.query(query, queryParams);
  return result.rows;
};

export { getAllCategories, getCategoryById, getCategoriesForProject, getProjectsForCategory };