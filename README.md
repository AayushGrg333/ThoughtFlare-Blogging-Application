# Blogging Application


## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description
A blogging application built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. This application allows users to create, edit, and delete blog posts, as well as comment on them. It provides a user-friendly interface and robust features for both writers and readers.

## Features
- User authentication (register, login)
- Create, edit, and delete blog posts

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing blog posts and user information.
- **EJS**: Templating engine for rendering HTML pages.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AayushGrg333/Blogging-Application.git
   cd blogging-application

2. Install dependencies:
    ```bash
       npm install
    
3. Set up your MongoDB database:
   https://www.mongodb.com/docs/manual/installation/
    Create a .env file in the root directory and add your MongoDB connection string:
    ```bash
      MONGODB_URI=your_mongodb_connection_string
    
4. Start the application:
    ```bash
       npm start

5. Visit http://localhost:3000 in your browser
     
### Instructions to Update
- Make sure to replace `yourusername` with your actual GitHub username and repository name.
- Update `your_mongodb_connection_string` with your actual MongoDB connection string when creating your `.env` file.

Let me know if you need anything else!

## Usage
- **Register a new account**: Click on the "Sign Up" button and fill in the required details to create a new account.
  
- **Log in**: Enter your credentials on the login page to access your dashboard.
  
- **Create a blog post**: Click on the "New Post" button, fill in the title and content of your blog, and submit it to publish.
  
- **Edit an existing post**: Navigate to your list of posts, select the post you want to edit, make your changes, and save.
  
- **Delete a post**: In your list of posts, click on the "Delete" button next to the post you want to remove. Confirm the deletion to permanently delete the post.
  
- **Comment on a post**: Visit any blog post and leave your thoughts in the comments section. Your comments will be visible to other readers.


## API Endpoints
Here are some of the key API endpoints available in the application:

- **Get all posts**
  - `GET /`

- **Create a new post**
  - `POST /blog/add-new`

- **Get a specific post**
  - `GET /blog/:id`

- **Update a specific post**
  - `PUT /posts/:id`

- **Delete a specific post**
  - `DELETE /api/posts/:id`



