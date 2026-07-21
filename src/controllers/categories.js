// Import any needed model functions (none yet — categories page is currently static)

// Define any controller functions
const showCategoriesPage = async (req, res) => {
  const pageTitle = 'Categories';
  res.render('categories', { pageTitle });
};

// Export any controller functions
export { showCategoriesPage };