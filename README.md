# Tech Elevator Automation Developer Coding Assessment

Welcome! We are very excited that you have chosen to pursue an Automation Developer position with Tech Elevator!

The goal of this assessment is to gain an understanding of your thought processes and approach to solving problems. It's important that you include the `SUMMARY.md` as described in the _Evaluation Criteria_.

## Your Mission

We have a number of students that need to have exercise scores and averages updated. We'd also like a report displaying students that have an average score less than 2.0.

To accomplish this, you will need to utilize the API provided to write code that does the following:

- Read scores from the `./data/new-scores.csv` file. This file includes new scores for students and exercises.
- Update the exercise scores **ONLY** for students who are `enrolled`.
  - **`new-scores.csv` should not be modified**
- Calculate and update the `average` field, found on `students` for **ALL** students
- Produce a list of only the enrolled students that are below a 2.00 average and print it to the console

### Expected Output

When printing your results to the console, the formatting is up to you. However, we need to see the student's name, as well as the average score for each student that has an average below 2.0. The expected output should be:

```
Enrolled Students Below 2.00 Average:
* Carolus Radcliffe - 1.88
* Adamo Mattaus - 1.63
* Ronald Kidder - 1.63
* Christie Thunnercliff - 1.38
* Darb Fitzpayn - 1.50
```

## About the Project

This project uses a tool called JSON Server to host a file based REST API.

To get things started, you should run the command `npm install` at the root of the project. (NOTE: The specific version of node can be found in the .nvmrc file)

Next, to get both the API server running locally, run the command `npm run serve`.

The API will then be running at `http://localhost:3000`. With the API running, you will then be able to run the command `npm run generate-report`. This runs the script found in `./src/index.js`. `index.js` is a starting point that can be used for the project but this project can be structured however you would like. If modifying or changing how or what scripts should be run, be sure to update the `generate-report` script in the `package.json` file as this is what we will be running when evaluating. This project already includes the `axios` package for interacting with APIs and `index.js` includes some code that uses it, however you can choose to use whatever packages you would like.

For more information related to Axios, check out [the documentation](https://github.com/axios/axios).

### API

The API has the following endpoints:

`/students` - Used to get all of the students. The student data includes the name of the student, the avatar (profile picture for the student), enrolled status, average, and an id.

`/exercises` - Used to get all of the exercises. The exercise data include the name and id of the exercise.

`/studentScores` - Used to get all of the scores for students. This endpoint returns an array of scores for students, and each object includes an id, the id of the exercise, the id of the student, and the score for the exercise.

When working with the API, you are also able to load associated objects. For instance, if you wanted to get all of the exercises with the scores, you could make a GET request like `/exercises?_embed=studentScores`.

The API also supports all other HTTP methods, such as PUT, POST, and DELETE.

The data json-server is using is the `./json-server/data.json` file. If you would like to reset this file back to the original state at anytime, run the command `npm run reset-database`. This will likely be useful to revert changes when testing the updating of scores.

For more information related to JSON server and its capabilities, check out [the documentation](https://github.com/typicode/json-server).

**NOTE: You will not need to make any changes to the API for this project.**

### Tests

A folder called `tests` has been added to the project. We've included jest for testing, as well as an example test to get you started. To run the tests, run the command `npm run test`.

## Evaluation Criteria

We will be looking for the following:

- Code is clean and thoughtful.
  - HINT: run the command `npm run build` to see if your code is compliant with our eslint rules.
- Code is documented where necessary, preferably using JSDoc.
- Commit history includes clear commit messages.
- All of the requested features are implemented.
- Tests have been added, where appropriate.
- A markdown document called `SUMMARY.md` that discusses your thoughts and approach to your solution. This is one of the most important parts of this assessment, so please take your time with this. The file should include:
  - Any thoughts you had and approaches you took during the exercise
  - What tradeoffs you made when formulating your solutions and why
  - How you would approach anything that you didn't complete

While you can research and look up things on the Internet just as you would on the job, it is our expectation that this is your work and that you understand and can describe all code solutions and patterns you write for the exercise.

## Submit Your Work

To submit your work, create a [git bundle](http://schacon.github.io/git/git-bundle.html) of the entire repository using the command `git bundle create your-name-assessment.bundle --all`, and send the file to `recruiting@techelevator.com`.

## Questions?

If you should have any questions related to requirements or expectations, we encourage you to reach out before you dive into the exercise. Please send questions to `recruiting@techelevator.com`.
