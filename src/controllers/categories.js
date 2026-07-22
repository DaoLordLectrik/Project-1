// Import any needed model functions (none yet — categories page is currently static)
import { getAllCategories, getCategoryById, getProjectsForCategory } from '../models/categories.js';

// Define any controller functions
const showCategoriesPage = async (req, res) => {
  const categories = await getAllCategories();
  const pageTitle = 'Categories';
  res.render('categories', { pageTitle, categories });
};

const showCategoryDetailsPage = async (req, res) => {
  const categoryId = req.params.id;
  const categoryDetails = await getCategoryById(categoryId);
  const projects = await getProjectsForCategory(categoryId);
  const pageTitle = 'Category Details';

  res.render('category', { pageTitle, categoryDetails, projects });
};

// Export any controller functions
export { showCategoriesPage, showCategoryDetailsPage };