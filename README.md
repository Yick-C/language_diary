# Language Learning Diary App
Welcome to the Language Learning Diary App! This application is designed to help users keep track of their language learning progress by allowing them to create, edit, update, and delete diary entries. Additionally, users can also add vocabulary lists to help them in their language learning journey.

## Features
- Create diary entries with a date and text content.
- Edit and update existing diary entries.
- Delete diary entries to keep your records organized.
- Add vocabulary lists to your diary entries, helping you track the words and phrases you're learning.

## Prerequisites
Before you start, ensure you have the following prerequisites:

- Node.js: You need Node.js installed on your system.
- npm (Node Package Manager): Typically installed with Node.js.
- MongoDB: This application uses MongoDB as the database.

## Getting Started
To get this project up and running on your local machine, follow these steps:

1. Clone the repository:
```
git clone <repository-url>
```
2. Navigate to the project directory:
```
cd language-learning-diary-app
```
3. Install server-side dependencies:
```
cd server
npm install
```
4. Install client-side dependencies:
```
cd ../client
npm install
```
5. Start the server and client:
```
# Start the server (from the 'server' directory)
npm start

# Start the client (from the 'client' directory)
npm start
```
Now, your application should be up and running.

## Server-side (Express.js)
The server-side of this application is built using Express.js. Here's how you can work with the server:

- server.js: The main server file that sets up the Express application, defines routes, and connects to the MongoDB database.
- routes/: Contains route definitions for diary entries and vocabulary lists.
- models/: Defines Mongoose models for diary entries and vocabulary lists.
- config/: Configuration files for the server, such as database connection settings.

## Client-side (React)
The client-side of this application is built using React. Here's how you can work with the client:

- src/: The main source code directory for the React application.
- components/: Contains React components for creating, editing, and listing diary entries, as well as managing vocabulary lists.
- App.js: The main application component.
- App.css: Styles for the application.