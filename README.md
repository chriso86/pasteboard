# Angular 2.0.0-rc.5-laravel5
Setting up Paste Board

<h2>Installation</h2>

<strong>Step1</strong>
You need pre installed composer, nodejs and typescript (Preferably globally).

<strong>Step2</strong>

Clone the repository.

<strong>Step3</strong>
Open your terminal then navigate to the project directory, and run the commands below:

- composer update
- npm install

This will install all required npm packages and their dependencies as well as download and install all laravel packages and their dependencies.

<strong>Step 4</strong>
Next run the following commands to copy libraries to the public folder, minify files, as well as configure your TypeScript environment

- gulp bower --force-latest
- gulp

<strong>Step 5</strong>

<hr/>

<h2>Running the project from the local server</h2>

<strong>Step 1</strong>
Open your terminal then navigate to the project directory, and run the command below:

php artisan serve --port=8080

You may change the port to which ever port you desire.

<strong>Step 2</strong>
Open a new terminal, navigate to the project directory, and run the command below:
gulp watch

This will keep an eye on your TypeScript files and compile them to .js files on file change.

<strong>step 3</strong>
Navigate to the link below in your web browser:

http://localhost:8080/

<hr />

<h2>Notes</h2>

- The Angular 2 code for the project may be found in the resources/assets/typescript folder
- The Angular 2 portion of the application implements the Atomic design principles
- Google Material 2 alpha 7 has been included in this project however bootstrap is still included due to Google Material 2 being limited at present
- Artisan is used to maintain back-end code

<strong>Please note that this build may currently be failing as I have yet to implement Travis for build testing</strong>