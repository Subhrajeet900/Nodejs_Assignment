# Nodejs_Assignment
# about :
name - subhrajeet

roll no - 2401350018

course - btech cse (full stack development)

subject - backend devt with nodejs

# Objectives:
In this project, you will practice working with Mongoose Schemas and Models in Node.js, and expose REST API endpoints for storing and retrieving posts.

# Requirements:
1.	Post Schema & Model

○	Create a Post schema and corresponding Mongoose model.

○	The schema should include the following fields (do not include images for now):

■	title → String (required, minimum 5 characters)

■	content → String (required, minimum 20 characters)

■	author → String (required)

■	tags → Array of strings (optional, default empty)

■	likes → Number (default: 0)

■	createdAt → Date (default: current date & time)

2.	API Endpoints
 Implement two API endpoints using Express:

○	POST /create/posts → Store a new post in MongoDB.

○	GET /posts → Retrieve all posts from MongoDB.

3.	Validation & Error Handling

○	Ensure title, content, and author fields are validated before saving.

○	Handle errors gracefully (e.g., missing fields, database errors).

4.	Testing

○	Use Thunder Client or Postman to test your APIs.

○	Share screenshots of successful request/response for both endpoints.







