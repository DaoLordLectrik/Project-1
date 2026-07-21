// Import any needed model functions (none needed for the home page)

// Define any controller functions
const showHomePage = async (req, res) => {
  const pageTitle = 'Home';
  res.render('home', { pageTitle });
};

// Export any controller functions
export { showHomePage };