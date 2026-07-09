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
('City Food Bank', 'Provides meals and groceries to families in need across the region.</p>', 'info@cityfoodbank.org', 'org1.webp'),
('Green Roots Garden', 'A community garden project promoting sustainable, local food access.', 'info@greenrootsgarden.org', 'org2.webp'),
('Bright Futures Mentoring', 'Connects local youth with mentors to support academic and personal growth.', 'infor@brightfuturesmentoring.org', 'org3.webp');

SELECT * FROM organization;

UPDATE organization
SET contact_email = 'info@brightfuturesmentoring.org'
WHERE organization_id = 3;