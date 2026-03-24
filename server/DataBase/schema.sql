CREATE DATABASE IF NOT EXISTS astro_qa;
USE astro_qa;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  category_id INT NOT NULL,
  question_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE answers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_id INT NOT NULL,
  user_id INT NOT NULL,
  answer_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



USE astro_qa;

INSERT INTO categories (name, description) VALUES
('Aries', 'The Ram — Fire sign ruled by Mars'),
('Taurus', 'The Bull — Earth sign ruled by Venus'),
('Gemini', 'The Twins — Air sign ruled by Mercury'),
('Cancer', 'The Crab — Water sign ruled by the Moon'),
('Leo', 'The Lion — Fire sign ruled by the Sun'),
('Virgo', 'The Maiden — Earth sign ruled by Mercury'),
('Libra', 'The Scales — Air sign ruled by Venus'),
('Scorpio', 'The Scorpion — Water sign ruled by Pluto'),
('Sagittarius', 'The Archer — Fire sign ruled by Jupiter'),
('Capricorn', 'The Goat — Earth sign ruled by Saturn'),
('Aquarius', 'The Water Bearer — Air sign ruled by Uranus'),
('Pisces', 'The Fish — Water sign ruled by Neptune');