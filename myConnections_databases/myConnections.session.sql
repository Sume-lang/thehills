
CREATE TABLE Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    identity_number VARCHAR(255) NOT NULL,
    passport_number VARCHAR (255) NOT NULL,
    country_from VARCHAR(255) NOT NULL,
    gender ENUM ('Male', 'Female','Other') NOT NULL,
    addresses VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    emergency_contact VARCHAR(255) NOT NULL,
    social_media VARCHAR(255) NOT NULL,
    insurance_type VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- tenure databases 
CREATE TABLE Vihicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vihicle_merk VARCHAR(255) NOT NULL,
    vihicle_type VARCHAR(255) NOT NULL,
    vihicle_color VARCHAR(255) NOT NULL,
    vihicle_number VARCHAR(255) NOT NULL,
    vihicle_capacity VARCHAR(255) NOT NULL,
    vihicle_year VARCHAR(255) NOT NULL,
    vihicle_regist_number VARCHAR(255) NOT NULL,
    owners VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE accomdations (
    id int AUTO_INCREMENT PRIMARY,
    type_hotels VARCHAR (255) NOT NULL,
);

-- product details databases
CREATE TABLE Services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sercice_name ENUM('Tour and Travels', 'Accomodations', 'Transportations') NOT NULL,
    service_description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Tour_and_travels ();
CREATE TABLE Accomodations ();
CREATE TABLE Transportations ();

--bookings databases



--post databases
CREATE TABLE Post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_title VARCHAR(255) NOT NULL,
    post_description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Img (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    img_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Foreign Key (post_id) REFERENCES ( Post (id) ),
);
CREATE TABLE Catagory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    catagory_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    Foreign Key (post_id) REFERENCES ( Post (id) ),
);
