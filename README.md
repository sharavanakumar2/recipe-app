# Recipe API - Deployed on Render

This is my Recipe API, a backend application built with Node.js, Express.js, and MongoDB. It allows you to manage recipes through a simple RESTful API.

## Features

* **Create Recipes:** Add new recipes with a title, ingredients list, and cooking instructions.
* **View Recipes:** Retrieve a list of all recipes or get details for a specific recipe by its ID.
* **Update Recipes:** Modify existing recipes with new information.
* **Delete Recipes:** Remove recipes from the database.

## Getting Started

### Prerequisites

* Node.js and npm installed on your local machine (for development).
* A MongoDB Atlas account (for the cloud database).
* Postman (or a similar tool) for testing the API.

### Local Development (Optional)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/sharavanakumar2/recipe-app.git
    cd recipe-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    * Add your MongoDB connection string:

        ```
        MONGODB_URI=mongodb+srv://<your_atlas_username>:<your_atlas_password>@<your_cluster>.mongodb.net/<your_database>?retryWrites=true&w=majority&appName=<your_app_name>
        ```

    * Remember to replace the placeholders with your actual Atlas credentials.
    * **Important:** Add `.env` to your `.gitignore` to prevent committing it to version control.

4.  **Run the application locally:**

    ```bash
    npm start
    ```

    * The API will be available at `http://localhost:3000`.

### Deployed Application

* This API is deployed on Render.
* **Render URL:** `https://recipe-app-1-3kse.onrender.com`

## API Endpoints

* **POST /api/recipes:** Create a new recipe.

    * Request body (JSON):

        ```json
        {
            "title": "Recipe Title",
            "ingredients": ["Ingredient 1", "Ingredient 2"],
            "instructions": "Recipe instructions."
        }
        ```

    * Example Request using Postman:

        * Method: POST
        * URL: `https://recipe-app-1-3kse.onrender.com/api/recipes`
        * Body: Raw (JSON) - see example above.
        * Example Response: 201 Created with the created recipe object.

* **GET /api/recipes:** Get all recipes.
* **GET /api/recipes/:id:** Get a single recipe by ID.
* **PUT /api/recipes/:id:** Update a recipe.
* **DELETE /api/recipes/:id:** Delete a recipe.

## Testing

I've tested the API using Postman, as shown in the provided screenshot. The `POST /api/recipes` endpoint is working correctly, returning a 201 Created status and the created recipe data.

## Deployment

This application is deployed on Render. To deploy your own version:

1.  Push your code to GitHub.
2.  Create a Render account.
3.  Create a new Web Service on Render, connecting your GitHub repository.
4.  Set the `MONGODB_URI` environment variable in Render with your MongoDB Atlas connection string.
5.  Deploy.
