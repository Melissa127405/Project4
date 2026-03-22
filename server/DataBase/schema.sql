-- ============================================
-- Categories Table
-- ============================================
CREATE TABLE categories (
  categoryID INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- ============================================
-- Questions Table
-- ============================================
CREATE TABLE questions (
  questionID INT AUTO_INCREMENT PRIMARY KEY,
  categoryID INT NOT NULL,
  question TEXT NOT NULL,
  FOREIGN KEY (categoryID) REFERENCES categories(categoryID)
);

-- ============================================
-- Answers Table
-- ============================================
CREATE TABLE answers (
  answerID INT AUTO_INCREMENT PRIMARY KEY,
  questionID INT NOT NULL,
  answer TEXT NOT NULL,
  FOREIGN KEY (questionID) REFERENCES questions(questionID)
);

-- ============================================
-- Users Table (for login/register)
-- ============================================
CREATE TABLE users (
  userID INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);