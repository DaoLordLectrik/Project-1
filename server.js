import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const pageTitle = 'Home';
  res.render('home', { pageTitle });
});

app.get('/organizations', async (req, res) => {
  const pageTitle = 'Organizations';
  res.render('organizations', { pageTitle });
});

app.get('/projects', async (req, res) => {
  const pageTitle = 'Service Projects';
  res.render('projects', { pageTitle });
});

app.get('/categories', async (req, res) => {
  const pageTitle = 'Categories';
  res.render('categories', { pageTitle });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});