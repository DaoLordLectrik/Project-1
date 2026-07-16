import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { testConnection } from './src/models/db.js';
import { getAllOrganizations } from './src/models/organizations.js';
import { getAllProjects } from './src/models/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const pageTitle = 'Home';
  res.render('home', { pageTitle });
});

app.get('/organizations', async (req, res) => {
  const organizations = await getAllOrganizations();
  const pageTitle = 'Organizations';
  res.render('organizations', { pageTitle, organizations });
});

app.get('/categories', async (req, res) => {
  const pageTitle = 'Categories';
  res.render('categories', { pageTitle });
});

app.get('/projects', async (req, res) => {
  const projects = await getAllProjects();
  console.log(projects);
  const pageTitle = 'Service Projects';
  res.render('projects', { pageTitle, projects });
});

app.listen(port, async () => {

    try {
        await testConnection();
        console.log(`Server is running at http://127.0.0.1:${process.env.PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    }   catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1); // Exit the process with an error code
    }

});