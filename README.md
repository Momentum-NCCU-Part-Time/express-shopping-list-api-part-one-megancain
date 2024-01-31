[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/QblNUjEI)
# Shopping List API with Node & Express.js: Getting started with CRUD

For the next few weeks we will be building a backend API using Node.js and Express to support the single-page shopping list application (SPA) you built with Vue.js. That application's primary functionality is to enable users to manage their shopping lists, allowing them to create, edit, and delete lists and list items.

Your API's role is to provide the endpoints that the Vue application needs to use. You will build the API using Node.js and Express, MongoDB to store the data, and Mongoose to create the models and interact with the database.

We will build this application in stages as we learn the skills you need to build it.

## CRUD for shopping lists, without items (yet)

In this first stage, we will focus on the basic structure of the application and the first set of API endpoints that will be needed to support CRUD for lists.

### Data modeling for a shopping list

To begin with, you will need to create the ShoppingList schema and model. The ShoppingList model should have a `name` (or `title`) property, and a `createdAt` property and `updatedAt` property that record timestamps. The `name` property should be a string that is required and has a maximum length of 50 characters. The `createdAt` and `updatedAt` properties should each be a date; `createdAt` should be required but `updatedAt` is not required. These dates should be programmatically generated on the back-end, not sent by the client in the body of the POST request. The default value of `createdAt` should be the current time when the object is created.

For now, to keep things simple, **don't worry about modeling the items on the shopping list**. We will add them in a later stage.

### Requirements

Your first task is to build an Express app that provides the RESTful endpoints that your Vue application will need to manage CRUD for the shopping lists (not including the items on the list, yet). Use your endpoint design document to guide you in building the endpoints and remember to follow REST principles and best practices for your endpoints.

Replace the content of this README with the documentation for your endpoints. You can use [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) syntax to format your documentation.

Use the MongoDB Cloud Atlas cluster that you have already set up for your database. Use Mongoose to set up the schema and model for a ShoppingList. Then, build the RESTful endpoints that will enable a client to manage CRUD for the shopping lists. **You should be able to create, read, update, and delete shopping lists using the endpoints you build.**

It is not necessary to include items on a shopping list, yet.

### Accessing your API

You should create a file called `endpoints.rest` in your repo that you can use with the REST Client extension in VS Codium to test your API endpoints.

You do not have to run the Vue app to test your endpoints and the API at the same time, yet. Front-end work is not part of this stage of the project.
