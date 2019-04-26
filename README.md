# Friend Finder - Node and Express Servers

## Overview

Do you enjoy meeting new people? Then this is the app for you! Simply click on the link given below and take our survey. After submitting the survey, your new best friend will pop up and the rest will be history! 

This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

This project was created as an assignment for the Coding Bootcamp at the University of Minnesota.
View the finished product on [Heroku](https://sleepy-refuge-39767.herokuapp.com/) 


## Requirements

Modularity in the form of separate files for server logic, storing of friends, views, and routing
10-question survey to assess uniqueness of users
Use ```express, body-parser,``` and path npm packages in the ```server.js``` file
Separate JavaScript files for routing (```htmlRoutes.js``` and ```apiRoutes.js)```
Appropriate GET and POST routes for serving HTML pages and API calls https://sleepy-refuge-39767.herokuapp.com/
Separate file for storing friends (```friends.js```)
Calculate best match for user once survey is completed and return that match to the user

## Technologies Used
- HTML
- CSS
- Bootstrap
- Font Awesome
- Javascript
- Express
- Node.js
- JSON
- jQuery

## Code Explanation 

- Our ```server.js``` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files ```(home.html``` and ```survey.html)``` that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
