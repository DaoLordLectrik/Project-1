-- ========================================
-- Organization Table
-- ========================================
CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);

-- ========================================
-- Insert sample data: Organizations
-- ========================================
INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('City Food Bank', 'Provides meals and groceries to families in need across the region.', 'info@cityfoodbank.org', 'org1.webp'),
('Green Roots Garden', 'A community garden project promoting sustainable, local food access.', 'info@greenrootsgarden.org', 'org2.webp'),
('Bright Futures Mentoring', 'Connects local youth with mentors to support academic and personal growth.', 'infor@brightfuturesmentoring.org', 'org3.webp');

SELECT * FROM organization;

UPDATE organization
SET contact_email = 'info@brightfuturesmentoring.org'
WHERE organization_id = 3;

-- ========================================
-- Categories Table
-- ========================================
CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL
);

-- ========================================
-- Projects Table
-- ========================================
CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  organization_id INT NOT NULL REFERENCES organization(organization_id),
  title VARCHAR(150) NOT NULL,
  description TEXT,
  location VARCHAR(150),
  project_date DATE NOT NULL
);

-- ========================================
-- Project categories Table
-- ========================================
CREATE TABLE project_categories (
  project_id INT NOT NULL REFERENCES projects(project_id),
  category_id INT NOT NULL REFERENCES categories(category_id),
  PRIMARY KEY (project_id, category_id)
);

-- ========================================
-- Insert sample data: Categories
-- ========================================
INSERT INTO categories (category_name) VALUES
  ('Environmental'),
  ('Educational'),
  ('Community Service'),
  ('Health and Wellness');

-- ========================================
-- Insert sample data: Projects
-- ========================================
INSERT INTO projects (organization_id, title, description, location, project_date) VALUES
  (1, 'Community Garden Cleanup', 'Volunteers clear and prep garden beds for spring planting.', 'Tema Central Park', '2026-03-14'),
  (1, 'Youth Coding Workshop', 'A one-day workshop introducing local youth to basic coding skills.', 'Tema Community Library', '2026-04-02'),
  (1, 'Food Drive Collection', 'Collecting and sorting non-perishable food donations.', 'Tema Market Square', '2026-04-20'),
  (1, 'School Supply Packing', 'Packing school supply kits for underprivileged students.', 'BrightFuture Warehouse', '2026-05-05'),
  (1, 'Neighborhood Tree Planting', 'Planting native trees along residential streets.', 'Tema Ridge Estate', '2026-05-18'),

  (2, 'Riverbank Restoration', 'Removing invasive plants and restoring native vegetation along the riverbank.', 'Densu River', '2026-03-21'),
  (2, 'Organic Farming Class', 'Teaching sustainable farming techniques to local residents.', 'GreenHarvest Farm', '2026-04-08'),
  (2, 'Compost Bin Build Day', 'Building and distributing compost bins to community members.', 'GreenHarvest Center', '2026-04-25'),
  (2, 'Seed Bank Sorting', 'Sorting and cataloging seeds for the community seed bank.', 'GreenHarvest Storage Facility', '2026-05-10'),
  (2, 'Wetlands Cleanup', 'Removing debris from local wetlands to protect wildlife habitats.', 'Sakumo Wetlands', '2026-05-27'),

  (3, 'Health Screening Day', 'Free basic health screenings for community members.', 'UnityServe Clinic', '2026-03-18'),
  (3, 'Elderly Care Visits', 'Volunteers visit elderly residents to provide companionship and assistance.', 'Tema Senior Home', '2026-04-05'),
  (3, 'Mental Health Awareness Walk', 'A community walk to raise awareness about mental health resources.', 'Tema Beach Road', '2026-04-22'),
  (3, 'Blood Donation Drive', 'Partnering with local hospitals to collect blood donations.', 'UnityServe Hall', '2026-05-08'),
  (3, 'Nutrition Workshop', 'Teaching healthy eating habits on a budget.', 'UnityServe Kitchen', '2026-05-24');

-- ========================================
-- Insert sample data: Project Categories
-- ========================================
INSERT INTO project_categories (project_id, category_id) VALUES
  (1, 1), (1, 3),
  (2, 2),
  (3, 3),
  (4, 3), (4, 2),
  (5, 1),
  (6, 1),
  (7, 1), (7, 2),
  (8, 1),
  (9, 1),
  (10, 1),
  (11, 4),
  (12, 3), (12, 4),
  (13, 4),
  (14, 4), (14, 3),
  (15, 4), (15, 2);