# Project 1 — Community Connect

This project is coursework for **CSE340: Web Backend Development**. It is a server-side-rendered web application built with Node.js, Express, and EJS, focused on connecting volunteers with local organizations, service projects, and categories of community service.

## Course Concepts Applied

This project supports the core learning outcomes of CSE340:

1. Developing web applications that follow frontend standards.
2. Creating server-side-rendered applications using modern frameworks and design patterns.
3. Designing and integrating relational databases for CRUD operations (in progress in later assignments).
4. Implementing client-side and server-side validation strategies (in progress in later assignments).
5. Understanding and applying the terminology, principles, and best practices of web backend development.

## Tech Stack

- **Node.js** — server runtime
- **Express** — backend web framework and routing
- **EJS** — server-side templating engine
- **CSS3** — responsive, accessible styling
- **dotenv** — environment variable management


## Pages

- **Home** — landing page introducing the site
- **Organizations** — local organizations open to volunteers
- **Projects** — current service project listings
- **Categories** — service project categories (Environmental, Educational, Community Service, Health and Wellness)

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/DaoLordLectrik/Project-1.git
   cd Project-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```
   PORT=3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:3000` in your browser.

## Deployment

This project is deployed on [Render](https://render.com) as a Node.js Web Service.

- **Build Command:** `npm install`
- **Start Command:** `npm start`

## Author

Built by DaoLordLectrik as part of CSE340 coursework.