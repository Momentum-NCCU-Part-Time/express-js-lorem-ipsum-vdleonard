[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/RZIOoUgz)
# Express.js Lorem Ipsum Generator

For this project, you are building a lorem ipsum generator API using Express.js for an existing Vue.js front end application.

Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

## Project Structure and How to Run the Project

This repo contains a Vue.js front-end application that you can use with your API. The front-end application is already built and ready to go, so you don't _need_ to change it, although you are welcome to modify it after you have your API working. You can find the front-end application in the `frontend` folder. To run the front-end application, you will need to install the dependencies.

``` cd frontend && npm install```

The backend application is in the `backend` folder. You will need to install the dependencies for the backend application as well.

``` cd backend && npm install```

Finally, there is a package.json file in the root of the project that contains a script to run both the front-end and back-end applications at the same time. 

Install the dependencies for both applications by running `npm install` again at the project root.

To run both applications, run the following command from the root of the project:

``` npm start ```

❗ Note that there are THREE package.json files in this project. That is because there are three separate applications in this project: the front-end, the back-end, and the project itself. The package.json file in the root of the project is for the project itself, and it contains a script to run both the front-end and back-end applications at the same time. The package.json files in the `frontend` and `backend` folders are for the front-end and back-end applications, respectively. You'll need to install the dependencies separately in each directory, but to run the application you only need to run one command in the outermost directory.

## Project Requirements

Use the [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum) npm package to generate the lorem ipsum text.

Your API should respond to the following URL:

`/lorem`

A GET request to that URL will return a JSON object with the following structure:

```
{
  "lorem": "Dolor esse cupidatat ipsum commodo ut duis id esse voluptate. Consectetur cupidatat non qui sint amet minim aute aliquip."
}
```

### 🌶️ Spicy Options

- Add another endpoint with the structure `/lorem/:number-of-paragraphs`, where `:number-of-paragraphs` is a positive integer that determines how many paragraphs of lorem ipsum text to generate. You'll need to use the [route parameters](https://expressjs.com/en/guide/routing.html#route-parameters) feature of Express.js to do this.
- Change the Vue front-end to include a form that allows the user to specify how many paragraphs of lorem ipsum text to generate. You'll also need to change the URL in the request that the front end makes to use your new endpoint.
- Add other endpoints for international lorem ipsum, using the `lorem-intl` package and [route parameters](https://expressjs.com/en/guide/routing.html#route-parameters). So for example, you could have an endpoint like `/lorem-international/:lang`, so if a request is made to `/lorem-international/es`, the API would return lorem ipsum text in Spanish.
- Read the documentation for the [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum) package and add other options to your API, such as the ability to specify the number of words or sentences in the generated text.
